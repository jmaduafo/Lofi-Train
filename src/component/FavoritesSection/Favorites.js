import React from 'react'
import '../FavoritesSection/favorites.scss'
import ListDisplay from '../ListDisplay/ListDisplay'

const Favorites = () => {
  return (
    <div className='favorite-content'>
      <div className='favorite-title'>
        <p>All Favorites</p>
      </div>
      <ListDisplay />
    </div>
  )
}

export default Favorites