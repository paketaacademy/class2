import React from 'react'
import { Btn } from './styles'

export const Button = ({ children, Color, Variant }) => {
  return (
    <Btn variant={Variant} color={Color}>{children}</Btn>
  )
}