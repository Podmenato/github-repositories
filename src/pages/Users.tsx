import React, { useState } from 'react';

import RepositoriesList from 'components/RepositoriesList';
import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';
import SearchInput from 'components/SearchInput';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);

	const fetchUserData = async (userName: string) => {
		const userData: TUser = await getuserData(userName);
		setUserData(userData);
	};

	return (
		<div>
			<SearchInput callbackFunction={fetchUserData} />

			{userData && <UserDataDisplay user={userData} />}
			{userData && <RepositoriesList userName={userData.login} />}
		</div>
	);
};

export default Users;
