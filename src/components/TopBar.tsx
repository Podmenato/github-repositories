import React, { FC } from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const TopBar: FC = () => (
	<AppBar position="static">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				GH Repos
			</Typography>
		</Toolbar>
	</AppBar>
);

export default TopBar;
