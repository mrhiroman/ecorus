import React from 'react'
import styles from './MarketCard.module.sass'

import coins from '../../../assets/header/balance.svg'

export const CustomCard = () => {
  return (
    <div className={`${styles.container} ${styles.containerCustom}`}>
        <div className={styles.priceContainer}>
            <div className={styles.smallTextThin}>На вашем балансе</div>
            <img src={coins} alt="coins"/>
            <div className={styles.price}>200</div>
        </div>
        <div className={styles.smallTextThinGray}>Вы можете обменять их на скидку 200 руб.</div>
        <div className={styles.button}>
            Получить промокод
        </div>
    </div>
  )
}
