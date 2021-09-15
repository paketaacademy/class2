import styled from 'styled-components'

export const Container = styled.div`
  height: 9em; 
  padding: 2em 2em; 
  background-color: grey;
  background: linear-gradient(180deg, rgb(70 70 70), rgb(28 28 28));
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(250 250 250);
  margin-left: 5em;
  margin: 0;
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
`