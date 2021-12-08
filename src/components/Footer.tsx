import React, { FC } from 'react';
import { Box, Container } from '@mui/material';

const Footer: FC = () => (
	<Box
		px={{ xs: 1, sm: 3 }}
		py={{ xs: 1, sm: 3 }}
		bgcolor="footer"
		color="secondary.main"
		minHeight="10vh"
		alignContent="center"
		justifyContent="center"
		alignItems="center"
		justifyItems="center"
	>
		<Container maxWidth="lg">
			<Box textAlign="center">
				GitHub repos {new Date().getFullYear()} by Filip Daniel Fedin
			</Box>
		</Container>
	</Box>
);

export default Footer;
