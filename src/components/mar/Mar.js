import React from 'react'
import  '../styles/mar.css';
import videoMar from "../../assets/videos/mar.mp4"
import ReactPlayer from 'react-player'

const Mar = () => {
  return (
    <div className='divMar'>
        <ReactPlayer
        url={videoMar} 
        className="videoHome" 
        playing 
        loop
        />

    </div>
  )
}

export default Mar