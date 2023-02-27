import React from 'react'
import styles from './SortOptions.module.sass'

export const SortOptions = () => {
  return (
    <div className={styles.container}>
        <div className={`${styles.button} ${styles.buttonSelected}`}>По популярности</div>
        <div className={styles.button}>По цене</div>
        <div className={styles.button}>По новизне</div>
    </div>
  )
}
