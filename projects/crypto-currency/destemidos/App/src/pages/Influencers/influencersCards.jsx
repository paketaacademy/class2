import React from "react"
import { useState, useEffect } from "react"
import RecipeReviewCard from "./InfluencersPosts"
import Skeleton from '@material-ui/lab/Skeleton'
import './Style/style.css'



function InfluencersCards() {
  const APP = process.env.REACT_APP_API_URL
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      `${APP}/influencers`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
        setLoading(false)
      })
      .catch(error => console.log(error))

  }, [APP, setList])

  const renderSkeleton = () => {
    return (
      new Array(5).fill().map((row, i) => {
        return (
          <div className='StyledBoxSkeleton'>
            <Skeleton className='StyledSkeleton' variant="rect" width={300} height={400} />
          </div>
        )
      })
    )
  }

  const mapContent = () => {
    return (
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

      {loading ? renderSkeleton() : mapContent()}

    </div>
  )
}


export default InfluencersCards