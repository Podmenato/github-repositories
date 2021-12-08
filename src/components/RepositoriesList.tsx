import React, { FC, useEffect, useState } from 'react';
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { TRepository } from 'types/TRepository';
import { getUserRepos } from 'api/github-api';
import GithubList from 'components/GithubList';

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
		<GithubList title="Repositories">
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
		</GithubList>
	);
};

export default RepositoriesList;
