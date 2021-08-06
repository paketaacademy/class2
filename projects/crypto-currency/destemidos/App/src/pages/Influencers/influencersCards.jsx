import React from "react"
import { useState, useEffect } from "react"
import RecipeReviewCard from "./InfluencersPosts"
import './Style/style.css'

const APP = process.env.REACT_APP_API_URL

function InfluencersCards() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch(
      `${APP}/influencers`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))


  }, [])

  const mapContent = () =>{
      return(
        list.length > 0 && list.map((content) => {
        return (
          <div className="cards" key={content.identifier}>
            <RecipeReviewCard 
              rank={content.influencer_rank}
              banner_image={content.banner_image}
              profile_image={content.profile_image}
              display_name={content.display_name}
              twitter_screen_name={content.twitter_screen_name}
            />
          </div>
        )
      })
      )
  }


  return (
    <div className="container">
      
      {mapContent()}
      
    </div>
  )
}


export default InfluencersCards