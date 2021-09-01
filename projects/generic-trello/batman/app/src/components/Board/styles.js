import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 30px 0 30px;
  height: calc(100% - 80px);
  overflow: auto;
  padding-left: 10px;
  max-width: 1280px;`

export const ButtonNew = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 5px;
  background: rgb(218 165 32);
  border: 0;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 10px;
  display: block;
  position: fixed;
  color:	rgb(54 54 54);
  left: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  padding-top: 11px;
  display: flex;

  &:hover{
    background: rgb(238 221 130);
  }
`

