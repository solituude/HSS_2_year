import React from 'react'
import s from './EpisodesCard.module.scss'

export const EpisodesCard = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.imgWrap}>
            <img src="https://cdn.dribbble.com/users/1308142/screenshots/8110192/dribbble_rickmorty_4x.png" alt="" />
        </div>
        <div className={s.content}>
            <p className={s.name}>Citadel of Ricks</p>
            <div className={s.flex}>
                <p className={s.mute}>S01E01</p>
                <p>December 2, 2013</p>
            </div>
        </div>
    </div>
  )
}
