import styled from "styled-components"

export const Container = styled.div`
      width: 100%;
    margin-top: 110px;
  //background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);
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
    margin-left: 500px;
    padding: 10px;
    padding-left: 10px;
`
export const Header = styled.div`

height: 25px;
  padding: 30px;
  display: flex;
  margin-left: 170px;
  margin: initial;
  
  /* justify-content: space-between;
  align-items: center;   */

`

export const H1 = styled.h1`
      margin-left: 60px;
  width: auto;
  margin-right: auto;
  font-size: 20px;  
  color: rgb(82 81 84);
  width: 260px;
  font-family: 'DM Serif Display', serif;
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&display=swap');
`

export const Hr = styled.hr`
      width: 910px;
      margin-left: 60px;
    color: rgb(205 205 207);
`

export const List = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    max-width: 900px;
`

export const Ul = styled.ul`
    list-style: none;
`

export const Li = styled.li`
      line-height: 2;
    font-size: 16px;

`

export const Span = styled.span``

export const Img = styled.img`
margin-top: -110px;
    margin-left: -80px;
    position: absolute;
`