import React, { useState, useEffect } from 'react'
import '../AnimatedContainer/animatedContainer.scss'
import Search from '../SearchSection/Search'
import Favorites from '../FavoritesSection/Favorites'
import Settings from '../SettingsSection/Settings'

const AnimatedContainer = ({setBackground, background, setIsClosed, isClosed, button, setTextColor, textColor}) => {

    function closedContainer() {
        setIsClosed(true)
    }

    const slide = () => {
        if (button === 'search') {
            return (<Search/>)
        } else if (button === 'favorite') {
            return (<Favorites/>)
        } else if (button === 'settings') {
            return (<Settings setBackground={setBackground} background={background} setTextColor={setTextColor} textColor={textColor}/>)
        } 
    }

    // useEffect(function() {
    //     if (slide()) {
    //         setClosed(false)
    //     }

    //     console.log(isClosed)
    // }, [])



  return (
    <div className={isClosed ? 'animated-container closed' : 'animated-container open'}>
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