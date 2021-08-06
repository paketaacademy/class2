import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-family: var(--secondary-font-family);
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);
  h2{
    font-family: var(--primary-font-family);
    font-size: 1.7rem;
    margin: 0 0 16px 0;
    text-transform: uppercase;
    color: var(--black);
  }
  .form-container-login--span{
    font-size:0.80rem;
    margin: 16px 0 0 0;
    strong{
      cursor: pointer;
      &:hover{
        color: var(--yellow);
      }
    }
  }
`