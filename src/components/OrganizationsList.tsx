import React, { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { TOrganization } from 'types/TOrganization';
import { getuserOrgs } from 'api/github-api';
import GithubList from 'components/GithubList';
import OrganizationListItem from 'components/OrganizationListItem';
import { handleFetch } from 'utils/handleFetch';
import ListSkeleton from 'components/ListSkeleton';

type TProps = {
	userName: string;
};

const OrganizationsList: FC<TProps> = ({ userName }) => {
	const [organizations, setOrganizations] = useState<TOrganization[] | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = () => getuserOrgs(userName);
		setOrganizations(null);
		handleFetch({ setLoading, setError, fetchData, setData: setOrganizations });
	}, [userName]);
	return (
		<GithubList title="Organizations">
			{organizations?.map((org: TOrganization) => (
				<OrganizationListItem org={org} key={org.login} />
			))}
			{organizations?.length === 0 && (
				<Typography variant="h6" sx={{ marginLeft: '10px' }}>
					This user is not a member of any organization
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

export default OrganizationsList;
