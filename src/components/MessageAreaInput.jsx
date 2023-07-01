import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const MessageAreaInput = () => {
	const [inputText, setInputText] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		alert('submitted');
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
