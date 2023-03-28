import { useState, useCallback } from 'react';
import axios from 'axios';

export const useHttp = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const getRequest = useCallback(async (url: string) => {
		setLoading(true);

		try {
			const response = await axios.get(url);

			const data = response.data;

			setLoading(false);
			setError(false);

			return data;
		} catch (error) {
			const result = (error as Error).message;
			console.log(result);
			setLoading(false);
			setError(true);
		}
	}, []);

	const clearError = useCallback(() => {
		setError(false);
	}, []);

	return { loading, getRequest, error, clearError };
};
