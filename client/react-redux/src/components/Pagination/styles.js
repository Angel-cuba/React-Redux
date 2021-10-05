import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(( (theme) => ({
      ul: {
          justifyContent: 'space-around',
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 5,
        marginLeft: '30%'

     },
     paginationItem: {
     color: theme.palette.grey[900],
     padding: 20,
//     borderRadius: 15,
//     paddingLeft: '30%',
     display: 'flex',
     backgroundColor: theme.palette.warning.main,
 
     },
})
   
))