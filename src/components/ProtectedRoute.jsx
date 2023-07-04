/* eslint-disable react/prop-types */
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const token = sessionStorage.getItem('token');

	return (
		<Route
			{...rest}
			render={(props) =>
				token ? <Component {...props} /> : <Navigate to='/auth' />
			}
		/>
	);
};

export default ProtectedRoute;
