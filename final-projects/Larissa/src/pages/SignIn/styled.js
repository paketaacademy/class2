import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    flex-direction: column;
    height: 400px;
    width: 300px;
    color: white;
    margin: auto;
   
`
export const Logo = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    @media (max-width:800px){
        width: 25%;
    }
    
`

export const Picture = styled.img`
    width: 80px;
    height: 80px;
    @media (max-width:800px){
        width:98%;
        height:98%;
    }

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

export const Heading=styled.div`
display: flex;
justify-content: space-around;
margin-right: 20%;
`

export const Title_App = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    @media (max-width:800px){
        font-size: 130%;
    }
    `

export const Connected = styled.input`
    margin: 8px;
    font-size: 13px;
    color:white;
`
export const Text = styled.label`
font-size: 13px;
@media (max-width:800px){
        font-size: 75%;
    }
`
export const CheckBox = styled.div`
font-size: 13px;
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
    @media (max-width:800px){
        font-size: 75%;
    }
`

export const Box_password = styled.input`
    background-color: transparent;
    width: 100%;
    outline-width: 0;
    border:none;
    font-size:15px;
    margin-left: 10px;
    margin-right: 10px;
    @media (max-width:800px){
        font-size: 75%;
    }
`

export const Submit = styled.button`
    width:220px;
    background-color: green;
    color: #EFF2F5;
    height: 35px;
    border-radius: 30px;
    font-size: 13px;
    border:none;
    outline-width: 0; 
    :hover {
    cursor: pointer;
    }
    @media (max-width:800px){
        width: 30%;
        font-size: 75%;
    }
`
export const SignIn = styled.div`
    width: 220px;
    @media (max-width:800px){
        width: 30%;
    }
`
export const Typography = styled.div`
    border-left: 10px;
    @media (max-width:800px){
        font-size: 80%;
    }
`

export const Link1 = styled.div`
    color: gray;
    font-size: 15px;
    margin-top: 10px;
    :hover {
        color: white;
        cursor: pointer;
    }
    @media (max-width:800px){
        font-size: 75%;
    }
        
`