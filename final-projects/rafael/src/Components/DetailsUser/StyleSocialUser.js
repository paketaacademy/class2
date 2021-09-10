import styled from 'styled-components'

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  border: 0.063rem solid #d6d6d6;
  border-radius: 0.625rem;
  padding: 1.25rem 1.875rem;
  @media (max-width: 25rem) {
    padding: 0.625rem 1.25rem;
  }  
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;   
`

export const SocialTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.313rem;  
  @media (max-width: 25rem) {
    font-size: 0.75rem;
  }
`
export const SocialDesc = styled.div`
  text-align: left;
  font-size: 1rem; 
  @media (max-width: 25rem) {
    font-size: 0.875rem;
  }
`