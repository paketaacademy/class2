import React from 'react'
import './style.css'
import './style.js'
import TransitionsPopper from './components/TransitionsPopper'

function Destemidos() {
  return (
    <>
      <div /*className='container'*/>
        <div className='container--video'>
          <video className='video' autoPlay loop muted>
            <source src='https://dkhpfm5hits1w.cloudfront.net/video/lunarhomebgvid1_opt.mp4' type='video/mp4'></source>
          </video>
        </div>
        <div className='container--info'>
          <div className='container--text'>
            <h1 className='first--text'>SOCIAL LISTENING FOR CRYPTO</h1>
            <h2 className='second--text'>Discover how social media impacts cryptocurrency markets.</h2>
            <h3 className='third--text'>Click on the name of the cryptcurrency to make the purchase.</h3>
            <TransitionsPopper />
          </div>
        </div>
      </div>
    </>
  )
}

export default Destemidos