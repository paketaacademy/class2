import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import { Control, MenuItemOne, MenuItemTwo, MenuItemThree, MenuItemFour } from './style.js'

export default function SelectLabel() {

  return (
    <div>
      <Control>
        <InputLabel htmlFor="grouped-select">Adicionar Etiqueta</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItemOne value="">
            <em>Nenhum</em>
          </MenuItemOne>
          <MenuItemTwo value={1}>Grupo 1</MenuItemTwo>
          <MenuItemThree value={2}>Grupo 2</MenuItemThree>
          <MenuItemFour value={3}>Grupo 3</MenuItemFour>
        </Select>
      </Control>
    </div>
  )
}
