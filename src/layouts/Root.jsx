import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function Root() {
	return (
		<>
			<div className='grid grid-cols-12 min-h-screen'>
				<div className='hidden lg:block col-span-3'>
					<Sidebar />
				</div>

				<main
					id='content'
					className='col-span-12 lg:col-span-9 flex flex-col gap-5 justify-normal'
				>
					<Header />
					<Outlet />
				</main>
			</div>
		</>
	);
}
