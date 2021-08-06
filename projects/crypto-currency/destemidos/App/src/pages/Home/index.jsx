import React from "react"
import UserDetails from "../../components/Home/UserDetails"
import CoinsDetails from "../../components/Home/CoinsDetails"
import { HomeContainer } from "./Style.js"
import CreditDetails from "../../components/Home/CreditDetails"

function Home() {

  return (
    <HomeContainer>
      <UserDetails /> 
        <CoinsDetails/>
      <CreditDetails/>
    </HomeContainer>
  )
}

export default Home