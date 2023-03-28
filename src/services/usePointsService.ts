import { pointsURL } from '../config/server';
import { useHttp } from '../hooks/useHttp';
import { IPoint } from '../models/IPoint';

const usePointsService = () => {
	const { error, getRequest, loading, clearError } = useHttp();

	const getAllPoints = async () => {
		const response: IPoint[] = await getRequest(pointsURL);

		return response;
	};

	return { getAllPoints, error, loading, clearError };
};

export default usePointsService;
