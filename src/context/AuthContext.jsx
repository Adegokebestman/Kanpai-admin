/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const userToken = sessionStorage.getItem('token');
	const [userData, setUserData] = useState({});

	return (
		<AuthContext.Provider
			value={{
				userToken,
				userData,
				setUserData,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
// id
// name
// lastName
// email
// isVerified
// userType
// userImage
// description
// phone
// user_id
// balance
// language
