import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	appBar: {
		borderRadius: 12,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		position: 'relative',
		backgroundColor: '#2C394B',
		paddingLeft: 70,
		marginBottom: 35,
	},
	appBarHidden: {
		display: 'none',
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
	avatar: {
		backgroundColor: '#a40606',
		color: '#dcdcdc',
	},
	toolbar: {
		width: 330,
	},
	brandContainer: {
		backgroundColor: 'rgba(255,255,255,.01)',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 5,
		paddingLeft: 5,
		paddingRight: 10,
	},
	logout: {
		color: '#fff',
	},
}));
