import styled from "styled-components";

export const SignUp = styled.div`
    width: 220px;
`
export const TextField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 30px;
    height: 40px;
    margin-top:20px;
    @media (max-width:800px){
        width: 70%;
    }
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
        width: 70%;
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
export const Login = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    margin: auto;
    
`

export const Typography = styled.div`
    border-left: 10px;
    color:white;
    display: flex;
    justify-content:center;
    align-items: center;
    `

export const Submit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width:220px;
    background-color: green;
    color: #EFF2F5;
    height: 35px;
    border-radius: 30px;
    font-size: 13px;
    border:none;
    :hover {
    cursor: pointer;
    }
    @media (max-width:800px){
        width: 70%;
        font-size: 75%;
    }
`