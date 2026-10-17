import type { FC } from 'react'
import { Avatar, Typography } from '@mui/material'
import s from '../movieDetails.module.css'
import type { MovieCastType } from './movieCastType.ts'
import { getUrlPoserImage } from '@/common/utils/getUrlPosterImage.ts'


export const MovieCast: FC<MovieCastType> = ({ cast }) => {
  return (
    <section className={s.section}>
      <Typography className={s.sectionTitle}>Cast</Typography>
      <div className={s.castGrid}>
        {cast.map((member) => {
            if (member.order > 5) return null
            return (<div key={member.id} className={s.castItem}>
              <Avatar className={s.castAvatar} src={getUrlPoserImage(member.profile_path, 'w154')}
                      alt={member.name || 'Actor'} />
              <span className={s.castName}>{member.name}</span>
              <span className={s.castRole}>{member.original_name}</span>
            </div>)
          },
        )}
      </div>
    </section>
  )
}
