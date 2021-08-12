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

  const renderinfluencer = () => {
    return list.map((influencer, index) => {
      console.log(influencer)
      return (
        <div className="page">

          <div key={index} className="container">
            <div className="coin">
              <h1>Influencers</h1>
              <hr />
              <h2>{influencer.name}</h2>
              <h2>{influencer.symbol}</h2>
            </div>
            <div className="coin">
              <img className='img' src="https://image.flaticon.com/icons/png/128/1667/1667808.png" alt="coin" />
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {renderinfluencer()}
    </div>
  )
}

export default Influencer