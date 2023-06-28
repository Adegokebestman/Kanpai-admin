import { Outlet } from 'react-router-dom';
import Box from '../components/Box';

const AuthenticationLayout = () => {
	return (
		<main className='container mx-auto max-h-screen h-screen flex items-center justify-evenly'>
			<main className='px-4'>
				<Outlet />
			</main>
			<Box />
		</main>
	);
};
export default AuthenticationLayout;
