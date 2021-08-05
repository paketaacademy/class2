import React, { useEffect, useState } from 'react'

function CoinOfTheDay() {

  const [list, setList] = useState([])
  const API = process.env.REACT_APP_API_URL

  useEffect(() => {
    fetch(
      `${API}coinoftheday`,
      { method: 'get' }
    )
      .then(async response => {
        const { data } = await response.json()
        setList(data)
      })
      .catch(error => console.log(error))
  },
    [])

  const day = () => {
    return (
    //  list && list.map((coin) => {
      //  console.log(coin)
       // return (
          <div>
            <h2>{list.name}</h2>
            <h2>{list.symbol}</h2>
          </div>
     //   )
    //  })
    )
  }

  return (
    <div>
      {day()}
    </div>
  )

}

export default CoinOfTheDay