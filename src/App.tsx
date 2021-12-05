import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from 'theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
	</ThemeProvider>
);

export default App;
