import React from "react"
import { SocialRow, SocialColumn } from './style.js'

const Socialuser = () => {
  return (
    <SocialRow>
      <SocialColumn>
        <strong>Repos</strong>
        8
      </SocialColumn>
      <SocialColumn>
        <strong>Followers</strong>
        3938
      </SocialColumn>
      <SocialColumn>
        <strong>Following</strong>
        9
      </SocialColumn>
    </SocialRow>
  )
}

export default Socialuser