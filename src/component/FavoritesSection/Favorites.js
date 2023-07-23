import React from 'react'
import '../FavoritesSection/favorites.scss'
import ListDisplay from '../ListDisplay/ListDisplay'

const Favorites = ({setIsFavorite, isFavorite}) => {
  return (
    <div className='favorite-content'>
      <div className='favorite-title'>
        <p>All Favorites</p>
      </div>
      <ListDisplay setIsFavorite={setIsFavorite} isFavorite={isFavorite}/>
    </div>
  )
}

export default Favorites