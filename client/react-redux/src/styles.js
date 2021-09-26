import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#5e5c5c',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '45px',
    borderRadius: 100,
    position: 'absolute',
    right: 30
  },
  container: {
    backgroundColor: '#09203f',
    borderRadius: 15,
    paddingTop: 1,
  },
  typography: {
    color: '#03c8a8'
  }

}));