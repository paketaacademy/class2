import React from "react"
import UserDetails from "../../components/Home/UserDetails"
import CoinsDetails from "../../components/Home/CoinsDetails"
import { HomeContainer } from "./Style.js"
import CreditDetails from "../../components/Home/CreditDetails"

import './style.css'

function Home() {
  return (
    <HomeContainer>
      <div className='boxContainter'>
        <div className='boxRowTop'>
          <CreditDetails />
          <UserDetails />
        </div>
        <div>
          <CoinsDetails />
        </div>
      </div>
    </HomeContainer>



  )
}

export default Home