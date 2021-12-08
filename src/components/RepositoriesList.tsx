import React, { FC, useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

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
		<List>
			{repositories?.map((repo: TRepository) => (
				<ListItem key={repo.full_name}>
					<ListItemText>{repo.full_name}</ListItemText>
				</ListItem>
			))}
		</List>
	);
};

export default RepositoriesList;
