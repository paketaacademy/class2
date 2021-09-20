import React from "react"
import { UserAvatar } from './StyleAvatarUser.js'

const AvatarUser = ({ name, url }) => {
  return (
    <UserAvatar alt={name} src={url} />
  )
}

export default AvatarUser