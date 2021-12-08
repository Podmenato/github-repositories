import React, { FC, useEffect, useState } from 'react';

import { TOrganization } from 'types/TOrganization';
import { getuserOrgs } from 'api/github-api';
import GithubList from 'components/GithubList';
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
		<GithubList title="Organizations">
			{organizations?.map((org: TOrganization) => (
				<OrganizationListItem org={org} key={org.login} />
			))}
		</GithubList>
	);
};

export default OrganizationsList;
