import { Feed } from "./Feed"
import { Loading } from "../Loading"
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { get } from "react-hook-form"
import { getToken } from "../../Services/auth"

export const HandleWithFeed = (props) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const url = "http://localhost:3030/feeds"
  useEffect(() => {
    fetch(url, { method: "GET" })
      .then(async res => {
        const { data } = await res.json()
        console.log(data)
        setList(data)
        setLoading(true)
      })
      .catch((err) => {
        console.log(err)
        setLoading(true)
      })
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
