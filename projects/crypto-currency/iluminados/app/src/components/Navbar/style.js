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

      borderRadius: 'none'
      
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

    lastIcons: {
      marginTop: '10px',
      marginLeft: '9px'
    },

       
   
    
  })); 


