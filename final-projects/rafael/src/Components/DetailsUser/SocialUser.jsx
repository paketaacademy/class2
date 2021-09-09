import React from "react"
import { SocialRow, SocialColumn } from './StyleSocialUser.js'

const Socialuser = ({ repos, followers, following }) => {
  return (
    <SocialRow>
      <SocialColumn>
        <strong>Repos</strong>
        {repos}
      </SocialColumn>
      <SocialColumn>
        <strong>Followers</strong>
        {followers}
      </SocialColumn>
      <SocialColumn>
        <strong>Following</strong>
        {following}
      </SocialColumn>
    </SocialRow>
  )
}

export default Socialuser