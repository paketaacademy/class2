import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    root: {
      display: 'flex',
      backgroundColor: '#F7F4F3'        
    },
    
    paper: {
      marginRight: theme.spacing(2),
      background: '#f72c28',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: '100vh',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      width: '120px',       
    },
      
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginTop: '20px',
      marginLeft: '18px'
    },
  
    icon:{
      marginLeft: '30px',
      marginTop: '25px',
      height:'30px'
  
    },
  
    notification:{
      marginLeft: '10px',
      marginTop: '75px',
      
    },
  
    avatar:{
      marginLeft: '14px',
      marginTop: '10px'
    },
  
    uItens:{
      marginLeft: '10px',
      marginTop: '10px'
    },
  
    fonte:{
        fontSize: '7px',
        marginLeft: ''
    },
  
    fonteFeeds:{
      marginLeft: '13px',
      fontSize: '7px'
    },
  
    logo: {
      marginLeft: '18px',
      marginTop: '20px',
        
    },
    
  }));

  