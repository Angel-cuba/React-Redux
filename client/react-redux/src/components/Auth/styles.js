import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	outSide: {
		paddingTop: 20,
		height: '100vh',
	},
	container: {},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(2),
		backgroundColor: '#b8c6db',
	},
	upinTypography: {
		color: '#f53844',
	},
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},

	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	signupDown: {
		paddingTop: 20,
		paddingBottom: 20,
		width: 350,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		fontSize: 20,
	},
	signinTypography: {
		textTransform: 'lowercase',
		display: 'flex',
		flexDirection: 'row',
	},
	signinFirst: {
		textTransform: 'uppercase',
	},
	signinFirstLetter: {
		textTransform: 'uppercase',
		color: '#f53844',
	},
	signinRestLetter: {
		color: '#f53844',
	},
	//Aqui empieza el NAVBAR
	appBar: {
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		position: 'relative',
		backgroundColor: '#2C394B',
		paddingLeft: 70,
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
	profile: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	purple: {
		// position: 'absolute',
		// right: 30,
		backgroundColor: 'red',
		color: 'silver',
	},
	toolbar: {
		// display: 'flex',
		// flexDirection: 'row',
		width: 330,
		// justifyContent: 'space-around',
	},
	brandContainer: {
		backgroundColor: 'rgba(255,255,255,.01)',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 5,
		paddingLeft: 5,
		paddingRight: 10,
	},
}));
