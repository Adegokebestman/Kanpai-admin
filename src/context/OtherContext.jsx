/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const OtherContext = createContext();

export const OtherProvider = ({ children }) => {
	const [userReportUser, setUserReportUser] = useState();

	return (
		<OtherContext.Provider
			value={{
				userReportUser,
				setUserReportUser,
			}}
		>
			{children}
		</OtherContext.Provider>
	);
};

export default OtherContext;
