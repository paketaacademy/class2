import styled, { css } from 'styled-components'

export const ContainerHeaderList = styled.div`
  margin-left: 10em;
`
export const InputSearch = styled.input`
  margin-bottom: 1em;
  border-radius: 0.2em;
  border: none;
  height: 2.5em;
  width: 14em;
  padding-left: 1em;
  background-color: rgb(207 207 207);
  outline: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover{
    background-color: rgb(250 250 250);
  }
`
export const ButtonOrder = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  margin-left: 2em;
  border: none;
  border-radius: 0.2em;
  width: 7em;
  height: 2.6em;  
  cursor: pointer;
  color: rgb(0 0 0);
  background-color: rgb(0 154 205);
  -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

  &:hover{
    box-shadow: 0 0 1.5em 1.5em rgb(207 207 207) inset;
  }
`
export const Container = styled.div`
  display: flex;
  background-color: rgb(54 54 54);
  color: rgb(248 248 255);
  padding: 1em;
  margin: 1em 10em;
  border-radius: 0.5em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &:hover{
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1.1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1.1);   
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1.1);
  transition: all 200ms ease-in;
  transform: scale(1.1);
  }
`
export const Image = styled.img`
  width: 5em;
  padding-right: 1em;
  padding-left: 1em;
  background-color: rgb(79 79 79);
  border-radius: 1em;
  margin-right: 1em;
`
export const ContainerInfos = styled.div`

`
export const ContainerNew = styled.div`
  display: flex;
  padding-bottom: 0.5em;
`
export const ListWorkplace = styled.div`
  color: rgb(142 205 211);
  font-weight: bold;
  font-size: 1rem;
`
export const ListNew = styled.div`
  ${({isNegative}) => isNegative && css `
    background-color: rgb(250 250 250);
    border-radius: 1em;
    color: rgb(0 0 0);
    font-size: 0.8rem;
    padding: 0 0.5em;
    font-weight: bold;
    margin: 0 1em;
  `}
`
export const ListFeatured = styled.div`
  ${({isNegative}) => isNegative && css `
    background-color: rgb(0 154 205);
    border-radius: 1em;
    color: rgb(0 0 0);
    font-size: 0.8rem;
    padding: 0 0.5em;
    font-weight: bold;
  `}
`
export const ListOpportunity = styled.div`
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.3rem;
`
export const Infos = styled.div`
  color: rgb(207 207 207);
  font-family: monospace;
  font-size: 1rem;
`
export const Technologys = styled.p`
  margin-left: auto;
  margin-block: auto;
  color: rgb(142 205 211);
  background-color: rgb(79 79 79);
  font-weight: bold;
  border-radius: 0.1em;
  padding: 0.1em 0.3em;
`