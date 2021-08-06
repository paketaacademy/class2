import React from "react"
import { useState, useEffect } from "react"
import { Link } from "@material-ui/core"
import PostCard from "./PostCard"

function Posts() {

  const [list, setList] = useState([])
  const API = process.env.REACT_APP_API_URL
  useEffect(() => {
    fetch(
      `${API}/feeds`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)        
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <div>
      
      {
        list.length > 0 && list.map((conteudo) => {
          return (
            <Link target={"_blank"}  to={conteudo.url}>
              <PostCard
                key={conteudo.asset_id}
                body={conteudo.body}
                social_score={conteudo.social_score}
                retweets={conteudo.retweets}
                likes={conteudo.likes}
              />
            </Link>
          )
        })
      }
    </div>
  )
}

export default Posts
