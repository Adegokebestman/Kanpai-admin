/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import ChatContext from '../context/ChatContext';
import { socket } from '../lib/apiEndPoints';

const MessageAreaInput = () => {
	const [inputText, setInputText] = useState('');
	const { chatId } = useContext(ChatContext);
	const token = sessionStorage.getItem('token');

	function handleSubmit(e) {
		e.preventDefault();
		socket.emit('send-message', token, inputText, chatId);

		setInputText('');
	}

	return (
		<form
			className='flex items-center w-full pb-2 gap-5 h-[50px] relative px-2 sm:px-5'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				placeholder='Message'
				className='block w-full p-2 outline-none border border-blue rounded-lg placeholder:text-primary-700'
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-blue text-white text-2xl rounded-xl p-2 flex items-center justify-center '
			>
				<AiOutlineSend />
			</button>
		</form>
	);
};

export default MessageAreaInput;
