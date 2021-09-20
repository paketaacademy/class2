import styled from "styled-components"

export const Login = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    margin: auto; 
`

export const SignUp = styled.div`
    width: 240px;
`

export const TextField = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 30px;
    height: 45px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width:240px;
    background-color: #00ce65;
    color: #EFF2F5;
    height: 45px;
    border-radius: 30px;
    font-size: 13px;
    border:none;
    margin-top: 15px;
    :hover {
    cursor: pointer;
    }
`