import React, { FC, useEffect, useState } from 'react';
import { Avatar, Box } from '@mui/material';

import { TUser } from 'types/TUser';
import { fetchImage } from 'api/util';

type TProps = {
	user: TUser;
};

const UserDataDisplay: FC<TProps> = ({ user }) => {
	const [imageURL, setImageURL] = useState('');

	useEffect(() => {
		const getAvatar = async () => {
			const imgUrl = await fetchImage(user.avatar_url);
			setImageURL(imgUrl);
		};
		getAvatar();
	}, [user]);
	return (
		<Box>
			<Avatar src={imageURL} />
		</Box>
	);
};

export default UserDataDisplay;
