import React, { useEffect, useState } from 'react'
import '../FavoritesSection/favorites.scss'
import ListDisplay from '../ListDisplay/ListDisplay'

const Favorites = ({setIsFavorite, isFavorite}) => {
  const [audioData, setAudioData] = useState()

  useEffect(function() {
    setAudioData(isFavorite)
  }, [])

  return (
    <div className='favorite-content'>
      <div className='favorite-title'>
        <p>All Favorites</p>
      </div>
      <ListDisplay setIsFavorite={setIsFavorite} isFavorite={isFavorite} audioData={audioData}/>
    </div>
  )
}

export default Favorites