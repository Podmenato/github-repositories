import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import theme from 'theme';
import Routing from 'components/Routing';
import Layout from 'components/Layout';

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<Layout>
				<Routing />
			</Layout>
			<Toaster />
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
