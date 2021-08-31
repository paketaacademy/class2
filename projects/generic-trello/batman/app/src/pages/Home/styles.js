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
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: rgb(218 165 32);
  color: rgb(54 54 54);
  border: 0;
  cursor: pointer;
  margin-top: 30px;
  position: relative;
  right: 45px;
  padding: 0;
  &:hover{
    background: rgb(238 221 130);
  }
`

export const UserBoards = styled.div`
  display: flex;
  flex-direction: row;
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
  width: 223px;
  margin: 16px;
  margin-left: 0;
  background-color: rgb(250, 250, 100);
  padding: 6px 16px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border-radius: 4px;
  text-transform: capitalize;
  &:hover{
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  }
  h2{
    font-weight: normal;
    font-size: 1.2rem;
  }
`