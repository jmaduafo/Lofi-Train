import React, { useState } from 'react'
import '../ListDisplay/listDisplay.scss'
import audioFiles from '../../utils/audioData'

const ListDisplay = (prop) => {
    function favoriteClick() {
        prop.setIsFavorite();
    }

  return (
    <div className='list-section'>
    <div className='list-container'>
        {prop.audioData?.map(audio => {
            if (audio !== undefined) {
            return (
                <div key={audio.id} className='list-content' >
                    <div className='list-image-favorite'>
                        <div className='list-favorite' onClick={() => !audio.isFavorite}>
                            {audio.isFavorite ? <i className='bx bxs-heart' data-id={audio.id}></i> : <i className='bx bx-heart' data-id={audio.id}></i>}
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
    })}
               
    </div>
    </div>
  )
}

export default ListDisplay