import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import InputFilter from '../components/InputFilter';
import SquareBox from '../components/SquareBox';
import { getSuspendedProducts, getSuspendedUsers } from '../lib/apiEndPoints';

const RecycleLayout = () => {
	const [displayVal, setDisplayVal] = useState(0);
	const [tag, setTag] = useState('')

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/recycle') {
			navigate('/recycle/products');
		}
	}, [location.pathname, navigate]);

	useEffect(() => {
		if (location.pathname === '/recycle/products') {
			setTag('Products Suspended')
			const fetch = async () => {
				const data = await getSuspendedProducts();
				if (data.requestSucessful) {
					setDisplayVal(data.suspendedUsers.length);
				}
			};
			fetch();
		} else if (location.pathname === '/recycle/users') {
			setTag('Users Suspended')
			const fetch = async () => {
				const data = await getSuspendedUsers();
				if (data.requestSucessful) {
					setDisplayVal(data.suspendedUsers.length);
				}
			};
			fetch();
		}
	}, [location.pathname]);

	return (
		<div>
			<header className='flex flex-col-reverse gap-3 sm:flex-row items-center w-full justify-between'>
				<InputFilter filter={false} />
				<SquareBox
					number={displayVal}
					tag={tag}
					classnames='text-primary-700 border border-primary-700'
				/>
			</header>
			<main className='px-2 sm:px-4'>
				<Outlet />
			</main>
		</div>
	);
};
export default RecycleLayout;
