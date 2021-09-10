import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

export const UserAvatar = styled(Avatar)`
  min-width: 6.25rem;
  min-height: 6.25rem;
  margin: 0.313rem 0.938rem 0 0;
  @media (max-width: 37.5rem) {
    margin: 0.313rem 0;
  }
  @media (max-width: 25rem) {
    min-width: 5rem;
    min-height: 5rem;
    margin: 0.313rem 0;
  }
`