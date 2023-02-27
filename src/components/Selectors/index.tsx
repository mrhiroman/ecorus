import React from 'react'
import { Checkbox } from './Checkbox'
import styles from './Selectors.module.sass'

export const Selectors = () => {
  return (
    <div className={styles.selectorPanel}>
      <div className={styles.container}>
        <div className={styles.checkboxGroup}>
          <div className={styles.groupCaption}>Пол</div>
          <Checkbox text="Мужской" shouldBeChecked={true}/>
          <Checkbox text="Женский" />
        </div>
        <div className={styles.checkboxGroup}>
          <div className={styles.groupCaption}>Тип товара</div>
          <Checkbox text="Выбрать все" shouldBeChecked={true}/>
          <Checkbox text="Одежда" />
          <Checkbox text="Обувь" />
          <Checkbox text="Аксессуары" />
        </div>
        <div className={styles.checkboxGroup}>
          <div className={styles.groupCaption}>Бренд</div>
          <Checkbox text="Выбрать все" shouldBeChecked={true}/>
          <Checkbox text="H&M" />
          <Checkbox text="P&B" />
          <Checkbox text="Adidas" />
          <Checkbox text="Nike" />
          <Checkbox text="Reebok" />
        </div>
      </div>
      <div className={styles.button}>Сбросить фильтры</div>
    </div>
  )
}
