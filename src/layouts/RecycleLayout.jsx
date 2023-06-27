import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const RecycleLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let mounted = true;

		if (location.pathname === '/recycle') {
			mounted = true;
		} else {
			mounted = false;
		}

		if (mounted) {
			navigate('/recycle/products');
		}
		return () => {
			mounted = false;
		};
	}, [location.pathname, navigate]);
	return (
		<div>
			<header>This is the header</header>
			<Outlet />
		</div>
	);
};
export default RecycleLayout;
