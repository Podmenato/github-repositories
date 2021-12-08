import React, { FC, useState } from 'react';
import { Button, Paper, TextField } from '@mui/material';
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
				<SearchIcon />
			</Button>
		</Paper>
	);
};

export default SearchInput;
