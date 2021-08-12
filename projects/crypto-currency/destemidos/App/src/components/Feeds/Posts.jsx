import React, { useState, useEffect } from "react"
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
      .then( async response => {
        const { data } = await response.json()
        setList(data)        
      })
      .catch(error => console.log(error))
  },[API, setList]);

  const listView = () => {
    return(
    list.length > 0 && list.map((conteudo) => {
      return (
        <Link to={conteudo.url}>
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
    )
  }

  return (
    <div>
      {listView()}
      
    </div>
  )
}

export default Posts
