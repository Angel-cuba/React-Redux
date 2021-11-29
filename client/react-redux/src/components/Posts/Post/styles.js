import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
	media: {
		height: 0,
		paddingTop: '56.25%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		backgroundBlendMode: 'darken',
	},
	border: {
		border: 'solid',
	},
	fullHeightCard: {
		height: '100%',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		borderRadius: '15px',
		height: '100%',
		position: 'relative',
		backgroundColor: '#2C394B',
	},
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '20px',
		color: 'white',
	},
	overlay2: {
		position: 'absolute',
		top: '20px',
		right: '20px',
		color: 'white',
	},
	grid: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '13px',
		flexDirection: 'column',
		textAlign: 'right',
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,.012)',
			color: 'white',
		},
	},
	title: {
		color: '#D2D2D2',
		textAlign: 'center',
	},
	cardActions: {
		padding: '0 16px 8px 16px',
		display: 'flex',
		justifyContent: 'space-between',
	},
	tags: {
		marginTop: 10,
		color: 'crimson',
		textAlign: 'right',
	},
	buttonDelete: {
		backgroundColor: '#ff0000',
		color: 'white',
	},
	colorTitle: {
		color: '#b34930',
	},
	dateData: {
		color: '#ce8713',
	},
});
