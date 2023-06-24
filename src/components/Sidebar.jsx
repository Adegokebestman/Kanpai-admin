import { sideBarContents, logout, dashboard } from '../lib/sidebarContents';
import KanpaiLogo from '../components/icons/logo.svg?component';
import { NavLink } from 'react-router-dom';
import UserSideBar from './UserSideBar';

const Sidebar = () => {
	// const [showChildren, setShowChildren] = useState(false);

	// function addActive(e) {
	// 	e.target.firstChild.firstChild.attributes.stroke.value;
	// }

	return (
		<section className='shadow-lg min-h-screen fixed bg-white space-y-16 py-8'>
			<KanpaiLogo className='mx-auto' />

			<ul className='flex flex-col justify-start gap-6 px-4'>
				<NavLink
					to={dashboard.link}
					className={({ isActive }) =>
						isActive
							? 'bg-primary-700 rounded-xl px-1 transition-[padding] ease-in text-white'
							: ''
					}
				>
					<li className='flex items-center gap-3 text-sm sm:text-base py-2 px-6'>
						<span>{dashboard.icon}</span>
						{dashboard.title}
					</li>
				</NavLink>

				<UserSideBar />

				{sideBarContents.map((content) => (
					<NavLink
						to={content.link === '/users' ? '##' : content.link}
						key={content.link}
						className={({ isActive }) =>
							isActive
								? 'bg-primary-700 rounded-xl px-1 transition-[padding] ease-linear text-white'
								: ''
						}
					>
						<li className='flex items-center gap-3 text-sm sm:text-base py-2 px-6'>
							<span>{content.icon}</span>
							{content.title}
						</li>
					</NavLink>
				))}
			</ul>

			<NavLink to={logout.link}>
				<p className='flex items-center gap-3 text-sm sm:text-base py-2 px-6 mt-16 text-[#A65959] font-bold'>
					<span>{logout.icon}</span>
					<span>{logout.title}</span>
				</p>
			</NavLink>
		</section>
	);
};
export default Sidebar;
