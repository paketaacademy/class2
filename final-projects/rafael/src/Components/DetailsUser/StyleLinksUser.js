import styled from 'styled-components'

export const BoxDetails = styled.div`
  width: 28.125rem;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  @media (max-width: 37.5rem) {
    width: 18.75rem;
    flex-direction: column;
    align-items: left;
    margin: 0.625rem 0;
  }
  @media (max-width: 25rem) {
    width: 12.5rem;
  }
`

export const DetailRow= styled.div`  
  
  margin: 0.625rem 0.625rem 0.625rem 0; 
  display: flex;
  flex-direction: row;    
  align-self: flex-start ; 
  justify-content:space-between;    
  @media (max-width: 37.5rem) {
   margin: 0;
   flex-direction: column;   
  }   
`

export const ColumnDetails  = styled.div`
  width: 15.625rem;  
  display: flex;
  align-items: center;     
`

export const LinkGit = styled.a`
  text-decoration: none;
  margin-left: 0.625rem;
`

export const InfoRow = styled.span`
  margin-left: 0.625rem;  
  /* margin-top: 0.188rem;     */
`