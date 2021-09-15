import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'

export const ContainerHeaderList = styled.div`
  margin-left: 10em;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    margin-left: 2em;
    margin-top: 3em;
    display: inline-flex;
    justify-content: space-between;
  }
`
export const InputSearch = styled.input`
  margin-top: 0.8em;
  margin-bottom: 1em;
  border-radius: 0.2em;
  border: none;
  height: 2.5em;
  width: 14em;
  padding-left: 1em;
  background-color: rgb(207 207 207);
  outline: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-image: url('../../Image/icon.png');

  &:hover{
    background-color: rgb(250 250 250);
  }

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 1.5rem;
    width: 19em;
  }
  @media screen and (max-width: 1025px) and (min-width: 771px) {
    margin-left: -7.2em;
  }
`
export const ButtonOrder = styled(Button)`
  .MuiButton-label {
    font-size: 0.8em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    margin-left: 2em;
    margin-bottom: 0.2em;
    border: none;
    border-radius: 0.2em;
    width: 7em;
    height: 3.1em;  
    cursor: pointer;
    color: rgb(0 0 0);
    background-color: rgb(0 154 205);
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

    &:hover{
      box-shadow: 0 0 1.5em 1.5em rgb(207 207 207) inset;
    }

    @media screen and (max-width: 770px) and (min-width: 280px) {
      font-size: 1.4rem;
      height: 2.8em;
    }
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

  @media screen and (max-width: 770px) and (min-width: 280px) {
    margin: 2em 2em 0;
    width: 42em;
    height: 18em;
    display: inline-block;
  }
  @media screen and (max-width: 1025px) and (min-width: 771px) {
    width: 54em;
    margin: 1em 4em 0;
  }
`
export const Image = styled.img`
  width: 5em;
  padding-right: 1em;
  padding-left: 1em;
  background-color: rgb(79 79 79);
  border-radius: 1em;
  margin-right: 1em;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    display: none;
  }
`
export const ContainerInfos = styled.div`

`
export const ContainerNew = styled.div`
  display: flex;
  padding-bottom: 0.5em;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    margin-top: 1.1em;
  }
`
export const ListWorkplace = styled.div`
  color: rgb(142 205 211);
  font-weight: bold;
  font-size: 1rem;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 1.7rem;
  }
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
  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 1.5rem;
  }
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
  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 1.5rem;
  }
`
export const ListOpportunity = styled.div`
  padding-bottom: 0.5em;
  font-weight: bold;
  font-size: 1.3rem;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 2.2rem;
    margin-top: 1em;
  }
`
export const Infos = styled.div`
  color: rgb(207 207 207);
  font-family: monospace;
  font-size: 1rem;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 1.5rem;
  }
`
export const Technologys = styled.p`
  margin-left: auto;
  margin-block: auto;
  color: rgb(142 205 211);
  background-color: rgb(79 79 79);
  font-weight: bold;
  border-radius: 0.1em;
  padding: 0.1em 0.3em;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    margin-left: -0.3em;
    font-size: 1.5rem;
    margin-top: 2em;
    background-color: inherit;
    text-align: center;
  }
`