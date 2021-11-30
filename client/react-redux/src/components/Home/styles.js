import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	heading: {
		color: 'rgba(0,183,255, 1)',
	},

	container: {
		//backgroundColor: '#09203f',
		borderRadius: 15,
		paddingTop: 1,
	},
	content: {
		marginTop: 30,
	},
	[theme.breakpoints.down('sm')]: {
		content: {
			flexDirection: 'column-reverse',
		},
	},
	[theme.breakpoints.down('md')]: {
		content: {
			flexDirection: 'row',
		},
	},
	[theme.breakpoints.down('lg')]: {
		content: {
			flexDirection: 'row',
		},
	},
	form: {
		margin: 'center',
		backgroundColor: 'rgba(0,0,0, 0.234)',
		borderRadius: 10,
	},
	appBarSearch: {
		borderRadius: 4,
		marginBottom: '1rem',
		display: 'flex',
		padding: '16px',
		'&:hover': {
			backgroundColor: '#2C394B',
		},
	},
	textField: {
		'& .MuiOutlinedInput-root': {
			color: '#D2D2D2',
			backgroundColor: 'rgba(255,255,255,0.029)',
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'rgba(0,0,0,.224672)',
		},
		'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
			// color: '#D2D2D2',
			//  backgroundColor: 'red'
			// highlightColor: 'white'
		},
	},
	paginations: {
		borderRadius: 4,
		marginTop: '1rem',
		padding: '16px',
		marginBottom: '1rem',
		// backgroundColor: 'red',
		marginLeft: '30%',
		width: '60%',
	},
	gridContainer: {
		[theme.breakpoints.down('xs')]: {
			flexdirection: 'column-reverse',
		},
	},
	buttonSearch: {
		color: 'crimson',
	},
}));
