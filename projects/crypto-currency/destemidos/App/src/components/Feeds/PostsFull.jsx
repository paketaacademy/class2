import React from "react"
import { useState, useEffect } from "react"
import { Link } from "@material-ui/core"
import PostCardFull from "./PostCardFull"
import {Container} from './Style.js'
function PostsFull() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(
      `http://localhost:3000/feeds`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Container>    
      {
        list.length > 0 && list.map((conteudo) => {
          return (
            <Link target={"_blank"} to={conteudo.url}>
              <PostCardFull
                key={conteudo.asset_id}
                body={conteudo.body}            
                display_name={conteudo.display_name}
                profile_image={conteudo.profile_image}
                social_score={conteudo.social_score}
                retweets={conteudo.retweets}
                likes={conteudo.likes}
              />
            </Link>
          )
        })
      }
    </Container>
  )
}

export default PostsFull
