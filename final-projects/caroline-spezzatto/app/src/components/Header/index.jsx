import React from "react"
import { 
  Container,
  Title,
  Description
}from './style'

export default function Header() {
  return (
    <Container>
      <Title>Find Your Dream Job ✨</Title>
      <Description>
        Interested in any opportunity?
        Send an email with the name of the vacancy to  
        <span>your-dream-job@gmail.com</span>
      </Description>
    </Container>
  )
}