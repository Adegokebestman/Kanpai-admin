/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import ChatContext from '../context/ChatContext';

const MessageAreaInput = ({ action }) => {
	const [inputText, setInputText] = useState('');
	const { chatId } = useContext(ChatContext);

	console.log(chatId);
	function handleSubmit(e) {
		e.preventDefault();
		action(inputText);
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
