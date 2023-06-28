import { NavLink } from 'react-router-dom';
import UserSideBar from './UserSideBar';

import {
	sideBarContents,
	logout,
	dashboard,
	usersLinks,
	recycleLinks,
} from '../lib/sidebarContents';
import KanpaiLogo from '../components/icons/logo.svg?component';
import { HiOutlineUsers as UsersIcon } from 'react-icons/hi';
import { BsRecycle } from 'react-icons/bs';

const Sidebar = () => {
	// const [showChildren, setShowChildren] = useState(false);

	// function addActive(e) {
	// 	e.target.firstChild.firstChild.attributes.stroke.value;
	// }

	return (
		<section className='shadow-lg h-screen min-h-screen bg-white space-y-16 py-5 sm:py-8 overflow-y-auto lg:w-[90%]'>
			<KanpaiLogo className='mx-auto' />

			<ul className='flex flex-col justify-start gap-3 px-3 sm:gap-6 sm:px-4'>
				<NavLink
					to={dashboard.link}
					className={({ isActive }) =>
						isActive
							? 'bg-primary-700 rounded-xl px-1 transition-[padding] ease-in text-white'
							: ''
					}
				>
					<li className='flex items-center gap-3 text-sm sm:text-base py-2 px-3 sm:px-6'>
						<span className='text-lg sm:text-2xl text-inherit font-extrabold'>
							{dashboard.icon}
						</span>
						{dashboard.title}
					</li>
				</NavLink>

				<UserSideBar
					data={usersLinks}
					icon={<UsersIcon />}
					title={'Users'}
				/>

				{sideBarContents.map((content) => (
					<NavLink
						to={content.link}
						key={content.link}
						className={({ isActive }) =>
							isActive
								? 'bg-primary-700 rounded-xl px-1 transition-[padding] ease-linear text-white'
								: ''
						}
					>
						<li className='flex items-center gap-3 text-sm sm:text-base py-2 px-3 sm:px-6'>
							<span className='text-lg sm:text-2xl text-inherit font-extrabold'>
								{content.icon}
							</span>
							{content.title}
						</li>
					</NavLink>
				))}

				<UserSideBar
					data={recycleLinks}
					icon={<BsRecycle />}
					title={'Recycle Bin'}
				/>
				<NavLink to={logout.link}>
					<li className='flex items-center gap-3 text-sm sm:text-base py-2 px-3 sm:px-6 text-[#A65959] font-bold mt-5 sm:mt-10'>
						<span className='text-lg sm:text-2xl text-inherit font-extrabold'>
							{logout.icon}
						</span>
						{logout.title}
					</li>
				</NavLink>
			</ul>
		</section>
	);
};
export default Sidebar;
