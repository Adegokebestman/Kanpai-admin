/* eslint-disable react/prop-types */
import NotificationIcon from './icons/notificationIcon.svg?component';

const Header = ({ setShowSidebar }) => {
	return (
		<header className='min-h-[80px] max-h[120px] shadow-md py-6'>
			<div className='flex items-center justify-between px-5 sm:px-10 lg:px-14'>
				<div>
					<h2 className='font-bold text-lg sm:text-xl capitalize'>
						Hello Admin
					</h2>
					<p className='text-sm lg:text-base hidden lg:block'>
						Welcome to your dashboard
					</p>
				</div>
				<div className='flex items-center justify-between gap-4 lg:gap-10'>
					<aside className='flex items-center justify-evenly '>
						<div className='h-10 w-10 bg-green-bg rounded-full border border-blue overflow-hidden'>
							<img
								src=''
								alt='profile image of user'
								className='w-full h-full'
							/>
						</div>
						<div className='flex-col items-start justify-between hidden sm:flex'>
							<h4 className='font-semibold capitalize text-sm sm:text-lg'>
								User Name
							</h4>
							<p className='text-gray-300 capitalize text-sm lg:text-base'>
								Admin
							</p>
						</div>
					</aside>
					<span className='rounded-full bg-gray-100 p-2 flex items-center justify-center cursor-pointer'>
						<NotificationIcon />
					</span>
					<span
						className='lg:hidden rounded-full bg-gray-100 p-2 flex items-center justify-center cursor-pointer'
						onClick={() => setShowSidebar((prev) => !prev)}
					>
						B
					</span>
				</div>
			</div>
		</header>
	);
};
export default Header;
