import React from 'react'
import {
  SideBar,
  NavContainer,
  StyledAvatar,
  NavbarContainer
} from "./styles";
import {
  MonetizationOn,
  Assessment,
  Sms,
  Group,
  ExitToApp,
  Home
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <NavbarContainer>
      <SideBar>
        <div>
          <Link to="/meus_dados">
            <NavContainer>
              <StyledAvatar>A</StyledAvatar>
              <h2>Alisson Honostorio</h2>
            </NavContainer>
          </Link>
          <Link exact to="/">
            <NavContainer>
              <Home />
              <h3>Home</h3>
            </NavContainer>
          </Link>
          <NavContainer>
            <MonetizationOn />
            <h3>Wallet</h3>
          </NavContainer>
          <NavContainer>
            <Assessment />
            <h3>Market</h3>
          </NavContainer>
          <Link to="/noticias">
            <NavContainer>
              <Sms />
              <h3>Feed</h3>
            </NavContainer>
          </Link>
          <NavContainer>
            <Group />
            <h3>Influencers</h3>
          </NavContainer>
        </div>
        <div className="util-links">
          <Link to="/logar">
            <NavContainer>
              <ExitToApp />
              <h3>Login</h3>
            </NavContainer>
          </Link>
        </div>
      </SideBar>
    </NavbarContainer>
  )
}