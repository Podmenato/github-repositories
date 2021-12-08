import React, { FC } from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

type TProps = {
	usernames: string[];
};

const RecentSearches: FC<TProps> = ({ usernames }) => (
	<Paper
		sx={{
			'padding': '10px',
			'width': '290px',
			'@media (max-width:340px)': { width: '100%' }
		}}
	>
		<Typography variant="h5">Recent Searches</Typography>

		<List>
			{usernames.map((username: string) => (
				<ListItem key={username}>
					<ListItemText>{username}</ListItemText>
				</ListItem>
			))}
		</List>
	</Paper>
);

export default RecentSearches;
