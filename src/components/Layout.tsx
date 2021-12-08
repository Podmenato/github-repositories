import React, { FC } from 'react';
import { Box, Container } from '@mui/material';

import TopBar from 'components/TopBar';
import Footer from 'components/Footer';

const Layout: FC = ({ children }) => (
	<>
		<TopBar />
		<Box
			sx={{
				width: '100%',
				height: '100%',
				backgroundColor: 'bgPrimary'
			}}
		>
			<Container
				maxWidth="lg"
				component="main"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
					padding: '100px 30px',
					backgroundColor: 'bgPrimary'
				}}
			>
				{children}
			</Container>
		</Box>
		<Footer />
	</>
);

export default Layout;
