import React, { useState, useEffect } from 'react'
import '../AnimatedContainer/animatedContainer.scss'
import Search from '../SearchSection/Search'
import Favorites from '../FavoritesSection/Favorites'
import Settings from '../SettingsSection/Settings'

const AnimatedContainer = (prop) => {

    function closedContainer() {
        prop.setIsClosed(true)
    }

    const slide = () => {
        if (prop.button === 'search') {
            return (<Search/>)
        } else if (prop.button === 'favorite') {
            return (<Favorites/>)
        } else if (prop.button === 'settings') {
            return (<Settings/>)
        } 
    }

    // useEffect(function() {
    //     if (slide()) {
    //         setClosed(false)
    //     }

    //     console.log(isClosed)
    // }, [])



  return (
    <div className={prop.isClosed ? 'animated-container closed' : 'animated-container open'}>
        <div className='animated-content'>
            <div className='close-btn' onClick={closedContainer}>
                <i className='bx bx-x bx-sm'></i>
            </div>
            {slide()}
        </div>
    </div>
  )
}

export default AnimatedContainer