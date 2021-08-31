import styled from 'styled-components'

export const Container = styled.div`
  flex: 0 0 320px;
  background-color: rgb(250, 250, 200);
  height: 475px;
  overflow-y: scroll;
  border-radius: 10px;
  margin-left: 50px;
  

  @media screen and (max-width: 800px) and (min-width: 416px) { 
    height: 422px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) and (min-width: 416px) { 
    height: 422px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 415px) and (min-width: 340px) { 
    height: 370px;
  }

  @media screen and (max-width: 339px) and (min-width: 228px) { 
    height: 370px;
    width: 100%;
    max-width: 270px;
  }

  ::-webkit-scrollbar-track {
    background-color: #F4F4F4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar {
    width: 8px;
    background: #F4F4F4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 10px;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
`

export const Title = styled.h1`
  font-size:16px;
  font-weight: 700;
  padding: 8px 16px;
  text-transform: uppercase;
`

export const Button = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgb(218 165 32);
  border: 0;
  cursor: pointer;
  margin-top: 30px;
  margin-right: 10px;
  &:hover{
    background: rgb(238 221 130);
  }
`
export const ButtonNew = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgb(184 134 11);
  border: 0;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 10px;
  display: block;
  position: fixed;

  &:hover{
    background: rgb(238 221 130);
  }
`

export const Ul = styled.ul`
  margin-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`