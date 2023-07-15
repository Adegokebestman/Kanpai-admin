/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import ImageElement from './ImageElement';
import ChatContext from '../context/ChatContext';
import { getUserDetails, socket } from '../lib/apiEndPoints';

const UserContactChat = ({ chat }) => {
	const {
		updateChat,
		setMessages,
		setChatId,
		chatId,
		setWaitingList,
		waitingList,
	} = useContext(ChatContext);
	const [user, setUser] = useState();
	const [lastMessage, setLastMessage] = useState();

	useEffect(() => {
		setLastMessage(chat.messages[chat.messages.length - 1]);
		async function fetch() {
			const data = await getUserDetails(chat.user);
			setUser(data.userInfo);
		}
		fetch();
		socket.on('receive-message', (message) => {
			socket.on('receive-waitlist', (waitList) => {
				setWaitingList(waitList);
				console.log(waitList);
			});
			if (chatId) {
				setMessages(message.messages);
				console.log('added');
			}
		});
	}, [chat.messages, chat.user, chatId, updateChat]);

	function handleClick() {
		// fetch messages
		// TODO: set messages in the setMessages state
		//? Response: setMessages(response);
		// After the response, // Todo: updateChat with users' object
		updateChat(user);
		// if (chatId) {
		// 	setMessages(recentMessage.filter((message) => message !== ''));
		// } else {
		setMessages(chat.messages.filter((message) => message !== ''));
		// }
		setChatId(chat._id);
	}
	return (
		<>
			{user && (
				<article
					className='flex items-center justify-between w-full max-w-full hover:bg-gray-200 p-2 cursor-pointer'
					onClick={handleClick}
				>
					<div className='h-10 w-10 overflow-hidden rounded-full border'>
						<ImageElement
							imgTitle={user.name}
							imgSrc={user.photo}
						/>
					</div>
					<div className='flex flex-col items-start justify-between max-w-[190px]'>
						<h3 className='text-base sm:text-lg font-bold font-poppins text-ellipsis whitespace-nowrap overflow-hidden w-full capitalize'>
							{user.name}
						</h3>
						<p className='text-ellipsis whitespace-nowrap overflow-hidden w-full text-sm sm:text-base'>
							{lastMessage && lastMessage.message}
						</p>
					</div>
					<div className='self-start text-sm sm:text-base'>date</div>
				</article>
			)}
		</>
	);
};

export default UserContactChat;
