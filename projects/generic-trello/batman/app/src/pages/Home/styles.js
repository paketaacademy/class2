import styled from "styled-components"

export const Container = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  .user-data-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0;

  }
`

export const Button = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgb(218 165 32);
  border: 0;
  cursor: pointer;
  margin-top: 30px;
  &:hover{
    background: rgb(238 221 130);
  }
  text-align: center;
  margin-right: 25px;
`

export const UserBoards = styled.div`
  display: flex;
  flex-flow: wrap;
`

export const UserDatas = styled.div`
  display: flex;
  flex-direction: row;
  .user-data{
    display: flex;
    flex-direction: column;
    border: 2px solid rgb(0, 0, 0);
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 16px;
  }
  .user-data--h2{
    margin: 0;
    padding: 0;
  }
  .user-data--h3{
    font-size: 1rem;
    font-weight: 400;
    line-height: 8px;
  }
`

export const BoardCtn = styled.div`
  margin: 16px;
  background-color: rgb(250, 250, 100);
  padding: 6px 16px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border-radius: 4px;
  max-width: 150px;
  min-width: 150px;
  text-transform: capitalize;
  word-break: break-word;
  
  &:hover{
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }
  h2{
    font-weight: normal;
    font-size: 1.2rem;
  }
`