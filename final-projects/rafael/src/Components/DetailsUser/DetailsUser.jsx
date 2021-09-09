import React from "react"
import { RowUser, ColumnUser, UserName, NameLogin } from './StyleDetailsUser.js'

const Detailsuser = ({ name, user, created }) => {
  return(
    <RowUser>
      <ColumnUser>
        <UserName>{name}</UserName>
        <NameLogin>@{user}</NameLogin>
      </ColumnUser>
      <ColumnUser>
        Joined {created}
      </ColumnUser>
    </RowUser>
  )
}

export default Detailsuser