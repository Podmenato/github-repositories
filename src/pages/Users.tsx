import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';
import SearchInput from 'components/SearchInput';
import OrganizationsList from 'components/OrganizationsList';
import RepositoriesList from 'components/RepositoriesList';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);

	const fetchUserData = async (userName: string) => {
		const userData: TUser = await getuserData(userName);
		setUserData(userData);
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
			<SearchInput callbackFunction={fetchUserData} />
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
