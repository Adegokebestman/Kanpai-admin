/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import ImageElement from './ImageElement';
import ChatContext from '../context/ChatContext';
import { getUserDetails, socket } from '../lib/apiEndPoints';

const UserContactChat = ({ chat }) => {
	const { updateChat,messages, setMessages, setChatId } = useContext(ChatContext);
	const [user, setUser] = useState();

	useEffect(() => {
		async function fetch() {
			const data = await getUserDetails(chat.user);
			setUser(data.userInfo);
		}
		fetch();
		socket.on('receive-message', (message) => {
			if (message) {
				setMessages(
					message.messages.filter(
						(message) => message.message !== ' '
					)
				);
			}
		});
	}, [chat.user, setMessages, updateChat]);

	function handleClick() {
		// fetch messages
		// TODO: set messages in the setMessages state
		//? Response: setMessages(response);
		// After the response, // Todo: updateChat with users' object
		updateChat(user);
		setMessages(messages.filter((message) => message !== '' || ' '));
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
					<div className='flex flex-col flex-1 items-start justify-between max-w-[190px]'>
						<h3 className='text-base sm:text-lg font-bold font-poppins text-ellipsis whitespace-nowrap overflow-hidden w-full capitalize'>
							{user.name}
						</h3>
						{/* <p className='text-ellipsis whitespace-nowrap overflow-hidden w-full text-sm sm:text-base'>
							{lastMessage && lastMessage.message}
							{!lastMessage ||
								(lastMessage == '' && (
									<p className='text-primary-700'>
										New Message
									</p>
								))}
						</p> */}
					</div>
					{/* <div className='self-start text-sm sm:text-base'>date</div> */}
				</article>
			)}
		</>
	);
};

export default UserContactChat;
