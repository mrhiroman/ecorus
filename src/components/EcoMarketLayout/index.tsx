import React from 'react'
import { MarketCards } from '../MarketCards'
import { Selectors } from '../Selectors'
import { SortOptions } from '../SortOptions'
import styles from './EcoMarketLayout.module.sass'

export const EcoMarketLayout = () => {
  return (
    <div>
        <div className={styles.pageUpper}>
            <div className={styles.pageName}>
                ЭкоМаркет
            </div>
            <SortOptions />
        </div>
        <div className={styles.pageMain}>
            <Selectors />
            <MarketCards />
        </div>
    </div>
  )
}
