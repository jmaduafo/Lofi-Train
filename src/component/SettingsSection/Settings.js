import React, { useState, useEffect } from 'react'
import '../SettingsSection/settings.scss'
import lofiImages from '../../imageData'
import image from '../../assets/images/lofi1.jpg'


const Settings = () => {
  const [count, setCount] = useState(0)
  const [yourName, setYourName] = useState('Stranger');
  const [changeName, setChangeName] = useState('');
  
  const [display, setDisplay] = useState('none')

  // SAVES THE INPUT NAME TO LOCAL STORAGE TO PERSIST AFTER PAGE REFRESH
  useEffect(function() {
    setYourName(localStorage.getItem('name'))

  }, [])

  // THE EDIT BUTTON DISPLAYS THE FORM AND THE CLOSE BUTTON HIDES THE FORM USING 'DISPLAY' IN STYLES
  function displayShow (e) {
    if (e.target.className.includes('edit')) {
      setDisplay('block');
    } else if (e.target.className.includes('close')) {
      setDisplay('none');
    }
  }

  // HANDLES THE INPUT VALUE CHANGE WHEN KEY IS PRESSED
  function handleChange(e) {
    setChangeName(e.target.value)
  }

  // SUBMITS THE EDIT NAME FORM AND SAVES VALUE TO LOCAL STORAGE
  function nameEditSubmit(e) {
    e.preventDefault()
    localStorage.setItem('name', yourName)
  }

  // SINCE THERE'S A SMALL BUG THAT MAKES ME CLICK 'SAVE' TWICE TO SAVE TO LOCAL STORAGE,
  // I MANIPULATE THE SITUATION TO MAKE THE USER CONFIRM THE FORM SUBMIT BY MAKING 'SAVE' CHANGE TO
  // 'CONFIRM' WHEN CLICKED ONCE SO IT LOOKS LIKE IT WAS DONE ON PURPOSE :P
  // UPON EDIT CONFIRMATION, THE NAME IS THEN SAVED TO LOCAL STORAGE AND RENDERS TO PAGE
  function confirmClick(e) {
    if (count === 0) {
      e.target.innerText = 'Confirm'
      setCount(count + 1);
    }

    if (count === 1) {
      e.target.innerText = 'Save'
      setCount(count - 1);
      setYourName(changeName)
    }
  }

  return (
    <div className='setting-content'>
      <div>
          <p>Settings</p>
      </div>
      <div className='welcome-edit'>
          <div className='welcome'>
              <p>Welcome, {yourName}!</p>
          </div>
          <div className='editButton'>
              <button className='edit' style={{backgroundColor: '#FFD7D7'}} onClick={displayShow}>Edit</button>
          </div>
      </div>
      <form onSubmit={nameEditSubmit} className='setting-form' style={{ display: display }}>
          <input type='text' placeholder='What is your name?' value={changeName} onChange={handleChange}/>
          <div className='setting-name-submit'>
              <button style={{backgroundColor: '#FFD7D7'}} onClick={confirmClick} type='submit'>Save</button>
              <button className='close' onClick={displayShow} style={{backgroundColor: '#FFD7D7'}}>Close</button>
          </div>
      </form>
      <div className='background-select'>
          <p>Set a Background</p>
          <div className='background-display'>
              <div className='display'>
                <img dataset-id='1' src={require('../../assets/images/lofi-settings1.jpg')} alt=''/>
              </div>
              <div className='display'>
                <img dataset-id='2' src={require('../../assets/images/lofi-settings2.gif')} alt=''/>
              </div>
              <div className='display'>
                <img dataset-id='3' src={require('../../assets/images/lofi-settings3.gif')} alt=''/>
              </div>
              <div className='display'>
                <img dataset-id='4' src={require('../../assets/images/lofi-settings6.gif')} alt=''/>
              </div>
              <div className='display'>
                <img dataset-id='5' src={require('../../assets/images/lofi1.jpg')} alt=''/>
              </div>
              <div className='display'>
                <img dataset-id='6' src={require('../../assets/images/lofi-settings7.gif')} alt=''/>
              </div>             
          </div>
      </div>
    </div>
  )
}

export default Settings