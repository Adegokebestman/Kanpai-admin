import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
// import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { driversTags } from '../lib/utils';
import { useContext, useEffect, useState } from 'react';
import OtherContext from '../context/OtherContext';
import { getActiveDrivers, getInactiveDrivers } from '../lib/apiEndPoints';

const TruckDriversLayout = () => {
	const { id } = useParams();
	const { usersNumbers } = useContext(OtherContext);
	const [data, setData] = useState({
		activeUsers: '',
		inactiveDrivers: '',
	});

	useEffect(() => {
		const updateData = (allData) => {
			const [data1, data2] = allData;
			setData({
				...data,
				activeUsers: data1.activeDrivers.length,
				inactiveDrivers: data2.suspendedUsers.length,
			});
		};
		async function fetch() {
			const data1 = await getActiveDrivers();
			const data2 = await getInactiveDrivers();
			updateData([data1, data2]);
		}
		fetch();
	}, []);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<BackButtonNavigation />
				{/* {!id && <CreateNewButton role='Driver' />} */}
				{id && <UsersTagHolders tags={driversTags} />}
			</div>
			{!id && (
				<header className='flex justify-start items-center gap-5 mt-3 md:mt-0'>
					<SquareBox
						number={usersNumbers.drivers}
						tag='Drivers'
						classnames='border border-primary-700'
					/>
					{data && (
						<div className='flex flex-col gap-2'>
							<Active_InactiveUsers
								key={Math.random()}
								active={true}
								number={data.activeUsers}
							/>
							<Active_InactiveUsers
								key={Math.random()}
								number={data.inactiveDrivers}
							/>
						</div>
					)}
				</header>
			)}

			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default TruckDriversLayout;
