import DashboardIcon from '../components/icons/category.svg?component';
import Analytics from '../components/icons/analytics.svg?component';
import LiveChat from '../components/icons/liveChat.svg?component';
import Payments from '../components/icons/payments.svg?component';
import Report from '../components/icons/reports.svg?component';
import Logout from '../components/icons/logout.svg?component';

export const sideBarContents = [
	{
		title: 'Reports',
		link: 'reports',
		icon: <Report stroke='black' fill='black' />,
	},
	{
		title: 'Live Chat',
		link: 'live-chat',
		icon: <LiveChat stroke='black' fill='black' />,
	},
	{
		title: 'Payments',
		link: 'payments',
		icon: <Payments stroke='black' fill='black' />,
	},
	{
		title: 'Analytics',
		link: 'analytics',
		icon: <Analytics strokeWidth={'1.5'} stroke='black' />,
	},
];

export const logout = {
	title: 'Logout',
	link: '/auth',
	icon: <Logout />,
};

export const dashboard = {
	title: 'Dashboard',
	link: '/',
	icon: <DashboardIcon stroke='black' strokeWidth={'1.5'} />,
};

export const usersLinks = [
	{
		title: 'Buyers',
		link: 'users/buyers',
	},
	{
		title: 'Sellers',
		link: 'users/sellers',
	},
	{
		title: 'Truck Drivers',
		link: 'users/truck-drivers',
	},
];
