import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

export const UserAvatar = styled(Avatar)`
  min-width: 100px;
  min-height: 100px;
  margin: 20px;
`

export const BoxDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ColumnDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;  
`

export const LinkGit = styled.a`
  text-decoration: none;
  margin-left: 10px;
`

export const InfoRow = styled.span`
  margin-left: 10px;
`

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between; 
  border: 1px solid #7c7c7c;
  border-radius: 10px;
  padding: 20px 30px;
`

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const BoxBio = styled.div`
  margin: 20px 0;
  
`

export const RowUser = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;    
`

export const ColumnUser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
