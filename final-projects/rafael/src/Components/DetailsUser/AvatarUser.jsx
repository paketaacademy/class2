import React from "react"
import { UserAvatar } from './style.js'

const AvatarUser = (name, url) => {
  return (
    <UserAvatar alt={name} src={url} />
  )
}

export default AvatarUser