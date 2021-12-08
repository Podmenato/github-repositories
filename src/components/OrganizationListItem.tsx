import React, { FC, useEffect, useState } from 'react';
import {
	Avatar,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { TOrganization } from 'types/TOrganization';
import { fetchImage } from 'api/util';

type TProps = {
	org: TOrganization;
};

const OrganizationListItem: FC<TProps> = ({ org }) => {
	const [imageURL, setImageURL] = useState('');

	useEffect(() => {
		const getAvatar = async () => {
			const imgUrl = await fetchImage(org.avatar_url);
			setImageURL(imgUrl);
		};
		getAvatar();
	}, [org]);
	return (
		<ListItem key={org.login}>
			<ListItemIcon>
				<Avatar src={imageURL} />
			</ListItemIcon>
			<ListItemText>{org.login}</ListItemText>
			<ListItemSecondaryAction>
				<IconButton>
					<KeyboardArrowRightIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default OrganizationListItem;
