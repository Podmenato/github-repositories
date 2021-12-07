import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import theme from 'theme';
import Routing from 'components/Routing';

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<Routing />
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
