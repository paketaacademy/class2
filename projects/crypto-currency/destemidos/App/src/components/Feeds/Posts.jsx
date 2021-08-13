import React, { useState, useEffect } from "react"
import { Link } from "@material-ui/core"
import PostCard from "./PostCard"
import Skeleton from '@material-ui/lab/Skeleton'

function Posts() {

  const [list, setList] = useState([])
  const API = process.env.REACT_APP_API_URL
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      `${API}/feeds`,
      { method: 'get' }
    )
      .then( async response => {
        const { data } = await response.json()
        setList(data)  
        setLoading(false)      
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
      {loading ? <Skeleton variant='text' width={100} height={50} /> : listView()}
      
    </div>
  )
}

export default Posts
