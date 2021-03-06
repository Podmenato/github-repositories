import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';
import SearchInput from 'components/SearchInput';
import OrganizationsList from 'components/OrganizationsList';
import RepositoriesList from 'components/RepositoriesList';
import { handleFetch } from 'utils/handleFetch';
import useRecentSearches, { addUsername } from 'hooks/useRecentSearches';
import RecentSearches from 'components/RecentSearches';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	const [recent, setRecent] = useRecentSearches();
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchUserData = async (userName: string) => {
		const fetchData = () => getuserData(userName);
		setRecent(addUsername(userName, recent));
		handleFetch({
			setData: setUserData,
			setError,
			setLoading,
			fetchData
		});
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '5px'
			}}
		>
			<SearchInput callbackFunction={fetchUserData} loading={loading} />
			{!error && (
				<Grid container spacing={2}>
					<Grid item xs={12}>
						{userData && <UserDataDisplay user={userData} />}
					</Grid>
					<Grid item xs={12} md={6}>
						{userData && <RepositoriesList userName={userData.login} />}
					</Grid>
					<Grid item xs={12} md={6}>
						{userData && <OrganizationsList userName={userData.login} />}
					</Grid>
				</Grid>
			)}
			{!userData && <RecentSearches usernames={recent} />}
		</Box>
	);
};

export default Users;
