/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [userData, setUserData] = useState();
	const [localData, setLocalData] = useState();

	useEffect(() => {
		if (localData) {
			setUserData(JSON.parse(localData));
		}
	}, [localData]);

	return (
		<AuthContext.Provider
			value={{
				userData,
				localData,
				setUserData,
				setLocalData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
