import styled from "styled-components"

export const WorkButton = styled.button`
     color: black;
    background-color: rgb(44 38 64);
    color: white;
    padding: 15px;
    cursor: pointer;
    border-color: white;
    margin-left: 370px;
    margin-top: 25px;      

   
    @media (max-width: 600px){
        margin: 0;
    }
`

export const H1 = styled.h1`
    margin-top: 0px;
`

export const Div = styled.div`
    background-color: rgb(44 38 64);
    display: flex;
    max-height: 400px;
    color: white;
    display: flex;
    width: 70%;
    margin-left: 94px;
    padding: 60px;
    height: 100px;
    justify-content: center;

    @media (max-width: 600px){
        width: 200px;
        align-items: center;
        flex-direction: column;
        height: 600px;
        padding: 40px;
    }
`

export const Img = styled.img`
    z-index: 2;
    width: 510px;
    margin-left: -422px;
    position: absolute;
    margin-top: -55px;
    height: 215px;

    
    @media (max-width: 600px){
        width: 255px;
        margin: 0;
        visibility: hidden;
    }
`
