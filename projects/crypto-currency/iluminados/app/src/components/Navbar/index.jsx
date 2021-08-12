import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ChatIcon from '@material-ui/icons/Chat'
import CompareIcon from '@material-ui/icons/Compare'
import InsertChartIcon from '@material-ui/icons/InsertChart'
import PeopleIcon from '@material-ui/icons/People'
import NotificationsIcon from '@material-ui/icons/Notifications'
import SettingsIcon from '@material-ui/icons/Settings'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useStyles } from './style'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null)

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <MenuList> 
        <Link to="#">             
          <MenuItem className={classes.fonte} >          
          <AttachMoneyIcon className={classes.icons} />
            Ravencoin 
          <p>Coin of the day</p>
          </MenuItem>        
          </Link> 

          <Link to="#">             
          <MenuItem className={classes.fonte} >          
          <DashboardIcon className={classes.icons} />
            DASHBOARD
          </MenuItem>        
          </Link> 

          <Link to="#">
            <MenuItem className={classes.fonte}>
            <InsertChartIcon className={classes.icons} />
            MARKETS
            </MenuItem> 
          </Link>

          <Link to="#">     
          <MenuItem className={classes.fonte}>
          <PeopleIcon className={classes.icons} />  
            INFLUENCERS
          </MenuItem>
          </Link> 

          
          <Link to="Feeds /"> 
            <MenuItem className={classes.fonte}>
              <ChatIcon className={classes.icons} />
              FEEDS
            </MenuItem>
          </Link>

          <Link to="#">
            <MenuItem className={classes.fonte}>
            <CompareIcon className={classes.icons} />
              COMPARE
            </MenuItem>
          </Link>
          
          <MenuItem><NotificationsIcon className={classes.lastIcons} /></MenuItem>
          <MenuItem><SettingsIcon className={classes.lastIcons} /></MenuItem>                           

            
        </MenuList>
      </Paper>
      
      <div>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={handleClose}>Markets </MenuItem>
                  <MenuItem onClick={handleClose}>Influencers</MenuItem>
                  <MenuItem onClick={handleClose}>Feeds</MenuItem>
                  <MenuItem onClick={handleClose}>Compare</MenuItem>
                  <MenuItem onClick={handleClose}>Notificações</MenuItem>
                  <MenuItem onClick={handleClose}>Configurações </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}