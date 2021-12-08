import React, { FC, useState } from 'react';
import { Button, CircularProgress, Paper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type TProps = {
	callbackFunction: (query: string) => void;
	loading: boolean;
};

const SearchInput: FC<TProps> = ({ callbackFunction, loading }) => {
	const [userInput, setUserInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value);
	};

	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: 'row',
				padding: '5px 5px 5px 10px',
				maxWidth: '300px'
			}}
		>
			<TextField
				size="small"
				value={userInput}
				variant="standard"
				onChange={handleChange}
				label="Github username"
				sx={{
					marginRight: '5px'
				}}
			/>
			<Button variant="contained" onClick={() => callbackFunction(userInput)}>
				{loading && <CircularProgress color="inherit" size={20} />}
				{!loading && <SearchIcon />}
			</Button>
		</Paper>
	);
};

export default SearchInput;
