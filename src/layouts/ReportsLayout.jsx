import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
import TagHolder from '../components/TagHolder';
import { useEffect } from 'react';
import {
	getTotalFlaggedProductNumbers,
	getTotalFlaggedUserNumbers,
} from '../lib/apiEndPoints';
import { useState } from 'react';

const ReportsLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [flagCount, setFlagCount] = useState();

	useEffect(() => {
		let mounted = true;

		if (location.pathname === '/reports') {
			mounted = true;
		} else {
			mounted = false;
		}
		if (location.pathname === '/reports/products') {
			const fetch = async () => {
				const flagCount = await getTotalFlaggedProductNumbers();
				if (flagCount.requestSucessful) {
					setFlagCount(flagCount.flags);
				}
			};
			fetch();
		} else if (location.pathname === '/reports/users') {
			const fetch = async () => {
				const flagCount = await getTotalFlaggedUserNumbers();
				if (flagCount.requestSucessful) {
					setFlagCount(flagCount.flags);
				}
			};
			fetch();
		}

		if (mounted) {
			navigate('/reports/products');
		}
		return () => {
			mounted = false;
		};
	}, [location.pathname, navigate]);

	return (
		<div>
			<header className='flex justify-start items-center gap-5'>
				<SquareBox
					classnames='border-red-text text-red-text'
					number={flagCount && flagCount < 1 ? '0' : flagCount}
				/>
				<TagHolder />
			</header>

			<main className='mt-2'>
				<Outlet />
			</main>
		</div>
	);
};
export default ReportsLayout;
