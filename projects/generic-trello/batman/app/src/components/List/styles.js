import styled from 'styled-components'

export const Container = styled.div`
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};
  background-color: rgb(250 250 200);
  height: 475px;
  overflow-y: scroll;
  border-radius: 10px;

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

  .header--card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    .title--card{
      font-weight: 500;
      font-size:16px;
      padding: 0 10px;
    }

    .button--add{
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
    }
  }

  .ul--list{
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 800px) and (min-width: 416px) { //tablet
    height: 422px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) and (min-width: 416px) { //tablet
    height: 422px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 415px) and (min-width: 340px) { //celular grande
    height: 370px;

    .button--add{
      width: 20px;
      height: 20px; //nao funciona
    }
  }

  @media screen and (max-width: 339px) and (min-width: 228px) { //celular pequeno
    height: 370px;
    width: 100%;
    max-width: 270px;
  }
`