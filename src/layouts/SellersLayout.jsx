import { Outlet, useParams } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
import CreateNewButton from '../components/CreateNewButton';
import UsersTagHolders from '../components/UsersTagHolders';
import BackButtonNavigation from '../components/BackButtonNavigation';
import Active_InactiveUsers from '../components/Active_InactiveUsers';
import { sellersTags } from '../lib/utils';
import GeneralUsersBox from '../components/GeneralUsersBox';

const SellersLayout = () => {
	const { id } = useParams();

	return (
		<div>
			<header className='w-full flex flex-col gap-3'>
				<div className='flex items-center justify-between'>
					<BackButtonNavigation />
					{!id && <CreateNewButton role='Seller' />}

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
						number={1200}
						tag='Sellers'
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
export default SellersLayout;
