import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  circularProgress: {
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.04)',
    borderRadius: 10
  }
}));