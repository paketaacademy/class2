import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { isAuthenticated } from '../../Services/auth'

function Menu() {
  return (
    <>
      {isAuthenticated() && <nav className='container--nav'>
        <ul className='container--nav--ul'>
          <li className='container--nav--ul--li'>
            <Link to="/home">
              <div>
                <img src="https://lunarcrush.com/assets/img/ui/lunarcrush-footer-icon-dark-retro.png" alt="lunar logo" className='lunar--logo' />
              </div>    
              <div>
                <h1>DESTEMIDOS</h1>
              </div>
            </Link>
          </li>
          <li className='container--nav--ul--li'>
            <Link to="/mercado">
              <div>
                <img src="https://static.thenounproject.com/png/685027-200.png" alt="market icon" className='market--icon' />
              </div>
              <div>
                <h1>MERCADO</h1>
              </div>
            </Link>    
          </li>
          <li className='container--nav--ul--li'>
            <Link to="/influencias">
              <div>
                <img src="https://icons-for-free.com/iconfiles/png/512/people+users+icon-1320196278344550087.png" alt="influencer icon" className='influencer--icon' />
              </div>
              <div>
                <h1>INFLUENCERS</h1>
              </div>
            </Link>
          </li>
          <li className='container--nav--ul--li'>
            <Link to="/conteudo">
              <div>
                <img src="https://img.icons8.com/small/452/hashtag-activity-feed.png" alt="feed icon" className='feed--icon' />
              </div>
              <div>
                <h1>FEEDS</h1>
              </div>
            </Link>    
          </li>
          <li className='container--nav--ul--li--last'>
            <Link to="/sair">
              <div>
                <img src="https://www.pikpng.com/pngl/b/519-5199120_logout-icon-png-sign-out-icon-png-clipart.png" alt="signout icon" className='signout--icon' />
              </div>
            </Link>
          </li>
        </ul>
      </nav>}
    </>  
  )
}

export default Menu