import React from 'react'
import '../SearchSection/search.scss'
import ListDisplay from '../ListDisplay/ListDisplay'

const Search = () => {
  return (
    <div className='search-content'>
      <input type='text' placeholder='Search'/>
      <ListDisplay />
    </div>
    
  )
}

export default Search