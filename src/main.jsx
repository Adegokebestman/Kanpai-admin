import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';

import Root from './layouts/Root.jsx';
import Authentication from './layouts/Authentication';

import Login from './pages/Login';
import Otp_Verification from './pages/Otp_Verification';
import Dashboard from './pages/Dashboard';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import TruckDriver from './pages/TruckDriver';
import Reports from './pages/Reports';
import LiveChat from './pages/LiveChat';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path='/' element={<Root />}>
				<Route index element={<Dashboard />} />
				<Route path='users/buyers' element={<Buyers />} />
				<Route path='users/sellers' element={<Sellers />} />
				<Route path='users/truck-drivers' element={<TruckDriver />} />
				<Route path='reports' element={<Reports />} />
				<Route path='live-chat' element={<LiveChat />} />
				<Route path='payments' element={<Payments />} />
				<Route path='analytics' element={<Analytics />} />
			</Route>
			<Route path='auth' element={<Authentication />}>
				<Route index element={<Login />} />
				<Route path='otp_verification' element={<Otp_Verification />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
