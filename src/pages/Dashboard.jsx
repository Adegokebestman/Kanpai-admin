/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import LineChart from '../components/Chart';
import InfoStats from '../components/InfoStats';
import {
	getSuppliersNum,
	getDriversNum,
	getBuyersNum,
} from '../lib/apiEndPoints';
import { useContext } from 'react';
import OtherContext from '../context/OtherContext';

const Dashboard = () => {
	const { usersNumbers, setUsersNumbers } = useContext(OtherContext);

	useEffect(() => {
		let mount = true;
		const fetchAllNum = async () => {
			const suppliers = await getSuppliersNum();
			const buyers = await getBuyersNum();
			const drivers = await getDriversNum();
			if (
				drivers.requestSucessful &&
				buyers.requestSucessful &&
				suppliers.requestSucessful
			) {
				//set to context
				setUsersNumbers({
					...usersNumbers,
					drivers: drivers.drivers,
					buyers: buyers.buyers,
					suppliers: suppliers.suppliers,
				});
			}
		};

		if (mount) {
			fetchAllNum();
		}

		return () => {
			mount = false;
		};
	}, []);

	return (
		<div className='mx-auto space-y-10'>
			<div className='flex items-center justify-evenly gap-4 bg-primary-700 py-7 rounded-xl max-w-[95%] sm:w-auto mx-auto'>
				<InfoStats
					title='buyers'
					number={usersNumbers.buyers && usersNumbers.buyers}
					rate={null}
				/>
				<InfoStats
					title='sellers'
					number={usersNumbers.suppliers && usersNumbers.suppliers}
					rate={null}
				/>
				<InfoStats
					rate={null}
					title='truck drivers'
					number={usersNumbers.drivers && usersNumbers.drivers}
				/>
			</div>
			{/* Chartjs */}
			<LineChart />
			{/* Recent activities */}
		</div>
	);
};
export default Dashboard;
