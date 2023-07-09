/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';

const Auth = ({ children }) => {
	const token = sessionStorage.getItem('token');
	if (!token) {
		return <Navigate to='/auth' replace />;
	}

	return children;
};

export default Auth;
