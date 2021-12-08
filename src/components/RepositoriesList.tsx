import React, { FC, useEffect, useState } from 'react';
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Typography
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { TRepository } from 'types/TRepository';
import { getUserRepos } from 'api/github-api';
import GithubList from 'components/GithubList';
import { handleFetch } from 'utils/handleFetch';
import ListSkeleton from 'components/ListSkeleton';

type TProps = {
	userName: string;
};

const RepositoriesList: FC<TProps> = ({ userName }) => {
	const [repositories, setRepositories] = useState<TRepository[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const openNewTab = (url: string) => {
		const win = window.open(url, url);
		win?.focus();
	};

	useEffect(() => {
		const fetchData = () => getUserRepos(userName);
		setRepositories(null);
		handleFetch({ fetchData, setError, setLoading, setData: setRepositories });
	}, [userName]);
	return (
		<GithubList title="Repositories">
			{repositories?.map((repo: TRepository) => (
				<ListItem key={repo.full_name}>
					<ListItemText>{repo.name}</ListItemText>
					<ListItemSecondaryAction>
						<IconButton onClick={() => openNewTab(repo.html_url)}>
							<OpenInNewIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
			{repositories?.length === 0 && (
				<Typography variant="h6" sx={{ marginLeft: '10px' }}>
					This user has no created repositories
				</Typography>
			)}
			{loading && <ListSkeleton />}
			{error && (
				<Typography variant="h6" color="error">
					{error}
				</Typography>
			)}
		</GithubList>
	);
};

export default RepositoriesList;
