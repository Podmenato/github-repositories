import React, { FC, useEffect, useState } from 'react';
import {
	Alert,
	Avatar,
	Box,
	CircularProgress,
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
import { format, formatDistance } from 'date-fns';
import axios from 'axios';

import { TUser } from 'types/TUser';
import { fetchImage } from 'api/util';

type TProps = {
	user: TUser;
};

const UserDataDisplay: FC<TProps> = ({ user }) => {
	const [imageURL, setImageURL] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const boxStyle: SxProps = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	};

	useEffect(() => {
		const getAvatar = async () => {
			setError(null);
			setLoading(true);
			try {
				const imgUrl = await fetchImage(user.avatar_url);
				setImageURL(imgUrl);
			} catch (e) {
				let message = `Failed to fetch user avatar.`;
				if (axios.isAxiosError(e)) {
					message += ` Reason: ${e.message}`;
				}
				setError(message);
			} finally {
				setLoading(false);
			}
		};
		getAvatar();
	}, [user]);

	return (
		<>
			<Paper sx={{ padding: '5px' }}>
				<Box sx={boxStyle}>
					{loading && <CircularProgress color="inherit" size={20} />}
					{!loading && <Avatar src={imageURL} sx={{ marginRight: '10px' }} />}
					<Box>
						<Typography variant="h6">{user.login}</Typography>
						<Typography variant="subtitle1">{user.name}</Typography>
					</Box>
				</Box>
				<Box sx={boxStyle}>
					<Icon sx={{ marginRight: '10px' }}>
						<GitHubIcon />
					</Icon>
					<Link href={user.html_url}>
						<Typography variant="h6">{user.html_url}</Typography>
					</Link>
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
				{user.hireable && <Typography variant="h6">Hireable</Typography>}
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
				{user.created_at && (
					<Box sx={boxStyle}>
						<Tooltip title="Created">
							<Icon sx={{ marginRight: '10px' }}>
								<AccessTimeIcon />
							</Icon>
						</Tooltip>
						<Typography variant="h6">
							{format(new Date(user.created_at), 'MM/dd/yyyy')}
						</Typography>
					</Box>
				)}
				{user.updated_at && (
					<Box sx={boxStyle}>
						<Tooltip title="Last updated">
							<Icon sx={{ marginRight: '10px' }}>
								<AccessTimeIcon />
							</Icon>
						</Tooltip>
						<Typography variant="h6">
							{formatDistance(new Date(user.updated_at), Date.now(), {
								addSuffix: true
							})}
						</Typography>
					</Box>
				)}
			</Paper>
			{error && (
				<Alert severity="error" sx={{ marginTop: '20px' }}>
					{error}
				</Alert>
			)}
		</>
	);
};

export default UserDataDisplay;
