import React from "react"
import { BoxBio } from './StyleInfoUser.js'

  const InfoUser = ({info}) => {
  return(
    <BoxBio>
      {info ? info : 'This profile has no bio'}
    </BoxBio>
  )
}

export default InfoUser