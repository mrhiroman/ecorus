import React from 'react'
import styles from './index.module.sass'

import logo from '../../assets/header/logo.png'
import mapMarker from '../../assets/header/location.svg'
import balance from '../../assets/header/balance.svg'
import avatar from '../../assets/header/avatar.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
            <div className={styles.leftContainer}>
                <img className={styles.logo} src={logo} alt="logo"/>
                <nav className={styles.nav}>
                    <a href="">Главная</a>
                    <a href="">Пункты сбора</a>
                    <a href="">ЭкоМаркет</a>
                    <a href="">О сервисе</a>
                </nav>
            </div>
            <nav className={styles.rightContainer}>
                <div className={styles.nav}>
                    <a href="" className={styles.link}>
                        <img src={mapMarker} alt="city"/>
                        Казань
                    </a>
                </div>
                <nav className={styles.nav}>
                    <a href="" className={styles.boldLink}>
                        <img src={balance} alt="balance"/>
                        1000
                    </a>
                    <a href="" className={styles.link}>
                        <img src={avatar} alt="avatar"/>
                        Алексей
                    </a>
                </nav>
            </nav>
        </header>
  )
}
