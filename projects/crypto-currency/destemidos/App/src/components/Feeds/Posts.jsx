import React from "react";
import { useState, useEffect } from "react";

import PostCard from "./PostCard";

function Posts() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(
      `http://localhost:3000/feeds`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
        console.log(data)
      })
      .catch(error => console.log(error))


  }, []);


  return (
    <div>
      {console.log('oi', list)}
      {console.log('teste', list.length)}
      {

        list.length > 0 && list.map((conteudo) => {
          return (
            <PostCard
              key={conteudo.asset_id}
              body={conteudo.body}
              social_score={conteudo.social_score}
              retweets={conteudo.retweets}
              likes={conteudo.likes}
            />
          )
        })
      }
    </div>
  )
}


export default Posts;
