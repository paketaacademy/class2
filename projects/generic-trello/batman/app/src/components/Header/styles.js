import styled from 'styled-components'

export const Container = styled.div`
  height: 50px;
  padding: 30px;
  background: rgb(218 165 32);
  color: rgb(54 54 54);
  display: flex;
  justify-content: space-between;
  align-items: center;


export const Image = styled.img`
  height: 60px;  
  
` 

export const Title = styled.h1`
    font-family: cursive;
    margin-left: 20px;

  width: auto;

  @media screen and (max-width: 415px) and (min-width: 320px) {
    font-size: 14px;
    margin-bottom: 60px;

    .MuiSvgIcon-root{
      width: 35px;
    }
  }

  @media screen and (max-width: 339px) and (min-width: 228px) {
    margin-bottom: 20px;
  }

  .MuiSvgIcon-root{
    width: 35px;
    height: 35px;
    cursor: pointer;

    &:hover{  
      color: rgb(238 221 130);
    }
  }

`