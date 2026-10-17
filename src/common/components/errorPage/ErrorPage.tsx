import type { FC } from 'react'
import { useNavigate } from 'react-router'
import type { ErrorPageProps } from '@/common/components/errorPage/errorPageType.ts'
import s from './errorPage.module.css'
import { BaseButton } from '@/common/components/button/baseButton'
import { Path } from '@/common/constants'


export const ErrorPage: FC<ErrorPageProps> = ({
                                                code = 404,
                                                message = 'Page not found',
                                              }) => {
  const navigate = useNavigate()

  return (
    <section className={s.errorPage}>
      <h1 className={s.code}>{code}</h1>
      <p className={s.message}>{message}</p>
      <p className={s.hint}>
        The page you are looking for doesn&#39;t exist or has been moved.
      </p>

      <div className={s.actions}>
        <BaseButton title="Go home" accentBtn onClick={() => navigate(Path.Main)} />
        <BaseButton title="Back" onClick={() => navigate(-1)} />
      </div>
    </section>
  )
}