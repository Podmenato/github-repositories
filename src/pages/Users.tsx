import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';
import SearchInput from 'components/SearchInput';
import OrganizationsList from 'components/OrganizationsList';
import RepositoriesList from 'components/RepositoriesList';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const fetchUserData = async (userName: string) => {
		setError(null);
		setLoading(true);
		try {
			const userData: TUser = await getuserData(userName);
			setUserData(userData);
		} catch (e) {
			let message = `Failed to fetch user.`;
			if (axios.isAxiosError(e)) {
				message += ` Reason: ${e.message}`;
			}
			setError(message);
		} finally {
			setLoading(false);
		}
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
