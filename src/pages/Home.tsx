import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';

const Home = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center'
		}}
	>
		<Typography variant="h4">
			This is a simple web application which will fetch data, names of
			repositories and organization of an GitHub user.
		</Typography>

		<Button variant="contained" component={Link} to={EPaths.USERS}>
			Get started
		</Button>
	</Box>
);

export default Home;
