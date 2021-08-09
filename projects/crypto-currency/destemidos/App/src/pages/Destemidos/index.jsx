import React from 'react'
import './style.css'
import './style.js'
import {Link} from 'react-router-dom'
import TransitionsPopper from './components/TransitionsPopper'
import { isAuthenticated } from '../../Services/auth'

function Destemidos() {
  return (
    <>
      {!isAuthenticated() && <div className='container'>
        <div className='container--video'>
          <video className='video' autoPlay loop muted>
            <source src='https://dkhpfm5hits1w.cloudfront.net/video/lunarhomebgvid1_opt.mp4' type='video/mp4'></source>
          </video>
        </div>
        <div className='container--info'>
          <div className='container--text'>
            <h1 className='first--text'>SOCIAL LISTENING FOR CRYPTO</h1>
            <h2 className='second--text'>Discover how social media impacts cryptocurrency markets.</h2>
            <h3 className='third--text'>Sign up to access personalized cryptocurrency social media analytics.</h3>
            <Link to='/cadastrar'>
              <button className='sign--button'>SIGN UP FOR FREE</button>
            </Link>
            <TransitionsPopper />
          </div>
          <div>
            <Link to='/conectar'>
              <button className='login--button'>
                  LOG IN
              </button> 
            </Link>
          </div>
        </div>
        <h1 className='table'></h1>
      </div>}
    </>
  )
}

export default Destemidos