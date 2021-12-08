import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';
import SearchInput from 'components/SearchInput';
import OrganizationsList from 'components/OrganizationsList';
import RepositoriesList from 'components/RepositoriesList';
import { handleFetch } from 'utils/handleFetch';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchUserData = async (userName: string) => {
		const fetchData = () => getuserData(userName);
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
			<Typography variant="h6" color="error">
				{error}
			</Typography>
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
		</Box>
	);
};

export default Users;
