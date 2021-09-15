import styled from 'styled-components'

export const Container = styled.div`
  height: 9em; 
  padding: 2em 2em; 
  background: linear-gradient(180deg, rgb(70 70 70), rgb(28 28 28));

  @media screen and (max-width: 770px) and (min-width: 280px) {
    width: 44.2em;
    height: 10em;
  }
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(250 250 250);
  margin-left: 5em;
  margin: 0;

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-size: 2.5em;
    text-align: center;
  }
  @media screen and (max-width: 1025px) and (min-width: 771px) {
    text-align: center;
  }
`
export const Description = styled.h2`
  font-size: 1.04rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(250 250 250);
  margin-left: 3.8em;
  padding: 4em;

  span{
    color: rgb(238 221 130);
    text-decoration: underline;
    padding-left: 0.3em;
  }

  @media screen and (max-width: 770px) and (min-width: 280px) {
    font-weight: lighter;
    margin-left: 0;
    padding: 0;
    margin-top: 1em;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;

    span{
      display: block;
      text-align: center;
    }
  }
  @media screen and (max-width: 1025px) and (min-width: 771px) {
      text-align: center;
      font-size: 1.1rem;
      margin-top: -1em;
    }
`