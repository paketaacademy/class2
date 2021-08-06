import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: row;
  position: relative;
`

export const NavbarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`

export const SideBar = styled.nav`
  max-width: 100px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  background-color: var(--yellow);
  color: var(--white);
  box-shadow: 0 5px 10px rgba(245, 156, 23, 0.5);
  font-family: var(--primary-font-family);
  .util-links{
    div{
      border-bottom: none;
    }
  }
`

export const StyledAvatar = styled(Avatar)`
  &&{
    background: var(--white);
    color: var(--black);
    width: 50px;
    height: 50px;
  }
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  transition: all 190ms;
  &:hover{
    background-color: var(--yellow-hover);
    cursor: pointer;
  }
  h3, h2{
    margin-top: 8px;
    font-size: 0.70rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
  h2{
    font-size: 0.75rem;
  }
`