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
    backgroundColor: '#2C394B',
    paddingLeft: 70
  },
   image: {
    marginLeft: '8px',
    borderRadius: 100,
    // marginTop: '30px',
   
  },
    typography: {
    color: '#D2D2D2',
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
    backgroundColor: 'red',
    color: 'silver'
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