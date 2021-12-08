import React, { FC } from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { EPaths } from 'enums/EPaths';

const TopBar: FC = () => (
	<AppBar position="static">
		<Toolbar disableGutters sx={{ gap: 2 }}>
			<Typography
				variant="h6"
				component="div"
				color="secondary"
				sx={{ flexGrow: 1, marginLeft: '20px' }}
			>
				GitHub Repos
			</Typography>
			<Container>
				<Button
					color="secondary"
					variant="text"
					component={Link}
					to={EPaths.HOME}
				>
					Home
				</Button>
				<Button
					color="secondary"
					variant="text"
					component={Link}
					to={EPaths.USERS}
				>
					Users
				</Button>
			</Container>
		</Toolbar>
	</AppBar>
);

export default TopBar;
