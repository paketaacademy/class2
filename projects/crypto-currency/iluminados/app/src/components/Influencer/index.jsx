import React, { useEffect, useState } from 'react'
import './style.css'

function Influencer() {

  const [list, setList] = useState([])
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(
      `${API}influencers`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList([data])
      })
      .catch(error => console.log(error))
  },
  )

  const renderInfluencer = () => {
    return list.map((influencer, index) => {
      
      return (
        <div className="page">

          <div key={index} className="container">
            <div className="box">
              <h1>Influencers</h1>              
              <h2>{influencer.twitter_screen_name}</h2>
              <h2>{influencer.display_name}</h2>              
            </div>
            <div className="box">
            <img className='img' src={influencer.profile_image}/>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {renderInfluencer()}
    </div>
  )
}

export default Influencer