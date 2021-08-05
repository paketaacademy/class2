import React from "react"
import UserDetails from "../../components/Home/UserDetails"
import BtcDetails from "../../components/Home/BtcDetails"
import { HomeContainer } from "./Style.js"
import CreditDetails from "../../components/Home/CreditDetails"

function Home() {

  return (
    <HomeContainer>
      <UserDetails /> 
      <BtcDetails/>
      <CreditDetails/>
    </HomeContainer>
  )
}

export default Home