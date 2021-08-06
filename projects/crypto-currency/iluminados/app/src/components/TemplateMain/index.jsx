import React from 'react'
import { Content } from './styles'
import { Navbar } from '../Navbar'

export const TemplateMain = ({ children }) => {
  return (
    <>
      <Navbar />
      <Content>
        {children}
      </Content>
    </>
  )
}