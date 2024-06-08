import { useEffect, useState } from 'react';
import { getAllPosts } from './appwrite';
import { Alert } from 'react-native';

const useAppwrite = <T>(fn: () => Promise<T[]>) => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await fn();
			setData(response);
		} catch (error: any) {
			Alert.alert('Error', error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [fn]);

	// const refetch = () => fetchData();
	return { data, isLoading, refetch: fetchData };
};

export default useAppwrite;
