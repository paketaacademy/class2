import styled from 'styled-components'

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  border: 1px solid #d6d6d6;
  border-radius: 10px;
  padding: 20px 30px;
  @media (max-width: 400px) {
    padding: 10px 20px;
  }  
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;   
`

export const SocialTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;  
  @media (max-width: 400px) {
    font-size: 12px;
  }
`
export const SocialDesc = styled.div`
  text-align: left;
  font-size: 16px; 
  @media (max-width: 400px) {
    font-size: 14px;
  }
`