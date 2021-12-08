import React, { FC } from 'react';
import { List, Paper, Typography } from '@mui/material';

type TProps = {
	title: string;
};

const GithubList: FC<TProps> = ({ children, title }) => (
	<Paper sx={{ padding: '5px 0 0 5px' }}>
		<Typography sx={{ paddingLeft: '5px' }} variant="h5">
			{title}
		</Typography>
		<List
			sx={{
				height: '300px',
				overflow: 'scroll'
			}}
		>
			{children}
		</List>
	</Paper>
);

export default GithubList;
