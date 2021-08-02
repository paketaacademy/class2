import React from "react";
import { useState, useEffect } from "react";

import PostInfluencers from "./PostInfluencers";

function InfluencersCards() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(
      `http://localhost:3000/influencers`,
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
            <PostInfluencers
              key={conteudo.identifier}
              rank={conteudo.influencer_rank}
              banner_image={conteudo.banner_image}
              profile_image={conteudo.profile_image}
              display_name={conteudo.display_name}
              twitter_screen_name={conteudo.twitter_screen_name}
            />
          )
        })
      }
    </div>
  )
}


export default InfluencersCards;