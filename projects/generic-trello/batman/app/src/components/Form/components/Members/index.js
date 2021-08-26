import React from 'react';
import { useTheme } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { Control } from './style.js'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const names = [
  'Alisson',
  'Caroline',
  'Lilian',
  'Matheus',
  'Renato',
]

export default function MultipleSelect() {
  const theme = useTheme()
  const [personName, setPersonName] = React.useState([])

  const handleChange = (event) => {
    setPersonName(event.target.value)
  }

  return (
    <div>
      <Control>
        <InputLabel id="demo-mutiple-name-label">Adicionar Membros</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Control>   
    </div>
  )
}
