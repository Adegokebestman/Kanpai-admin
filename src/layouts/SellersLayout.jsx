import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
// import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { sellersTags } from '../lib/utils';
import GeneralUsersBox from '../components/GeneralUsersBox';
import { getActiveSuppliers, getInactiveSuppliers } from '../lib/apiEndPoints';
import { useContext, useEffect, useState } from 'react';
import OtherContext from '../context/OtherContext';

const SellersLayout = () => {
	const { id } = useParams();
	const { usersNumbers } = useContext(OtherContext);

	const [data, setData] = useState({
		activeUsers: '',
		inactiveSuppliers: '',
	});

	useEffect(() => {
		const updateData = (allData) => {
			const [data1, data2] = allData;
			setData({
				...data,
				activeUsers: data1.activeSuppliers.length,
				inactiveSuppliers: data2.suspendedUsers.length,
			});
		};
		async function fetch() {
			const data1 = await getActiveSuppliers();
			const data2 = await getInactiveSuppliers();
			updateData([data1, data2]);
		}
		fetch();
	}, []);

	return (
		<div>
			<header className='w-full flex flex-col gap-3'>
				<div className='flex items-center justify-between'>
					<BackButtonNavigation />
					{/* {!id && <CreateNewButton role='Seller' />} */}

					{id && (
						<div className='hidden sm:block'>
							<UsersTagHolders tags={sellersTags} />
						</div>
					)}

					{id && <GeneralUsersBox />}
				</div>
				<div className='sm:hidden mx-auto'>
					{id && <UsersTagHolders tags={sellersTags} />}
				</div>
			</header>

			{!id && (
				<header className='flex justify-start items-center gap-5 mt-3 md:mt-0'>
					<SquareBox
						number={usersNumbers.suppliers}
						tag='Sellers'
						classnames='border border-primary-700'
					/>
					<div className='flex flex-col gap-2'>
						<Active_InactiveUsers
							key={Math.random()}
							active={true}
							number={data.activeUsers}
						/>
						<Active_InactiveUsers
							key={Math.random()}
							number={data.inactiveSuppliers}
						/>
					</div>
				</header>
			)}

			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default SellersLayout;
