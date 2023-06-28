import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import InputFilter from '../components/InputFilter';
import SquareBox from '../components/SquareBox';

const RecycleLayout = () => {
	const [totalSuspendedProducts, setTotalSuspendedProducts] = useState(1000);
	const [totalSuspendedUsers, setTotalSuspendedUsers] = useState(2000);
	const [displayVal, setDisplayVal] = useState();

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let mounted = true;

		if (location.pathname === '/recycle') {
			mounted = true;
			setDisplayVal(totalSuspendedProducts);
		} else {
			mounted = false;
		}

		if (mounted) {
			navigate('/recycle/products');
		}
		return () => {
			mounted = false;
		};
	}, [location.pathname, navigate, totalSuspendedProducts]);

	useEffect(() => {
		if (location.pathname === '/recycle/products') {
			setDisplayVal(totalSuspendedProducts);
		} else {
			setDisplayVal(totalSuspendedUsers);
		}
	}, [location.pathname, totalSuspendedProducts, totalSuspendedUsers]);

	return (
		<div>
			<header className='flex flex-col-reverse gap-3 sm:flex-row items-center w-full justify-between'>
				<InputFilter />
				<SquareBox
					number={displayVal}
					tag='Suspended'
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
