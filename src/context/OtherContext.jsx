/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const OtherContext = createContext();

export const OtherProvider = ({ children }) => {
	const [userReportUser, setUserReportUser] = useState();
	const [userData, setUserData] = useState(null);
	const [chartData, setChartData] = useState([]);
	const [usersNumbers, setUsersNumbers] = useState({
		drivers: '',
		buyers: '',
		suppliers: '',
	});

	return (
		<OtherContext.Provider
			value={{
				userReportUser,
				usersNumbers,
				chartData,
				userData,
				setUserData,
				setChartData,
				setUsersNumbers,
				setUserReportUser,
			}}
		>
			{children}
		</OtherContext.Provider>
	);
};

export default OtherContext;
