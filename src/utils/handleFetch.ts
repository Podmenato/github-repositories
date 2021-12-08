import axios from 'axios';
export const handleFetch = async <T extends unknown>({
	setLoading,
	setError,
	setData,
	fetchData
}: {
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	setData: (data: T) => void;
	fetchData: () => Promise<T>;
}) => {
	setError(null);
	setLoading(true);
	try {
		const data: T = await fetchData();
		setData(data);
	} catch (e) {
		let message = `Failed to fetch data.`;
		if (axios.isAxiosError(e)) {
			message += ` Reason: ${e.message}`;
		}
		setError(message);
	} finally {
		setLoading(false);
	}
};
