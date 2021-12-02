import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	test: {
		backgroundColor: 'red',
		height: '100vh',
	},
	media: {
		borderRadius: '10px',
		objectFit: 'cover',
		width: '400px',
		maxHeight: '600px',
		// [theme.breakpoints.down(903)]: {
		// 	width: '390px',
		// },
		// [theme.breakpoints.down(883)]: {
		// 	width: '370px',
		// },
		// [theme.breakpoints.down(863)]: {
		// 	width: '350px',
		// },
		// [theme.breakpoints.down(843)]: {
		// 	width: '330px',
		// },
		// [theme.breakpoints.down(823)]: {
		// 	width: '310px',
		// },
	},
	card: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			flexDirection: 'column',
		},
	},
	section: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100vw',
		borderRadius: '10px',
		margin: '10px',
		[theme.breakpoints.down('1019')]: {
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: 'right',
		},
	},

	textSection: {
		maxWidth: '500px',
		[theme.breakpoints.down('800')]: {
			width: '100%',
			textAlign: 'center',
		},
	},
	imageSection: {
		marginLeft: '20px',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
		},
	},
	recommendedSections: {
		backgroundColor: 'silver',
		borderRadius: 5,
		padding: 10,
	},
	recommendedPosts: {
		display: 'flex',
		border: '2px solid black',
		justifyContent: 'space-around',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	recommendedPostsMessage: {
		margin: '20px 40px 20px 40px',
		cursor: 'pointer',
		maxWidth: '300px',
		textAlign: 'center',
		[theme.breakpoints.down(961)]: {
			maxWidth: '500px',
		},
	},
	loadingSide: {
		height: '87.78vh',
	},
	allSide: {
		width: '100%',
	},
	allPaper: {
		padding: '20px',
		borderRadius: '15px',
		marginTop: '20px',
	},
	loadingPaper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px',
		borderRadius: '15px',
		height: '40vh',
	},
	commentContainer: {
		display: 'flex',
		marginTop: 19,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			width: '100%',
		},
	},
	innerContainer: {
		height: '200px',
		overflowY: 'auto',
		width: '35%',
		[theme.breakpoints.down('md')]: {
			width: '50%',
			margin: 'auto',
		},

		[theme.breakpoints.down('sm')]: {
			width: '90%',
			margin: 'auto',
		},
		marginRight: '20px',
	},
	writeComment: {
		width: '40%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		[theme.breakpoints.down('md')]: {
			width: '80%',
			paddingTop: '25px',
			paddingBottom: '25px',
			margin: 'auto',
		},
	},
	small: {
		width: '30%',
	},
	tagsTypography: {
		color: 'crimson',
	},
	commentsTypography: {
		color: 'crimson',
	},
	messageTypography: {
		color: 'silver',
		maxWidth: '400px',
	},

	left: {
		textAlign: 'left',
	},
	right: {
		right: '5px',
	},
}));
