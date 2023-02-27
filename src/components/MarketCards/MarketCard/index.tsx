import React from 'react'
import styles from './MarketCard.module.sass'

import coins from '../../../assets/header/balance.svg'

export const MarketCard = (props: {brand: string, name: string, category: string, imageUrl: string, price: number}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img src={props.imageUrl} alt="shopItem" className={styles.small}/>
            <div className={styles.brandContainer}>{props.brand}</div>
        </div>
        <div className={styles.bigText}>{props.name}</div>
        <div className={styles.smallText}>{props.category}</div>
        <div className={styles.priceContainer}>
            <img src={coins} alt="coins"/>
            <div className={styles.price}>{props.price}</div>
        </div>
    </div>
  )
}
