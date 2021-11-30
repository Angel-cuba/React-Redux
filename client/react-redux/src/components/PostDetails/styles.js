import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	test: {
		backgroundColor: 'red',
		height: '100vh',
	},
	media: {
		borderRadius: '20px',
		objectFit: 'cover',
		width: '400px',
		maxHeight: '600px',
	},
	card: {
		display: 'flex',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			flexWrap: 'wrap',
			flexDirection: 'column',
		},
	},
	section: {
		borderRadius: '20px',
		margin: '10px',
		flex: 1,
	},
	imageSection: {
		marginLeft: '20px',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
		},
	},
	recommendedPosts: {
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
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
		justifyContent: 'space-between',
	},
	innerContainer: {
		height: '200px',
		overflowY: 'auto',
		width: '29%',
		marginRight: '20px',
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
	},
	recommendedPostsMessage: {
		margin: '20px',
		cursor: 'pointer',
		maxWidth: '300px',
		textAlign: 'center',
	},
	left: {
		textAlign: 'left',
	},
	right: {
		right: '5px',
	},
}));
