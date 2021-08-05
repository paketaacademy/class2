import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import './style.css'

export default function SignOut() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button className='button--config' variant="contained" {...bindTrigger(popupState)}>
            SETTINGS
          </Button>
          <Menu className='menu' {...bindMenu(popupState)}>
            <MenuItem className='menu--config'>
              <form action="https://intercom.help/lunarcrush/en/" target="_blank">
                <input className='button--help' type="submit" value="Help Center" />
              </form>
            </MenuItem>
            <MenuItem onClick={popupState.close} className='menu--sign'>Sign Out</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  )
}
