import React, { Dispatch, SetStateAction } from 'react';

import './points.scss';

interface PointItemProps {
	address: string;
	budgets: string[];
	latitude: number;
	longitude: number;
	setCenter: Dispatch<SetStateAction<[number, number]>>;
}

const PointItem: React.FC<PointItemProps> = ({
	address,
	budgets,
	latitude,
	longitude,
	setCenter,
}) => {
	const onSelectLocation = () => {
		setCenter([latitude, longitude]);
	};

	return (
		<li className="point-item" onClick={onSelectLocation}>
			<p>{address}</p>
			<div className="point-item__label">
				{budgets.map((budget, index) => (
					<span key={index}>{budget}</span>
				))}
			</div>
		</li>
	);
};

export default PointItem;
