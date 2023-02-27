import React from 'react'
import { MarketCard } from './MarketCard'
import { CustomCard } from './MarketCard/CustomCard'
import styles from './MarketCards.module.sass'

import pic1 from '../../assets/products/NikeAirMax2021.png'
import pic2 from '../../assets/products/NikeAirMax90Premium.png'
import pic3 from '../../assets/products/AdidasAlphabounceRC.png'
import pic4 from '../../assets/products/H&MAirMax2021.png'
import pic5 from '../../assets/products/NikeAirForce1Low.png'

export const MarketCards = () => {

  const items = [
    {img: pic1, brand: 'NIKE', name: 'Nike Air Max 2021', category: 'Мужская обувь', price: 1000},
    {img: pic2, brand: 'NIKE', name: 'Nike Air Max 90 Premium', category: 'Мужская обувь', price: 750},
    {img: pic3, brand: 'Adidas', name: 'Adidas Alphabounce RC', category: 'Мужская обувь', price: 1200},
    {img: pic4, brand: 'H&M', name: 'Nike Air Max 2021', category: 'Мужская обувь', price: 1000},
    {img: pic5, brand: 'NIKE', name: 'Nike Air Force 1 Low', category: 'Мужская обувь', price: 2100}
  ]
  return (
    <div className={styles.root}>
      <CustomCard />
      {items.map((item, i) => <MarketCard key={i} imageUrl={item.img} brand={item.brand} name={item.name} category={item.category} price={item.price} />)}
    </div>
  )
}
