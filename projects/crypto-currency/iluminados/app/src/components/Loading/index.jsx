import React from 'react'
import { Load } from './styles'

export const Loading = ({ setDisplay }) => {
  return (
    <Load inputDisplay={setDisplay}>
      <span className="loading"></span>
      <span className="loading"></span>
      <span className="loading"></span>
      <span className="loading"></span>
    </Load>
  )
}