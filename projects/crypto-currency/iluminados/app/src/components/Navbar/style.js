import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({


    root: {
      display: 'flex',
      backgroundColor: '' ,
              
    },
    
    paper: {
      marginRight: theme.spacing(1),
      background: '#f59c17',
      color: 'white',
      height: '100vh',
      width: '90px',  
      position: 'sticky',
       
    },
    
    
      
    large: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      marginTop: '20px',
      bordeRadius: '0px' 
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
      paddingLeft: '2px;',
      display: 'flex' ,
      flexDirection: 'column',
      
        
    },  
    
    section: {
      display: 'flex' ,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'baseline'
  },
   
    
  }));
  
