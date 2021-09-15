import styled from "styled-components"

export const Login = styled.div`
    width: 240px;
`

export const TextField = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    height: 45px;
    width: 100%;
    margin-top:20px;
`

export const BoxEmail = styled.input`
    background-color: transparent;
    width: 100%;
    outline-width: 0;
    border:none;
    font-size:15px;
    margin-left: 10px;
    margin-right: 10px;
`

export const BoxPassword = styled.input`
    background-color: transparent;
    width: 100%;
    outline-width: 0;
    border:none;
    font-size:15px;
    margin-left: 10px;
    margin-right: 10px;
`

export const CheckBox = styled.div`
    font-size: 13px;
    margin-right: 80px;
    padding: 0.3rem;
`

export const Connected = styled.input`
    margin: 8px;
    font-size: 13px;
    background: ${props => (props.check ? 'salmon' : 'papayawhip')}; 
`

export const Text = styled.label`
    font-size: 13px;
    @media (max-width:800px){
            font-size: 75%;
    }
`

export const ButtonContent=styled.div`
    width: 100%;
`

export const Submit = styled.button`
    width:100%;
    background-color: #00ce65;
    color: #EFF2F5;
    height: 45px;
    border-radius: 30px;
    font-size: 13px;
    border:none;
    outline-width: 0; 
    :hover {
    cursor: pointer;
    }
`

export const LoginFooter = styled.div`
    color: gray;
    font-size: 13px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    :hover {
        color: white;
        cursor: pointer;
    }
`








