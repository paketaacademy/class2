import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #3c4065;
    margin: 0 auto;
    padding-bottom: 20px;
    width: 30%;
`
export const TitleContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70%;
    background-color: #3c4065;
`

export const Title = styled.h3`
    padding-left: 10px;
    color: #fff;
`

export const ResultContent = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    width: 100%;
    background-color: #3c4065;
    color: #fff;
    padding: 10px 0;
`
export const BoxNumber = styled.div`    
    align-items: center;
    display:flex;
    flex-direction:column;
    justify-content: center;
    border-radius: 2%;
    background-color: #171a33;
    width: 70%;
`


export const Screen = styled.div`
    display:flex;
    height: 90px;
    width: 70%;
    justify-content:center;
    align-items:flex-end;
    background-color:#171a33;
    flex-direction:column;
    border-radius: 2%;
    margin: 0 10px;
`

export const OperationScreen = styled.div`
    font-size:25px;
    padding-right: 10px;
    color:#fff;
`

export const ResultScreen = styled.div`
    font-size:50px;
    color:#fff;
    padding-right: 10px;
`

export const ContentButtonOperation = styled.div` 
    padding: 15px; 
    background-color: #171a33;
    @media(max-width:1000px){
        width: 25%;
    }   
    @media(max-width:800px){
        width: 20%;
        text-align: left;
    }     
`

export const ContentButtonResult = styled.div` 
    padding: 15px;
    margin: 5px;
    width: 100%;
`

export const NumberRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 0.3rem;
`

export const ButtonCalc = styled.button`
    background-color: #fff;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    padding: 1rem;
    width: 20%;
    height: 20px;
`

export const ButtonCalcDel = styled.button`
    background-color: #666b9a;
    outline: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    padding: 1rem;
    width: 20%;
    height: 20px;
`

export const ButtonCalcReset = styled.button`
    background-color: #666b9a;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    padding: 1rem;
    width: 45%;
    height: 20px;
`

export const ButtonCalcEqual = styled.button`
    background-color: #e40714;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    padding: 1rem;
    width: 45%;
    height: 20px;
`