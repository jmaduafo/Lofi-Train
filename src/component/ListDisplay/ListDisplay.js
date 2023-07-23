import React, { useState, useEffect } from 'react'
import '../ListDisplay/listDisplay.scss'
import audioFiles from '../../utils/audioData'

const ListDisplay = (prop) => {
    function favoriteClick() {
        prop.setIsFavorite();
    }

  return (
    <div className='list-section'>
    <div className='list-container'>
        {prop.audioData?.length ? prop.audioData?.map(audio => {
            if (audio !== undefined) {
            return (
                <div key={audio.id} className='list-content' >
                    <div className='list-image-favorite'>
                        <div className='list-favorite' onClick={() => audio.isFavorite = !audio.isFavorite}>
                            {audio.isFavorite ? <i className='bx bxs-heart'></i> : <i className='bx bx-heart'></i>}
                        </div>
                        <div className='list-image'>
                            <img src={audio.image} alt={audio.title}/>
                        </div>
                    </div>
                    <div className='list-title-name'>
                        <p>{audio.title}</p>
                        <p>{audio.artist}</p>       
                    </div>
                </div>
            )
        }
    }) : <div className='none-added' style={{ textAlign: 'center', padding: '5px 0'}}><p style={{ fontSize: '14px'}}>No favorites added!</p></div>}
               
    </div>
    </div>
  )
}

export default ListDisplay