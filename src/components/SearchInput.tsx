import React, { FC, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type TProps = {
	callbackFunction: (query: string) => void;
};

const SearchInput: FC<TProps> = ({ callbackFunction }) => {
	const [userInput, setUserInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<TextField size="small" value={userInput} onChange={handleChange} />
			<Button variant="contained" onClick={() => callbackFunction(userInput)}>
				<SearchIcon />
			</Button>
		</Box>
	);
};

export default SearchInput;
