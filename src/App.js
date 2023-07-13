import './App.scss';
import { useEffect, useState } from 'react';
import lofi1 from './assets/images/lofi-settings1.jpg'
import lofiCover from './assets/images/lofi1.jpg'
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Loader/Loader';
import fullDate from './utils/getFullDate'
import audioData from './utils/audioData'

function App() {
  const [day, setDay] = useState()
  const [location, setLocation] = useState()

  useEffect(function() {
    setInterval(function() {
      setDay(fullDate.fullDay().map(date => {
        if (!date) {
          return ('')
        } else {
          return (date)
        }
      }))
    }, 1000)

    console.log(audioData)
      
  }, [])

  if (!day) return <Loader/>
  // if (!weather) return <Loader/>

  return (
    <div className="container" style={{ backgroundImage: 'url('+ lofi1 + ')'}}>
      <div className='cover'></div>
      <Navbar/>
      <main>
        <section className='middle-section'>
          <div className='date-music-play'>
            <div className='full-date'>
              <h2>{day[0].currentDay}</h2>
              <h4>{day[0].currentMonth} {day[0].currentNum}, {day[0].currentYear}</h4>
            </div>
            <div className='music-player'>
              <div className='current-play-image'>
                <img src={lofiCover} alt='' />
              </div>
              <div className='current-play-title-buttons-radio'>
                <div className='current-play-title-buttons'>
                  <div className='current-play-title'>
                    <p>Rest Well</p>
                    <p>Sean Mayer</p>
                  </div>
                  <div className='current-play-buttons'>
                    <div className='rewind'>
                      <i className='bx bx-rewind bx-sm'></i>
                    </div>
                    <div className='start-pause'>
                      <i className='bx bx-play bx-sm'></i>
                    </div>
                    <div className='forward'>
                      <i className='bx bx-fast-forward bx-sm'></i>
                    </div>
                  </div>
                </div>
                <div className='current-play-radio'>
                  <input type="range" min="1" max="100" className="seek_slider"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bottom-section'>
          <div className='weather-time-welcome'>
            <div className='weather-time'>
              <div className='weather-forecast'>
                <div className='weather-icon'>
                  <p>Good {day[0].greeting}, {localStorage.getItem('name')}! It is</p>
                </div>
              </div>
              <div className='full-time'>
                <h1>{day[0].currentHour}<span id='animated-colon'>:</span>{day[0].currentMinute}</h1>
              </div>
            </div>
            <div className='welcome'>
              <h4>Welcome to</h4>
              <h3>Lofi Train</h3>
            </div>
          </div>
        </section>
      </main>
      <div>

      </div>
      
    </div>
  );
}

export default App;
