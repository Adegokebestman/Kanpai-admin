/* eslint-disable react/prop-types */
import { useContext } from 'react';
import ImageElement from './ImageElement';
import ChatContext from '../context/ChatContext';

const UserContactChat = ({ userData }) => {
	const { updateChat, setMessages } = useContext(ChatContext);
	const values = {
		id: 'someIdOfUser', //userData.id
		username: 'olaoluwa', //userData.username
		country: 'nigeria', //userData.country
		userRole: 'admin', //userData.userRole
		img: 'dsdsdsdsds', //userData.img
	};

	function handleClick() {
		// fetch messages
		// TODO: set messages in the setMessages state
		//? Response: setMessages(response);
		// After the response, // Todo: updateChat with users' object
		updateChat(values);
	}
	return (
		<article
			className='flex items-center justify-between w-full max-w-full hover:bg-gray-200 p-2 cursor-pointer'
			onClick={handleClick}
		>
			<div className='h-10 w-10 overflow-hidden rounded-full border'>
				<ImageElement imgTitle={values.username} />
			</div>
			<div className='flex flex-col items-start justify-between max-w-[190px]'>
				<h3 className='text-base sm:text-lg font-bold font-poppins text-ellipsis whitespace-nowrap overflow-hidden w-full capitalize'>
					username
				</h3>
				<p className='text-ellipsis whitespace-nowrap overflow-hidden w-full text-sm sm:text-base'>
					Latest text of that user Latest text of that user
				</p>
			</div>
			<div className='self-start text-sm sm:text-base'>date</div>
		</article>
	);
};

export default UserContactChat;
