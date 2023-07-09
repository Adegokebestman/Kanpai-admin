import RootLayout from './layouts/Root.jsx';
import UsersReportLayout from './layouts/UsersReportLayout';
import ReportsLayout from './layouts/ReportsLayout';
import RecycleLayout from './layouts/RecycleLayout';
import BuyersLayout from './layouts/BuyersLayout';
import SellersLayout from './layouts/SellersLayout';
import TruckDriversLayout from './layouts/TruckDriversLayout';

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
import { Route } from 'react-router-dom';
import Auth from './components/Auth.jsx';

function App() {
	const token = sessionStorage.getItem('token');
	if (!token) {
		return (window.location.href = '/auth');
	}

	return (
		<Route
			path='/'
			element={
				<Auth>
					<RootLayout />
				</Auth>
			}
		>
			<Route
				index
				element={
					<Auth>
						<Dashboard />
					</Auth>
				}
			/>

			<Route
				path='users/buyers'
				element={
					<Auth>
						<BuyersLayout />
					</Auth>
				}
			>
				<Route
					index
					element={
						<Auth>
							<Buyers />
						</Auth>
					}
				/>
				<Route
					path=':id'
					element={
						<Auth>
							<BuyerDetails />
						</Auth>
					}
				/>
				<Route
					path='activities/:id'
					element={
						<Auth>
							<BuyerActivities />
						</Auth>
					}
				/>
			</Route>

			<Route
				path='users/sellers'
				element={
					<Auth>
						<SellersLayout />
					</Auth>
				}
			>
				<Route
					index
					element={
						<Auth>
							<Sellers />
						</Auth>
					}
				/>
				<Route
					path=':id'
					element={
						<Auth>
							<SellerDetails />
						</Auth>
					}
				/>
				<Route
					path='activities/:id'
					element={
						<Auth>
							<SellerActivities />
						</Auth>
					}
				/>
				<Route
					path='inventory/:id'
					element={
						<Auth>
							<SellerInventory />
						</Auth>
					}
				/>
			</Route>

			<Route
				path='users/truck-drivers'
				element={
					<Auth>
						<TruckDriversLayout />
					</Auth>
				}
			>
				<Route
					index
					element={
						<Auth>
							<TruckDriver />
						</Auth>
					}
				/>
				<Route
					path=':id'
					element={
						<Auth>
							<DriverDetails />
						</Auth>
					}
				/>
				<Route
					path='activities/:id'
					element={
						<Auth>
							<DriverActivities />
						</Auth>
					}
				/>
			</Route>

			<Route
				path='reports'
				element={
					<Auth>
						<ReportsLayout />
					</Auth>
				}
			>
				<Route
					path='products'
					element={
						<Auth>
							<ProductReports />
						</Auth>
					}
				/>
				<Route
					path='users'
					element={
						<Auth>
							<UsersReports />
						</Auth>
					}
				/>
			</Route>

			<Route
				path='reports/products/:id'
				element={
					<Auth>
						<ProductReportDetail />
					</Auth>
				}
			/>
			<Route
				path='reports/users/:id'
				element={
					<Auth>
						<UsersReportLayout />
					</Auth>
				}
			>
				<Route
					index
					element={
						<Auth>
							<UserReportDetail />
						</Auth>
					}
				/>
				<Route
					path={':userId'}
					element={
						<Auth>
							<UserReportUser />
						</Auth>
					}
				/>
			</Route>

			<Route
				path='live-chat'
				element={
					<Auth>
						<LiveChat />
					</Auth>
				}
			/>
			<Route
				path='payments'
				element={
					<Auth>
						<Payments />
					</Auth>
				}
			/>
			<Route
				path='payments/:id'
				element={
					<Auth>
						<PaymentDetails />
					</Auth>
				}
			/>
			<Route
				path='analytics'
				element={
					<Auth>
						<Analytics />
					</Auth>
				}
			/>

			<Route
				path='recycle'
				element={
					<Auth>
						<RecycleLayout />
					</Auth>
				}
			>
				<Route
					path='users'
					element={
						<Auth>
							<RecycleUsers />
						</Auth>
					}
				/>
				<Route
					path='products'
					element={
						<Auth>
							<RecycleProducts />
						</Auth>
					}
				/>
			</Route>
		</Route>
	);
}

export default App;
