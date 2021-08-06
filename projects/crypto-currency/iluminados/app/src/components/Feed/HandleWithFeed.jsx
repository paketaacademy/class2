import { Feed } from "./Feed"
import React, { useState, useEffect } from 'react'

export const HandleWithFeed = (props) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const url = "http://localhost:3030/feeds"
  useEffect(() => {
    fetch(url)
      .then(async res => {
        const { data } = await res.json()
        setList(data)
        setLoading(true)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      {
        loading ? (
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
        ) : <Loading />
      }
    </>
  )
}
