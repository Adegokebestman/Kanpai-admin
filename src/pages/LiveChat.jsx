import MessageArea from '../components/MessageArea';
import ChatSidebar from '../components/ChatSidebar';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const LiveChat = () => {
	const token = sessionStorage.getItem('token');
	const [chatList, setChatList] = useState();
	const [socket, setSocket] = useState();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		setSocket(io.connect('https://kanpainode-b83dbacd8a19.herokuapp.com'));

		if (socket.connected) {
			console.log(socket.connected);
			socket.on('connect', () => {
				console.log('Connected to the server', socket.id);
			});
			// Set up event handlers for socket events
			socket.emit('get-livechat-waitlist', token);
			let chatId;

			socket.on('receive-waitlist', (waitList) => {
				console.log('received wait list');
				console.log('waitList:', waitList);
				chatId = waitList[0]?._id;
				setChatList(waitList);
				console.log(waitList);
			});

			socket.on('error', (error) => {
				console.log('Error:', error);
			});

			socket.on('receive-message', (message) => {
				console.log('Received message:', message);
				chatId = message._id;
				console.log(chatId);
			});
		}

		return () => {
			// Clean up the socket connection on component unmount
			socket.disconnect();
		};
	}, [socket, token]);

	const sendMessage = (data, chatId) => {
		socket.emit('send-message', token, data, chatId);
	};
	return (
		<div className='liveChat__page md:flex md:gap-4'>
			{chatList && <ChatSidebar chatList={chatList} />}

			<MessageArea action={sendMessage} />
		</div>
	);
};
export default LiveChat;
