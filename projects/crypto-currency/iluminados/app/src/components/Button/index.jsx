import React from 'react'
import { Btn } from './styles'

export const Button = ({ children, Color, Variant, Type }) => {
  return (
    <Btn variant={Variant} color={Color} type={Type}>{children}</Btn>
  )
}