import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import Modal from 'react-modal';

import './index.css';
import './customStyles.css';
import ErrorPage from './error-page';

import RootLayout from './layouts/Root.jsx';
import AuthenticationLayout from './layouts/Authentication';
import ReportsLayout from './layouts/Reports';

import Login from './pages/Login';
import Otp_Verification from './pages/Otp_Verification';
import Dashboard from './pages/Dashboard';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import TruckDriver from './pages/TruckDriver';
import UsersReports from './pages/UsersReports';
import ProductReports from './pages/ProductReports';
import LiveChat from './pages/LiveChat';
import Payments from './pages/Payments';
import Analytics from './pages/Analytics';
import ProductReportDetail from './pages/ProductReportDetail';
import UserReportDetail from './pages/UserReportDetail';
import UserReportUser from './pages/UserReportUser';
import UsersReportLayout from './layouts/UsersReportLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='users/buyers' element={<Buyers />} />
				<Route path='users/sellers' element={<Sellers />} />
				<Route path='users/truck-drivers' element={<TruckDriver />} />

				<Route path='reports' element={<ReportsLayout />}>
					<Route path='products' element={<ProductReports />} />
					<Route path='users' element={<UsersReports />} />
				</Route>

				{/* These routes will have loaders i.e a function that runs before the page loads. To load the data using the params and make it available on render instead of useEffect */}
				<Route
					path='reports/products/:id'
					element={<ProductReportDetail />}
				/>
				<Route path='reports/users/:id' element={<UsersReportLayout />}>
					<Route index element={<UserReportDetail />} />
					<Route path={':userId'} element={<UserReportUser />} />
				</Route>
				{/* End of Loaders */}

				<Route path='live-chat' element={<LiveChat />} />
				<Route path='payments' element={<Payments />} />
				<Route path='analytics' element={<Analytics />} />
			</Route>
			<Route path='auth' element={<AuthenticationLayout />}>
				<Route index element={<Login />} />
				<Route path='otp_verification' element={<Otp_Verification />} />
			</Route>
		</Route>
	)
);

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
