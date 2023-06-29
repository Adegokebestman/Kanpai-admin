/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ArrowDown from './icons/arrowDropDown.svg?component';

const UserSideBar = ({ title, data, icon }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<li
				className={`flex items-center gap-3 text-sm sm:text-base py-2 px-6 rounded-xl cursor-pointer ${
					open ? 'bg-primary-700 text-white' : ''
				}`}
				onClick={() => setOpen(!open)}
			>
				<span className='text-lg sm:text-2xl text-inherit font-extrabold'>
					{icon}
				</span>
				{title}
				<ArrowDown />
			</li>

			<ul
				className={`${
					open
						? 'flex flex-col transition-[display] ease-linear bg-gray-100 sm:-mt-4 rounded-xl overflow-hidden'
						: 'hidden'
				}`}
			>
				{data.map((content) => (
					<NavLink
						key={content.link}
						to={content.link}
						className={({ isActive }) =>
							isActive ? 'bg-gray-300' : ''
						}
					>
						<li className='hover:bg-gray-300 p-2 w-full hover:pl-3 transition-all ease-linear'>
							{content.title}
						</li>
					</NavLink>
				))}
			</ul>
		</>
	);
};
export default UserSideBar;
