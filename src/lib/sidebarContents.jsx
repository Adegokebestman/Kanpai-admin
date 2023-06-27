// import DashboardIcon from '../components/icons/category.svg?component';
// import Analytics from '../components/icons/analytics.svg?component';
// import LiveChat from '../components/icons/liveChat.svg?component';
// import Payments from '../components/icons/payments.svg?component';
// import Report from '../components/icons/reports.svg?component';
// import Logout from '../components/icons/logout.svg?component';

// REACT ICONS

import { RxDashboard } from 'react-icons/rx';
import { PiWarningOctagon } from 'react-icons/pi';
import { PiChatDotsLight } from 'react-icons/pi';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { TfiBarChart } from 'react-icons/tfi';

export const dashboard = {
	title: 'Dashboard',
	link: '/',
	icon: <RxDashboard />,
};

export const sideBarContents = [
	{
		title: 'Reports',
		link: 'reports',
		icon: <PiWarningOctagon />,
	},
	{
		title: 'Live Chat',
		link: 'live-chat',
		icon: <PiChatDotsLight />,
	},
	{
		title: 'Payments',
		link: 'payments',
		icon: <RiExchangeDollarLine />,
	},
	{
		title: 'Analytics',
		link: 'analytics',
		icon: <TfiBarChart />,
	},
];

export const logout = {
	title: 'Logout',
	link: '/auth',
	icon: <RiLogoutCircleRLine />,
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
export const recycleLinks = [
	{
		title: 'Unsuspend Users',
		link: 'recycle/users',
	},
	{
		title: 'Unsuspend Products',
		link: 'recycle/products',
	},
];
