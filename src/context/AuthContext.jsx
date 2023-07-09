/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState();

	const data = sessionStorage.getItem('data');
	useEffect(() => {
		if (data) {
			setUserData(JSON.parse(data));
		}
	}, [data]);

	return (
		<AuthContext.Provider
			value={{
				userData,
				setUserData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
