import React, { FC, useEffect, useState } from 'react';
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { TRepository } from 'types/TRepository';
import { getUserRepos } from 'api/github-api';

type TProps = {
	userName: string;
};

const RepositoriesList: FC<TProps> = ({ userName }) => {
	const [repositories, setRepositories] = useState<TRepository[] | null>(null);
	useEffect(() => {
		const fetchRepositories = async () => {
			const repos: TRepository[] = await getUserRepos(userName);
			setRepositories(repos);
		};
		fetchRepositories();
	}, [userName]);
	return (
		<Box>
			<Typography variant="h5">Repositories</Typography>
			<List
				sx={{
					height: '300px',
					overflow: 'scroll'
				}}
			>
				{repositories?.map((repo: TRepository) => (
					<ListItem key={repo.full_name}>
						<ListItemText>{repo.name}</ListItemText>
						<ListItemSecondaryAction>
							<IconButton>
								<KeyboardArrowRightIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default RepositoriesList;
