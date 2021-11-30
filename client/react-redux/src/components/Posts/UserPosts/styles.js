import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	firstText: {
		textAlign: 'center',
		fontWeight: '800',
		width: 'fit-content',
		margin: '25px auto 30px auto',
		color: 'crimson',
	},
	mainContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	outContainer: {
		height: '100%',
	},
	lessThan: {
		height: '88.81vh',
	},
	smMargin: {
		margin: theme.spacing(1),
	},
	actionDiv: {
		textAlign: 'center',
	},
	circularProgress: {
		height: '40vh',
		backgroundColor: 'rgba(0,0,0,.04)',
		borderRadius: 10,
	},
	loadingGrid: {
		height: '100vh',
	},
}));
