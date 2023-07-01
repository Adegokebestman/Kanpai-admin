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
import UsersReportLayout from './layouts/UsersReportLayout';
import ReportsLayout from './layouts/ReportsLayout';
import RecycleLayout from './layouts/RecycleLayout';
import BuyersLayout from './layouts/BuyersLayout';
import SellersLayout from './layouts/SellersLayout';
import TruckDriversLayout from './layouts/TruckDriversLayout';

import Login from './pages/Login';
import Otp_Verification from './pages/Otp_Verification';
import Dashboard from './pages/Dashboard';
import LiveChat from './pages/LiveChat';
import Buyers from './pages/Buyers';
import Sellers from './pages/Sellers';
import TruckDriver from './pages/TruckDriver';
import UsersReports from './pages/UsersReports';
import ProductReports from './pages/ProductReports';
import Payments from './pages/Payments';
import PaymentDetails from './pages/PaymentDetails';
import Analytics from './pages/Analytics';
import ProductReportDetail from './pages/ProductReportDetail';
import UserReportDetail from './pages/UserReportDetail';
import UserReportUser from './pages/UserReportUser';
import RecycleUsers from './pages/RecycleUsers';
import RecycleProducts from './pages/RecycleProducts';
import BuyerDetails from './pages/BuyerDetails';
import BuyerActivities from './pages/BuyerActivities';
import SellerDetails from './pages/SellerDetails';
import SellerActivities from './pages/SellerActivities';
import SellerInventory from './pages/SellerInventory';
import DriverDetails from './pages/DriverDetails';
import DriverActivities from './pages/DriverActivities';
import { ChatProvider } from './context/ChatContext';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path='/' element={<RootLayout />}>
				<Route index element={<Dashboard />} />

				<Route path='users/buyers' element={<BuyersLayout />}>
					<Route index element={<Buyers />} />
					<Route path=':id' element={<BuyerDetails />} />
					<Route
						path='activities/:id'
						element={<BuyerActivities />}
					/>
				</Route>

				<Route path='users/sellers' element={<SellersLayout />}>
					<Route index element={<Sellers />} />
					<Route path=':id' element={<SellerDetails />} />
					<Route
						path='activities/:id'
						element={<SellerActivities />}
					/>
					<Route path='inventory/:id' element={<SellerInventory />} />
				</Route>

				<Route
					path='users/truck-drivers'
					element={<TruckDriversLayout />}
				>
					<Route index element={<TruckDriver />} />
					<Route path=':id' element={<DriverDetails />} />
					<Route
						path='activities/:id'
						element={<DriverActivities />}
					/>
				</Route>

				<Route path='reports' element={<ReportsLayout />}>
					<Route path='products' element={<ProductReports />} />
					<Route path='users' element={<UsersReports />} />
				</Route>

				<Route
					path='reports/products/:id'
					element={<ProductReportDetail />}
				/>
				<Route path='reports/users/:id' element={<UsersReportLayout />}>
					<Route index element={<UserReportDetail />} />
					<Route path={':userId'} element={<UserReportUser />} />
				</Route>

				<Route path='live-chat' element={<LiveChat />} />
				<Route path='payments' element={<Payments />} />
				<Route path='payments/:id' element={<PaymentDetails />} />
				<Route path='analytics' element={<Analytics />} />

				<Route path='recycle' element={<RecycleLayout />}>
					<Route path='users' element={<RecycleUsers />} />
					<Route path='products' element={<RecycleProducts />} />
				</Route>
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
		<ChatProvider>
			<RouterProvider router={router} />
		</ChatProvider>
	</React.StrictMode>
);
