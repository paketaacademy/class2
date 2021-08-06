import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    root: {
      display: 'flex',
      backgroundColor: ''        
    },
    
    paper: {
      marginRight: theme.spacing(2),
      background: '#f59c17',
      color: 'white',
      height: '100%',
      width: '100px',  
      position: 'fixed'
         
    },
      
    large: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginTop: '20px',
      borderRadius: 'none'
      
    },
  
    icon: {
      height:'30px',
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
  
    fonte:{
      fontSize: '10px',
      paddingLeft: '6px;',
      display: 'flex' ,
      flexDirection: 'column',
      marginLeft: '0px',
      marginTop: '5px',
      padding: '15px'
        
    },  

    iconesb:{
      paddingTop: '0;5em',
      textAlign: 'center',
      paddingBottom: '0.5em',
      borderBottomStyle: '0.1em',
      borderBottomStyle: ''
    }
    
   
    
  }));

  