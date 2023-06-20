import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Root() {
	return (
		<>
			<Header />
			<div className='grid grid-cols-12'>
				<div className='col-span-3 bg-blue drop-shadow-card'>
					<Sidebar />
				</div>

				<main id='content' className='col-span-9 bg-gray-400'>
					<Outlet />
				</main>
			</div>
		</>
	);
}
