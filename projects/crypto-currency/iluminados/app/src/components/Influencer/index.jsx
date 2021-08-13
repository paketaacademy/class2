import React, { useEffect, useState } from 'react'
import { Link } from "@material-ui/core"
import "./style-inf.css"

function Influencer() {

  const [list, setList] = useState([])
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(
      `${API}influencer`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  }, [API, setList]
  )

  const renderInfluencer = () => {
    return list.map((influencer, index) => {

      return (
        <div className="container-inf" key="index">

          <div classname="box-title">
            <div>
              <img className="img-user" src={influencer.profile_image} />
            </div>

            <div>
              <h2>{influencer.display_name}</h2>
            </div>
          </div>

          <div>
            <Link to="#">
            <img className="img-profile" src={influencer.banner_image} />
            </Link>
            
          </div>

          <div className="txt">
            <h3>Engagement: {influencer.engagement}</h3>
            <h3>Followers: {influencer.followers}</h3>
            <h3>Following: {influencer.following}</h3>
          </div>

        </div>
      )
    })
  }

  return (
    <div className="box-card">
      {renderInfluencer()}
    </div>
  )
}

export default Influencer