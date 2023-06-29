import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { driversTags } from '../lib/utils';

const TruckDriversLayout = () => {
	const { id } = useParams();

	return (
		<div>
			<div className='flex items-center justify-between'>
				<BackButtonNavigation />
				{!id && <CreateNewButton role='Driver' />}
				{id && <UsersTagHolders tags={driversTags} />}
			</div>
			{!id && (
				<header className='flex justify-start items-center gap-5 mt-3 md:mt-0'>
					<SquareBox
						number={6000}
						tag='Drivers'
						classnames='border border-primary-700'
					/>
					<div className='flex flex-col gap-2'>
						<Active_InactiveUsers
							key={Math.random()}
							active={true}
						/>
						<Active_InactiveUsers key={Math.random()} />
					</div>
				</header>
			)}

			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default TruckDriversLayout;
