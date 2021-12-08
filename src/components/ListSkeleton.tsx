import React from 'react';
import { Skeleton, Stack } from '@mui/material';

const ListSkeleton = () => (
	<Stack spacing={1}>
		<Skeleton variant="text" />
		<Skeleton variant="text" />
		<Skeleton variant="text" />
		<Skeleton variant="text" />
		<Skeleton variant="text" />
	</Stack>
);

export default ListSkeleton;
