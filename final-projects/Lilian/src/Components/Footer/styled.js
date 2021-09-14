import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    margin-top: 110px;
    background-color: rgb(250 250 250);
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Title = styled.h4`
  color: rgb(205 205 207);
`

export const Icones = styled.div`
    display: flex;
    margin-left: 440px;
    padding: 10px;
    padding-left: 35px;
`

export const Header = styled.div`
  height: 25px;
  padding: 30px;
  display: flex;
  margin-left: 170px;
  margin: initial; 
`

export const H1 = styled.h2`
  margin-left: 80px;
  width: auto;
  margin-right: auto;
  font-size: 20px;  
  color: rgb(82 81 84);
  width: 260px;
 
`

export const Hr = styled.hr`
    color: rgb(205 205 207);
    width: 910px;
    margin-left: 60px;    
`

export const List = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    max-width: 900px;
`

export const Ul = styled.ul`
    list-style: none;
    font-weight: 600;
`

export const Li = styled.li`
    line-height: 2;
    font-size: 16px; 
`

export const Img = styled.img`

    position: absolute;
    margin-top: -20px;
    margin-left: -30px;
    width: 440px;
`