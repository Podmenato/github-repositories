import React, { FC, useEffect, useState } from 'react';
import { Box, List, Typography } from '@mui/material';

import { TOrganization } from 'types/TOrganization';
import { getuserOrgs } from 'api/github-api';
import OrganizationListItem from 'components/OrganizationListItem';

type TProps = {
	userName: string;
};

const OrganizationsList: FC<TProps> = ({ userName }) => {
	const [organizations, setOrganizations] = useState<TOrganization[] | null>(
		null
	);
	useEffect(() => {
		const fetchOrgs = async () => {
			const orgs: TOrganization[] = await getuserOrgs(userName);
			setOrganizations(orgs);
		};
		fetchOrgs();
	}, [userName]);
	return (
		<Box>
			<Typography variant="h5">Organizations</Typography>
			<List
				sx={{
					height: '300px',
					overflow: 'scroll'
				}}
			>
				{organizations?.map((org: TOrganization) => (
					<OrganizationListItem org={org} key={org.login} />
				))}
			</List>
		</Box>
	);
};

export default OrganizationsList;
