import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

  heading: {
    color: 'rgba(0,183,255, 1)',
  },

  container: {
    //backgroundColor: '#09203f',
    borderRadius: 15,
    paddingTop: 1,
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
  },
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    // width: '60%'
    // marginLeft: '30%'
  },
  paginations: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px'
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]:
    {
      flexdirection: 'column-reverse',
    }
  },
  buttonSearch: {
    color: 'crimson',
  }
  

}));