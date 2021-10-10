import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

  heading: {
    color: 'rgba(0,183,255, 1)',
  },

  container: {
    backgroundColor: '#09203f',
   paddingTop: 0,
    margin: 0
  },
  content: {
     marginTop: 30,
  },
  [theme.breakpoints.down('sm')]: {
    content: {
    flexDirection: 'column-reverse',
  }
  },
  [theme.breakpoints.down('md')]: {
    content: {
  
      flexDirection: 'row',
    }
  },
  [theme.breakpoints.down('lg')]: {
    content: {
      flexDirection: 'row',

    }
  },
  form: {
     margin: 'center'
  }
  

}));