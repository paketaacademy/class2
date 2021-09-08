import React from "react"
import { RowUser, ColumnUser } from './style.js'

const Detailsuser = ({ name, user }) => {
  return(
    <RowUser>
      <ColumnUser>
        <span>{name}</span>
        <span>{user}</span>
      </ColumnUser>
      <ColumnUser>
        Joined 26 Jan 2011
      </ColumnUser>
    </RowUser>
  )
}

export default Detailsuser