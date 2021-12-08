import {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useState
} from 'react';

type RecentState = [string[], Dispatch<SetStateAction<string[]>>];

const RecentContext = createContext<RecentState>(undefined as never);

export const addUsername = (username: string, recent: string[]): string[] => {
	const tempArray = [...recent];
	if (recent.length > 4) {
		tempArray.shift();
	}
	tempArray.push(username);
	return tempArray;
};

export const RecentProvider: FC = ({ children }) => {
	const recentState = useState<string[]>([]);

	return (
		<RecentContext.Provider value={recentState}>
			{children}
		</RecentContext.Provider>
	);
};

const useRecentSearches = () => useContext(RecentContext);

export default useRecentSearches;
