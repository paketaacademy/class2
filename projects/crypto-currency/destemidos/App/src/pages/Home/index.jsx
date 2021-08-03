import React from "react"
import UserDetails from "../../components/Home/UserDetails"
import BtcDetails from "../../components/Home/BtcDetails"
import { HomeContainer } from "./Style.js"
import CreditoDetails from "../../components/Home/CreditoDetails"

function Home() {

  return (
    <HomeContainer>
      <UserDetails /> 
      <BtcDetails/>
      <CreditoDetails/>
    </HomeContainer>
  )
}

export default Home