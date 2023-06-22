import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Root() {
	const [showSidebar, setShowSidebar] = useState(true);
	return (
		<>
			<div className='relative grid grid-cols-12 min-h-screen'>
				<div
					className={`${
						showSidebar
							? 'absolute top-0 left-0 bg-white z-10'
							: 'hidden col-span-2 '
					} lg:block`}
				>
					<Sidebar />
				</div>

				<main
					id='content'
					className={`col-span-12 lg:col-span-10 flex flex-col gap-5 justify-normal ${
						showSidebar ? 'z-0' : ''
					}`}
				>
					<Header setShowSidebar={setShowSidebar} />
					<Outlet />
				</main>
			</div>
		</>
	);
}
