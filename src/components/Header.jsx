/* eslint-disable react/prop-types */
import { useContext } from 'react';
import NotificationIcon from './icons/notificationIcon.svg?component';
import { AiOutlineMenu } from 'react-icons/ai';
import AuthContext from '../context/AuthContext';
const Header = ({ setShowSidebar }) => {
	const { userData } = useContext(AuthContext);

	return (
		<header className='h-[100px] py-6'>
			<div className='flex items-center justify-between px-5 sm:px-10 lg:px-14'>
				<div>
					<h2 className='font-[500] text-lg sm:text-2xl capitalize'>
						{userData && userData.name}
					</h2>
					<p className='text-sm lg:text-base hidden text-gray-400 lg:block'>
						Welcome to your dashboard
					</p>
				</div>
				<div className='flex items-center justify-between gap-4 lg:gap-10'>
					<aside className='flex items-center justify-evenly '>
						<div className='h-10 w-10 bg-green-bg rounded-full border border-blue overflow-hidden'>
							<img
								src={userData && userData.userImage}
								alt={userData && userData.name}
								className='w-full h-full'
							/>
						</div>
						<div className='flex-col pl-3 items-start justify-between hidden sm:flex'>
							<h4 className='font-semibold text-gray-500 capitalize leading-4 text-sm sm:text-sm'>
								{userData && userData.name}
							</h4>
							<p className='text-gray-300 capitalize font-medium text-sm lg:text-sm'>
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
						<AiOutlineMenu />
					</span>
				</div>
			</div>
			<hr className='h-px my-3 bg-gray-200 border-1 dark:bg-gray-700'></hr>
		</header>
	);
};
export default Header;
