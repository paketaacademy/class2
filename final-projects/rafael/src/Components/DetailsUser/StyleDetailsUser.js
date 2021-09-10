import styled from 'styled-components'

export const RowUser = styled.div`
  min-width: 15.625rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;  
  @media (max-width: 25rem) {
    width: 12.5rem;
    flex-direction: column;
    margin: 0.625rem 0;
    align-items: center;
    text-align: center;
  }  
`

export const ColumnUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
  @media (max-width: 400px) {
    margin: 0;
 
  }
`

export const UserName = styled.span`
  font-weight: bold;
  font-size: 18px;  
  @media (max-width: 400px) {
    font-size: 16px;
  }
`

export const NameLogin = styled.span`
  margin: 10px 0;
  
`