import React from 'react';

import './errorMessage.scss';

interface ErrorMessageProps {
	title: string;
	label: string;
	refetch: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
	title,
	label,
	refetch,
}) => {
	return (
		<div className="errorMessage">
			<p>{title}</p>
			<button onClick={refetch}>{label}</button>
		</div>
	);
};

export default ErrorMessage;
