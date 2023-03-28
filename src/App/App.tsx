import React from 'react';

import Points from '../components/Points';
import YandexMap from '../components/YandexMap';

import './app.scss';

const App: React.FC = () => {
	return (
		<main className="container">
			<Points />
			<YandexMap />
		</main>
	);
};

export default App;
