import React from "react"
import { RowUser, ColumnUser } from './style.js'

const Detailsuser = ({ name, user, created }) => {
  return(
    <RowUser>
      <ColumnUser>
        <span>{name}</span>
        <span>@{user}</span>
      </ColumnUser>
      <ColumnUser>
        Joined {created}
      </ColumnUser>
    </RowUser>
  )
}

export default Detailsuser