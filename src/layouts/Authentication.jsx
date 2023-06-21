import { Outlet } from 'react-router-dom';
import Box from '../components/Box';

const Authentication = () => {
	return (
		<main className='container mx-auto max-h-screen h-screen flex items-center justify-evenly'>
			<main>
				<Outlet />
			</main>
			<Box />
		</main>
	);
};
export default Authentication;
