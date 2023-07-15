/* eslint-disable react/prop-types */

import { Navigate } from 'react-router-dom';
import { socket } from '../lib/apiEndPoints';
import { useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';

const Auth = ({ children }) => {
	const token = sessionStorage.getItem('token');
	const { setWaitingList, refetch, setRefetch } = useContext(ChatContext);

	useEffect(() => {
		socket.emit('get-livechat-waitlist', token);
		socket.on('connect', () => {
			// console.log('connected to ' + socket.id);
		});

		socket.on('receive-waitlist', (waitList) => {
			setWaitingList(waitList);
			console.log(waitList);
			setRefetch((prev) => !prev);
		});
		socket.on('error', (error) => {
			console.log('Error:', error);
		});
	}, [token, refetch]);

	if (!token) {
		return <Navigate to='/auth' replace />;
	}

	return children;
};

export default Auth;
