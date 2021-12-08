import React, { useEffect, useState } from 'react';

import { getuserData } from 'api/github-api';
import { TUser } from 'types/TUser';

const Users = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const data: TUser = await getuserData('Podmenato');
			setUserData(data);
		};
		fetchData();
	}, []);
	return <div />;
};

export default Users;
