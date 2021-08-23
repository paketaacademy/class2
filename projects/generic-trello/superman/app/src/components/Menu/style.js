import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'



export const Item =styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const NavBar =styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
padding: 0.625rem;
background-color:#02317c;
color:#fff;
align-items: center;
`
export const TitleBox =styled.div`
color: #ffff00;
-webkit-text-stroke: 0.063rem #ca1d26;
font-weight:bold;
font-size: 2.188rem;
`

export const Home =styled(HomeOutlinedIcon)`
font-size: 1.875rem;
cursor: pointer;
`
export const Linked =styled(Link)`
color: #fff;
`
export const DetailsUser =styled.div`
border:0.063rem solid #fff;
border-radius: 0.625rem;
padding: 0.625rem;
display: flex;
flex-direction: row;
align-items: center;
`
export const Image =styled(Avatar)`
width: 1.563rem;
height: 1.563rem;
`
export const BoxUser =styled.div`
padding: 0 0.625rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`