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
import App from './App';

import Root from './layouts/Root.jsx';
import Authentication from './layouts/Authentication';

import Login from './pages/Login';
import Otp_Verification from './pages/Otp_Verification';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path='/' element={<Root />}>
				<Route index element={<App />} />
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
