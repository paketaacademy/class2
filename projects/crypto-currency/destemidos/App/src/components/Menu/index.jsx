import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import { isAuthenticated } from '../../Services/auth'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BallotIcon from '@material-ui/icons/Ballot';
import GroupIcon from '@material-ui/icons/Group';
import StorefrontIcon from '@material-ui/icons/Storefront';

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
                <StorefrontIcon />
              </div>
              <div>
                <h1>MERCADO</h1>
              </div>
            </Link>    
          </li>
          <li className='container--nav--ul--li'>
            <Link to="/influencias">
              <div>
                <GroupIcon />
              </div>
              <div>
                <h1>INFLUENCERS</h1>
              </div>
            </Link>
          </li>
          <li className='container--nav--ul--li'>
            <Link to="/conteudo">
              <div>
                <BallotIcon />
              </div>
              <div>
                <h1>FEEDS</h1>
              </div>
            </Link>    
          </li>
          <li className='container--nav--ul--li--last'>
            <Link to="/sair">
              <div>
                <ExitToAppIcon/>
              </div>
              <div>
                <h1>Sair</h1>
              </div>
            </Link>
          </li>
        </ul>
      </nav>}
    </>  
  )
}

export default Menu