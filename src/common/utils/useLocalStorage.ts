import { useState, useEffect, useCallback } from 'react'

const LOCAL_KEY_EVENT = 'local-storage-update'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStoredValue((prev) => {
          const valueToStore =
            value instanceof Function ? value(prev) : value
          localStorage.setItem(key, JSON.stringify(valueToStore))

          // 🔔 уведомляем текущий таб
          window.dispatchEvent(
            new CustomEvent(LOCAL_KEY_EVENT, {
              detail: { key, value: valueToStore },
            }),
          )
          return valueToStore
        })
      } catch (e) {
        console.error(e)
      }
    },
    [key],
  )

  useEffect(() => {
    // 1) изменения В ТЕКУЩЕМ табе (наше кастомное событие)
    const onLocal = (e: Event) => {
      const { key: changedKey, value } = (e as CustomEvent).detail
      if (changedKey === key) setStoredValue(value as T)
    }

    // 2) изменения В ДРУГИХ вкладках (стандартное событие)
    const onStorage = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setStoredValue(JSON.parse(e.newValue))
      }
    }

    window.addEventListener(LOCAL_KEY_EVENT, onLocal)
    window.addEventListener('storage', onStorage)

    return () => {
      window.removeEventListener(LOCAL_KEY_EVENT, onLocal)
      window.removeEventListener('storage', onStorage)
    }
  }, [key])

  return [storedValue, setValue] as const
}