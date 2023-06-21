import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './layouts/Root.jsx';
import ErrorPage from './error-page';
import App from './App';
import Authentication from './layouts/Authentication';
import Login from './pages/Login';
import Register from './pages/Register';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<ErrorPage />}>
			<Route path='/' element={<Root />}>
				<Route index element={<App />} />
			</Route>
			<Route path='auth' element={<Authentication />}>
				<Route path='login' element={<Login />} />
				<Route path='otp_verification' element={<Register />} />
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
