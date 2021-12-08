import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		bgPrimary?: string;
		footer?: string;
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		bgPrimary?: string;
		footer?: string;
	}
}

const theme = createTheme({
	palette: {
		primary: { main: '#6a1b9a' },
		secondary: { main: '#ffeb3b' },
		bgPrimary: '#deb0fd',
		footer: '#5c0097'
	}
});

export default theme;
