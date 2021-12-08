import React, { FC, useEffect, useState } from 'react';
import {
	Avatar,
	Box,
	Icon,
	Link,
	Paper,
	Tooltip,
	Typography
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps } from '@mui/system';

import { TUser } from 'types/TUser';
import { fetchImage } from 'api/util';

type TProps = {
	user: TUser;
};

const UserDataDisplay: FC<TProps> = ({ user }) => {
	const [imageURL, setImageURL] = useState('');
	const boxStyle: SxProps = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	};

	useEffect(() => {
		const getAvatar = async () => {
			const imgUrl = await fetchImage(user.avatar_url);
			setImageURL(imgUrl);
		};
		getAvatar();
	}, [user]);
	return (
		<Paper sx={{ padding: '5px' }}>
			<Box sx={boxStyle}>
				<Avatar src={imageURL} sx={{ marginRight: '10px' }} />
				<Box>
					<Typography variant="h6">{user.login}</Typography>
					<Typography variant="subtitle1">{user.name}</Typography>
				</Box>
			</Box>
			<Typography variant="h6" sx={{ maxWidth: '400px' }}>
				{user.bio}
			</Typography>
			{user.company && (
				<Box sx={boxStyle}>
					<Icon sx={{ marginRight: '10px' }}>
						<BusinessIcon />
					</Icon>
					<Typography variant="h6">{user.company}</Typography>
				</Box>
			)}
			<Box sx={boxStyle}>
				<Icon sx={{ marginRight: '10px' }}>
					<AccessTimeIcon />
				</Icon>
				<Typography variant="h6">{user.created_at}</Typography>
			</Box>
			<Box sx={boxStyle}>
				<Icon sx={{ marginRight: '10px' }}>
					<AccessTimeIcon />
				</Icon>
				<Typography variant="h6">{user.updated_at}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					maxWidth: '400px'
				}}
			>
				<Typography variant="h6">Followers: {user.followers}</Typography>
				<Typography variant="h6">Following: {user.following}</Typography>
			</Box>
			<Typography variant="h6">{user.email}</Typography>
			<Typography variant="h6">{user.hireable}</Typography>
			<Box sx={boxStyle}>
				<Icon sx={{ marginRight: '10px' }}>
					<GitHubIcon />
				</Icon>
				<Link href={user.html_url}>
					<Typography variant="h6">{user.html_url}</Typography>
				</Link>
			</Box>
			{user.location && (
				<Box sx={boxStyle}>
					<Tooltip title="Location">
						<Icon sx={{ marginRight: '10px' }}>
							<PublicIcon />
						</Icon>
					</Tooltip>
					<Typography variant="h6">{user.location}</Typography>
				</Box>
			)}
		</Paper>
	);
};

export default UserDataDisplay;
