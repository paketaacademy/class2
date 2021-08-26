import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;    
  align-self: center;
  @media (max-width: 34.375rem) {
    margin: 0.313rem;
  }
}`

export const NavBar = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.625rem 4.375rem;  
  background-color:#02317c;
  color:#fff;
  align-items: center;
  @media (max-width: 34.375rem) {
    flex-direction: column;
    padding: 0.625rem ;  
  }
  @media (max-width: 40.625rem) {
    padding: 0.625rem 1.875rem;  
  }
`

export const TitleBox = styled.div`
  color: #ffff00;
  -webkit-text-stroke: 0.063rem #ca1d26;
  font-weight:bold;
  margin-left: 0.625rem;
  font-size: 1.875rem;
  text-align: center;
  @media (max-width: 34.375rem) {
    font-size: 2.25rem;
  }
`

export const Home = styled(HomeOutlinedIcon)`
  font-size: 2.25rem;
  cursor: pointer;
  @media (max-width: 34.375rem) {
    font-size: 2.25rem;
  }
`

export const Linked = styled(Link)`
  color: #fff;
`

export const DetailsUser = styled.div`
  border: 0.063rem solid #fff;
  border-radius: 0.625rem;
  padding: 0.063rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Image = styled(Avatar)`
  width: 1.563rem;
  height: 1.563rem;
  margin-right: 0.625rem;
`

export const BoxUser = styled.div`
  padding: 0 0.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`