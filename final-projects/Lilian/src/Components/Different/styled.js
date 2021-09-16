import  styled from "styled-components"

export const Hr = styled.hr`
    margin-left: 10px;
    color: rgb(205 205 207);
    width: 100px;
    margin-left: 86px;
    margin-top: 150px;
`

export const Title = styled.h4`
    margin-left: 85px;
    font-size: 30px;  
`

export const Img = styled.img`
    width: 50px;
`

export const P = styled.p`
    color: rgb(208 205 207);
`

export const Ul = styled.ul`
    list-style: none;
    -webkit-box-pack: justify;
    justify-content: space-between;
    display: flex;
    max-width: 100%;
    padding: 30px;
    justify-content: center;

    @media (max-width: 1000px){
        width: 100%;

    }
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`

export const Li = styled.li`
    line-height: 2;
    font-size: 16px;
    width: 30%;

    @media (max-width: 800px){
        padding: 10px;

    }
`
