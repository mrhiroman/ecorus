import React from 'react'
import styles from './Footer.module.sass'

import mail from '../../assets/header/mail.svg'
import phone from '../../assets/header/phone.svg'

export const Footer = () => {
  return (
        <div className={styles.footer}>
            <div className={styles.mail}>
                <img src={mail} alt=""/>
                <span className={styles.caption}>info@ecorus.ru</span>
            </div>
            <div className={styles.phone}>
                <img src={phone} alt=""/>
                <span className={styles.caption}>+7 (800) 880-88-88</span>
            </div>
        </div>
  )
}
