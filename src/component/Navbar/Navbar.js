import React, { useState } from 'react'
import '../Navbar/navbar.scss'
import AnimatedContainer from '../AnimatedContainer/AnimatedContainer'


const Navbar = ({setPress, setBackground, background, setTextColor, textColor, setIsFavorite, isFavorite, setSelectedSong, selectedSong}) => {
  const [button, setButton] = useState('')

  const [isClosed, setIsClosed] = useState(true)

  function handleButtonClick(e) {
    const title = e.target.className;
    if (title.includes('search')) {
      setButton('search')
    } else if (title.includes('heart')) {
      setButton('favorite')
    } else if (title.includes('cog')) {
      setButton('settings')
    }

    setIsClosed(false)
  }
   

  return (
    <> 
    <header>
      <nav>
        <div className='navbar'>
          <div className='main-menu'>
            <i className='bx bx-search-alt-2' onClick={handleButtonClick}></i>
            <i className='bx bxs-heart' onClick={handleButtonClick}></i>
            <i className='bx bxs-cog' onClick={handleButtonClick}></i>
          </div>
          <div className='separate'></div>
          <div className='social-links'>
            <i className='bx bxl-github'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-linkedin-square'></i>
          </div>
        </div>
      </nav>
    </header>
    <section className='animated-section' style={{}}>
      {/* {button === 'settings' ? <AnimatedSettings /> : <AnimatedContainer button={button}/> } */}
      <AnimatedContainer setPress={setPress} setBackground={setBackground} background={background} setIsClosed={setIsClosed} isClosed={isClosed} button={button} setTextColor={setTextColor} textColor={textColor} setIsFavorite={setIsFavorite} isFavorite={isFavorite} setSelectedSong={setSelectedSong} selectedSong={selectedSong}/>
      
    </section>
    </> 
  )
}

export default Navbar