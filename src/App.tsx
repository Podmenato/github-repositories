import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import theme from 'theme';
import Routing from 'components/Routing';
import Layout from 'components/Layout';

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<Layout>
				<Routing />
			</Layout>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
