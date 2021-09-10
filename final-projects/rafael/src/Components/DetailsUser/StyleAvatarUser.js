import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

export const UserAvatar = styled(Avatar)`
  min-width: 100px;
  min-height: 100px;
  margin: 5px 15px 0 0;
  @media (max-width: 600px) {
    margin: 5px 0;
  }
  @media (max-width: 400px) {
    min-width: 80px;
    min-height: 80px;
    margin: 5px 0;
  }
`