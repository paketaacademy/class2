import styled from 'styled-components'

export const BoxDetails = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  @media (max-width: 600px) {
    width: 300px;
    flex-direction: column;
    align-items: left;
    margin: 10px 0;
  }
  @media (max-width: 400px) {
    width: 200px;
  }
`

export const DetailRow= styled.div`  
  
  margin: 10px 10px 10px 0; 
  display: flex;
  flex-direction: row;    
  align-self: flex-start ; 
  justify-content:space-between;    
  @media (max-width: 600px) {
   margin: 0;
   flex-direction: column;   
  }   
`

export const ColumnDetails  = styled.div`
  width: 250px;  
  display: flex;
  align-items: center;     
`

export const LinkGit = styled.a`
  text-decoration: none;
  margin-left: 10px;
`

export const InfoRow = styled.span`
  margin-left: 10px;  
  margin-top: 3x;    
`