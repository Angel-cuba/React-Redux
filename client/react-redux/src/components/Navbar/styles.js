import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
       appBar: {
    borderRadius: 15,
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    position: 'relative',
    backgroundColor: '#5e5c5c',
    paddingLeft: 100
  },
   image: {
    marginLeft: '5px',
    borderRadius: 100,
   
  },
    typography: {
    color: '#03c8a8',
    textDecoration: 'none',
  },
  profile:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  purple: {
    // position: 'absolute',
    // right: 30,
  },
  toolbar: {
    // display: 'flex',
    // flexDirection: 'row',
    width: 330,
    // justifyContent: 'space-around', 

  }
}))