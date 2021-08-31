import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: rgb(238 221 130);
  border-radius: 5px;
  margin-bottom: 24px;
  padding: 5px;
  cursor: pointer;
`
export const Button = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: rgb(218 165 32);
  color: rgb(54 54 54);
  border: 0;
  cursor: pointer;
  position: relative;
  padding: 0;
  top: 8px;
  left: 260px;
  text-align: center;
  &:hover{
    background: rgb(238 221 130);
  }
`

export const P = styled.p`
  font-weight: 500;
  line-height: 15px;
  word-break: break-word;

`