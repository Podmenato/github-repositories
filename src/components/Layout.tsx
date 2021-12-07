import React, { FC } from 'react';

import TopBar from 'components/TopBar';
import Footer from 'components/Footer';

const Layout: FC = ({ children }) => (
	<>
		<TopBar />
		{children}
		<Footer />
	</>
);

export default Layout;
