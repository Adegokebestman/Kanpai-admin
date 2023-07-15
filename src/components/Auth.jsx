/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { socket } from '../lib/apiEndPoints';
import { useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';

const Auth = ({ children }) => {
	const token = sessionStorage.getItem('token');
	const { setWaitingList } = useContext(ChatContext);

	useEffect(() => {
		socket.on('connect', () => {
			console.log('connected to ' + socket.id);
		});

		socket.on('receive-waitlist', (waitList) => {
			setWaitingList(waitList);
		});

		// return () => {
		// 	socket.disconnect();
		// 	console.log('disconnected')
		// };
	}, []);

	if (!token) {
		return <Navigate to='/auth' replace />;
	}

	return children;
};

export default Auth;
