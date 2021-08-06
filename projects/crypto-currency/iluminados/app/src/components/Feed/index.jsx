import React from 'react'
import { HandleWithFeed } from './HandleWithFeed'
import { FeedContainer } from './styles'

export const Feeds = () => {
  return (
    <FeedContainer>
      <h1>Feeds</h1>
      <div className="rows">
        <HandleWithFeed />
      </div>
    </FeedContainer>
  )
}

//sessionStorage informando que o usuário está logado ou não