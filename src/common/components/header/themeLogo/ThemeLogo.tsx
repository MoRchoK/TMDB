import s from './themeLogo.module.css'


export const ThemeLogo: React.FC = () => {

  return (
        <div className={s.themeLogoContainer}>
          <svg>
            <use href="/iconsSprites.svg#moonStars" />
          </svg>
        </div>
  )
}
