import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';

import Paginate from '../Pagination/Pagination';

import useStyles from './styles';
import { Container, Grow, Grid, AppBar, TextField, Button } from '@mui/material';
import ChipInput from 'material-ui-chip-input';
import { getPostBySearch } from '../../actions/post.actions';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Home = () => {
	const classes = useStyles();

	const [currentId, setCurrentId] = useState(null);
	const [search, setSearch] = useState('');
	const [tags, setTags] = useState([]);

	const dispatch = useDispatch();
	const query = useQuery();
	const history = useHistory();
	const page = query.get('page') || 1;
	const searchQuery = query.get('searchQuery');

	const handleSearchPost = (e) => {
		if (search.trim() || tags) {
			//dispatch ---> fetchPost
			dispatch(getPostBySearch({ search, tags: tags.join(',') }));
			history.push(`/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
		} else {
			history.push('/');
		}
	};
	const handleKeyPress = (e) => {
		if (e.keyCode === 13 || e.keyCode === 9) {
			handleSearchPost();
		}
	};

	const handleAdd = (tag) => setTags([...tags, tag]);
	const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

	return (
		<Grow in>
			<Container className={classes.content} maxWidth="xl">
				<Grid
					container
					direction="column-reverse"
					justifyContent="space-between"
					alignItems="stretch"
					spacing={3}
					className={classes.gridContainer}
				>
					<Grid item xs={12} sm={6} md={9}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<AppBar className={classes.appBarSearch} color="transparent" position="static">
						<TextField
							name="search"
							className={classes.textField}
							variant="outlined"
							label="Search memories ..."
							fullWidth
							onKeyPress={handleKeyPress}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<ChipInput
							style={{ margin: '10px 0' }}
							className={classes.textField}
							value={tags}
							onAdd={(chip) => handleAdd(chip)}
							onDelete={(chip) => handleDelete(chip)}
							label="Search Tags"
							variant="outlined"
							// clickable={true}
						/>
						<Button className={classes.buttonSearch} onClick={handleSearchPost} variant="contained">
							Search
						</Button>
					</AppBar>

					

					<Grid className={classes.form} item xs={12} sm={6} lg={6}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
						{
						( !searchQuery && !tags.length) 
								&& 
								(
								<div color="primary" className={classes.paginations} elevation={6}>
										<Paginate page={page} />
									</div>
								)
								}

						
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
