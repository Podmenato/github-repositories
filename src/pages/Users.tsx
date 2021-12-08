import React, { useEffect, useState } from 'react';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';
import UserDataDisplay from 'components/UserDataDisplay';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const data: TUser = await getuserData('Podmenato');
			setUserData(data);
		};
		fetchData();
	}, []);
	return <div>{userData && <UserDataDisplay user={userData} />}</div>;
};

export default Users;
