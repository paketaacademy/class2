import { Feed } from "./Feed"
import React, { useState, useEffect } from 'react'

export const HandleWithFeed = () => {
  const [list, setList] = useState([])

  const url = "http://localhost:3030/feed"
  useEffect(() => {
    fetch(url)
      .then(async res => {
        const { data } = await res.json()
        setList(data)
      })
      .finally()
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {console.log(list)}
      {
        list.map((l, key) => {
          let timeInDays = Math.floor(l.time / (60 * 60 * 24 * 1000)) % 365
          return (
            <Feed
              key={key}
              symbol={l.symbol}
              name={l.name}
              time={`${timeInDays} d`}
              body={l.body}
              socialScore={l.social_score}
              favorites={l.likes}
              retweets={l.retweets}
            />
          )
        })
      }
    </>
  )
}
