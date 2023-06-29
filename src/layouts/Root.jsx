import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';

export default function RootLayout() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [screenSize, setScreenSize] = useState();
	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 1023) {
			setShowSidebar(true);
		} else {
			setShowSidebar(false);
		}
	}, [screenSize]);

	return (
		<>
			<div className='relative grid grid-cols-12 min-h-screen'>
				<div
					className={`${
						showSidebar
							? 'fixed top-0 left-0 bg-white z-10 bottom-0'
							: 'hidden'
					} lg:block col-span-3`}
				>
					<Sidebar />
				</div>

				<main
					id='content'
					className={`col-span-12 lg:col-span-9 flex flex-col md:gap-5 justify-normal w-full overflow-auto h-screen ${
						showSidebar ? 'z-0' : ''
					}`}
				>
					<Header setShowSidebar={setShowSidebar} />
					<section className='p-3 md:py-4 md:pr-4 '>
						<Outlet />
					</section>
				</main>
			</div>
		</>
	);
}
