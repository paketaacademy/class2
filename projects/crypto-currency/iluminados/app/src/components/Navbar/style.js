import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    backgroundColor: ''
  },

  paper: {
    marginRight: theme.spacing(2),
    background: '#f59c17',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: '100vh',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: '80px',

  },

  large: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginTop: '20px',

  },

  icon: {
    marginTop: '30px',
    height: '30px',
    margin: '0px 0px 8px 0'

  },

  notification: {
    marginTop: '80px',
    marginLeft: '8px'

  },

  avatar: {
    marginTop: '10px',
    marginLeft: '15px'
  },

  uItens: {
    marginTop: '8px',
    marginLeft: '8px'
  },

  fonte: {
    fontSize: '9px',
    paddingLeft: '5px;',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '6px'

  },

}));

