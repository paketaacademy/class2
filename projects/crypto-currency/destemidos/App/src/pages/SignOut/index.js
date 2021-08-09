import React from 'react'
import Button from '@material-ui/core/Button'
import './style.css'
import { logout } from '../../Services/auth'
import { isAuthenticated } from '../../Services/auth'

export default function SignOut() {

  const handleLogout = (e) => {
    logout()
  }

  return (
    <>
      {isAuthenticated() && 
        <Button 
          onClick={handleLogout} 
          className='button--config' 
          variant="contained"
        >
          SIGN OUT
        </Button>
      }
    </>
  )
}