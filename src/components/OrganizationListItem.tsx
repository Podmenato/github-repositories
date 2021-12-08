import React, { FC, useEffect, useState } from 'react';
import {
	Avatar,
	CircularProgress,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@mui/material';

import { TOrganization } from 'types/TOrganization';
import { fetchImage } from 'api/util';
import { handleFetch } from 'utils/handleFetch';

type TProps = {
	org: TOrganization;
};

const OrganizationListItem: FC<TProps> = ({ org }) => {
	const [imageURL, setImageURL] = useState('');
	const [_error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = () => fetchImage(org.avatar_url);
		handleFetch({ setLoading, setError, fetchData, setData: setImageURL });
	}, [org]);
	return (
		<ListItem key={org.login}>
			<ListItemIcon>
				{loading && <CircularProgress color="inherit" size={20} />}
				{!loading && <Avatar src={imageURL} sx={{ marginRight: '10px' }} />}
			</ListItemIcon>
			<ListItemText>{org.login}</ListItemText>
		</ListItem>
	);
};

export default OrganizationListItem;
