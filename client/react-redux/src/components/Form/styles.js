import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 13,
    marginTop: 19,
  },
  textfield: {
    marginBottom: 10,
  },
  letter: {
    color: '#b02e0c',
    padding: 20,
    borderRadius: 15,
    marginLeft: '30%',
    backgroundColor: '#2C394B'
  },
  span: {
    color: 'orange'
  }
}));