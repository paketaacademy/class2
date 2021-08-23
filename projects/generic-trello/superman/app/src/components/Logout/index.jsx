import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { logout } from '../../Services/auth'
import { SingOut, LineSingOut, IconSingOut } from './style.js'

export default function Logout() {

  const handleLogout = (e) => {
    logout()
  }

  return (    
      <SingOut 
        onClick={handleLogout} 
        variant="contained"
      >
        <LineSingOut>Sair</LineSingOut>        
        <IconSingOut><ExitToAppIcon /></IconSingOut>
      </SingOut>    
  )
}