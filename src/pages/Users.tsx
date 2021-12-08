import React, { useState } from 'react';

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
		</div>
	);
};

export default Users;
