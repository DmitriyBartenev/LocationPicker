import React, { Dispatch, SetStateAction } from 'react';
import { IPoint } from '../../models/IPoint';
import PointItem from './PointItem';

interface PointsProps {
	points: IPoint[];
	setCenter: Dispatch<SetStateAction<[number, number]>>;
}

const Points: React.FC<PointsProps> = ({ points, setCenter }) => {
	return (
		<nav className="points">
			<ul>
				{points?.map((point, index) => (
					<PointItem key={index} {...point} setCenter={setCenter} />
				))}
			</ul>
		</nav>
	);
};

export default Points;
