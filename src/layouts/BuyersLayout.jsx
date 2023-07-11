import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
// import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { buyersTags } from '../lib/utils';
import { useContext, useEffect, useState } from 'react';
import OtherContext from '../context/OtherContext';
import { getActiveBuyers, getInactiveBuyers } from '../lib/apiEndPoints';

const BuyersLayout = () => {
	const { id } = useParams();
	const { usersNumbers } = useContext(OtherContext);
	const [data, setData] = useState({
		activeUsers: '',
		inactiveBuyers: '',
	});

	useEffect(() => {
		const updateData = (allData) => {
			const [data1, data2] = allData;
			setData({
				...data,
				activeUsers: data1.activeBuyers.length,
				inactiveBuyers: data2.suspendedUsers.length,
			});
		};
		async function fetch() {
			const data1 = await getActiveBuyers();
			const data2 = await getInactiveBuyers();
			updateData([data1, data2]);
		}
		fetch();
	}, []);

	return (
		<div>
			<div className='flex items-center justify-between'>
				<BackButtonNavigation />
				{/* {!id && <CreateNewButton role='Users' />} */}
				{id && <UsersTagHolders tags={buyersTags} />}
			</div>
			{!id && (
				<header className='flex justify-start items-center gap-5 mt-3 md:mt-0'>
					<SquareBox
						number={usersNumbers.buyers}
						tag='Buyers'
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
								number={data.inactiveBuyers}
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
export default BuyersLayout;
