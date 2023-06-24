import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { usersLinks } from '../lib/sidebarContents';

import Users from './icons/usersIcon.svg?component';
import ArrowDown from './icons/arrowDropDown.svg?component';

const UserSideBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<li
				className={`flex items-center gap-3 text-sm sm:text-base py-2 px-6 rounded-xl cursor-pointer ${
					open ? 'bg-primary-700' : ''
				}`}
				onClick={() => setOpen(!open)}
			>
				<Users stroke='black' strokeWidth={'1.5'} />
				Users
				<ArrowDown />
			</li>

			<ul
				className={`${
					open
						? 'flex flex-col transition-[display] ease-linear bg-gray-100 -mt-4 rounded-xl overflow-hidden'
						: 'hidden'
				}`}
			>
				{usersLinks.map((user) => (
					<NavLink
						key={user.link}
						to={user.link}
						className={({ isActive }) =>
							isActive ? 'bg-gray-300' : ''
						}
					>
						<li className='hover:bg-gray-300 p-2 w-full hover:pl-3 transition-all ease-linear'>
							{user.title}
						</li>
					</NavLink>
				))}
			</ul>
		</>
	);
};
export default UserSideBar;
