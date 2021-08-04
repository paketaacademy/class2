import React from 'react'
import { ContentContainer } from './styles'
import { Navbar } from '../Navbar'

export const TemplateMain = ({ children }) => {
  return (
    <>
      <Navbar />
      <ContentContainer>
        {children}
      </ContentContainer>
    </>
  )
}