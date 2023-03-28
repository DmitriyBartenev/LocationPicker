import React, { useEffect, useState } from 'react';
import usePointsService from '../services/usePointsService';

import { IPoint } from '../models/IPoint';

import Points from '../components/Points';
import YandexMap from '../components/YandexMap';
import ErrorMessage from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner';

import './app.scss';

const App: React.FC = () => {
	const [points, setPoints] = useState<IPoint[]>([]);
	const [center, setCenter] = useState<[number, number]>([56.80245, 60.604913]);

	const { getAllPoints, error, loading, clearError } = usePointsService();

	useEffect(() => {
		getAllPoints().then((data) => setPoints(data));

		//eslint-disable-next-line
	}, []);

	const refetch = () => {
		clearError();
		getAllPoints();
	};

	return (
		<main className="container">
			{loading ? <Spinner /> : <Points points={points} setCenter={setCenter} />}
			{error && (
				<ErrorMessage
					title="Oops...something went wrong"
					label="Try Again"
					refetch={refetch}
				/>
			)}
			<YandexMap center={center} />
		</main>
	);
};

export default App;
