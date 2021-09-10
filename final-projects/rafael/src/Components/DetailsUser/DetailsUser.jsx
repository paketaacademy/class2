import React from "react"
import { RowUser, ColumnUser, UserName, NameLogin } from './StyleDetailsUser.js'

const Detailsuser = ({ name, user, created }) => {
  return(
    <RowUser>
      <ColumnUser>
        <UserName>{name ? name : 'Not Available'}</UserName>
        <NameLogin>@{user ? user : 'Not Available'}</NameLogin>
      </ColumnUser>
      <ColumnUser>
        Joined {created}
      </ColumnUser>
    </RowUser>
  )
}

export default Detailsuser