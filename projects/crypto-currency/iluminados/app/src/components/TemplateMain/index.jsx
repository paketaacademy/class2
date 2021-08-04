import React from 'react'
import { Navbar } from '../Navbar'
import { ContentContainer } from './styles'

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