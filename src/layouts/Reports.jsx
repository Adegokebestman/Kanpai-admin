import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SquareBox from '../components/SquareBox';
import TagHolder from '../components/TagHolder';
import { useEffect } from 'react';

const Reports = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let mounted = true;

		if (location.pathname === '/reports') {
			mounted = true;
		} else {
			mounted = false;
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
				<SquareBox />
				<TagHolder />
			</header>

			<main className='mt-2'>
				<Outlet />
			</main>
		</div>
	);
};
export default Reports;
