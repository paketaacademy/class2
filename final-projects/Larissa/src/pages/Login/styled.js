import styled from 'styled-components'

export const Page = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top: 70px;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 400px;
    width: 300px;
    color: white;
    background-color: black;
    font-family: 'sans-serif';
`

export const Logo = styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
`

export const Picture = styled.img`
width: 80px;
height: 80px;

`
export const Login_right = styled.div`
    background-color: 29292E;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
`

export const Title_App = styled.h1`
    font-family: 'sans-serif';
    font-size: 30px;
    margin-bottom: 20px;
    `

export const Connected = styled.h2`
    margin: 8px;
    font-size: 13px;
    color:white;
    
    `

export const TextField = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    height: 40px;
    margin-top:20px;
    
`

export const Box_email = styled.input`
    background-color: transparent;
    width: 100%;
    outline-width: 0;
    border:none;
    font-size:15px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Box_password = styled.input`
   background-color: transparent;
    width: 100%;
    outline-width: 0;
    border:none;
    font-size:15px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Submit = styled.button`
    width:220px;
    background-color: green;
    color: #EFF2F5;
    height: 35px;
    border-radius: 30px;
    font-size: 14px;
    border:none;
    outline-width: 0; 
    :hover {
    cursor: pointer;
    }
`
export const SignIn = styled.div`
width: 220px;
`
export const Typography = styled.div`
border-left: 10px;
`

export const Link = styled.div`
color: gray;
font-size: 15px;
margin-top: 10px;
:hover {
    color: white;
    cursor: pointer;
    }
`