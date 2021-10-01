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
    paddingLeft: 70
  },
   image: {
    marginLeft: '8px',
    borderRadius: 100,
    // marginTop: '30px',
   
  },
    typography: {
    color: '#1e3b70',
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

  },
  brandContainer:{
    backgroundColor: 'rgba(255,255,255,.01)',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 10
  }
}))