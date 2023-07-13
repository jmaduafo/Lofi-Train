import React from 'react'
import '../ListDisplay/listDisplay.scss'

const ListDisplay = (prop) => {
  return (
    <div className='list-section'>
    <div className='list-container'>
        <div className='list-content'>
            <div className='list-image-favorite'>
                <div className='list-favorite'>
                    <i className='bx bx-heart' data-id=''></i>
                </div>
                <div className='list-image'>
                    <img/>
                </div>
            </div>
            <div className='list-title-name'>
                <p>Slide</p>
                <p>Slide</p>
            </div>
        </div>       
    </div>
    </div>
  )
}

export default ListDisplay