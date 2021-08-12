import React from 'react'
import './style.css'
import './style.js'
import TransitionsPopper from './components/TransitionsPopper'

function Destemidos({text}) {
  return (
    <>
      <dispatchEvent>
        <div className='container--video'>
          <video className='video' autoPlay loop muted>
            <source src='https://dkhpfm5hits1w.cloudfront.net/video/lunarhomebgvid1_opt.mp4' type='video/mp4'></source>
          </video>
        </div>
        <div className='container--info'>
          <div className='container--text'>
            <h1 className='first--text'>{text}</h1>
            <TransitionsPopper />
          </div>
        </div>
      </dispatchEvent>
    </>
  )
}

export default Destemidos