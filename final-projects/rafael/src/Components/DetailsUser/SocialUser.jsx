import React from "react"
import { SocialRow, SocialColumn, SocialTitle, SocialDesc } from './StyleSocialUser.js'

const Socialuser = ({ repos, followers, following }) => {
  return (
    <SocialRow>
      <SocialColumn>
        <SocialTitle>Repos</SocialTitle>
        <SocialDesc>{repos}</SocialDesc>
      </SocialColumn>
      <SocialColumn>
        <SocialTitle>Followers</SocialTitle>
        <SocialDesc>{followers}</SocialDesc>
      </SocialColumn>
      <SocialColumn>
        <SocialTitle>Following</SocialTitle>
        <SocialDesc>{following}</SocialDesc>
      </SocialColumn>
    </SocialRow>
  )
}

export default Socialuser