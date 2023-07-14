/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';

const MessageBox = ({ ownerId, message }) => {
	const messageRef = useRef(null);

	useEffect(() => {
		messageRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const { id: myChatId } = JSON.parse(sessionStorage.getItem('data'));

	return (
		<article
			ref={messageRef}
			className={`flex flex-col p-2 rounded-xl text-sm max-w-[60%] w-max ${
				myChatId !== ownerId ? 'self-end' : 'self-start'
			}`}
		>
			<span
				className={` p-2 rounded-xl ${
					myChatId !== ownerId ? 'self-start' : 'self-end'
				}`}
			>
				date
			</span>
			<div
				className={` p-2 rounded-xl ${
					myChatId !== ownerId
						? 'bg-red-bg rounded-br-none'
						: 'bg-gray-200 rounded-bl-none'
				}`}
			>
				<p>{message}</p>
			</div>
		</article>
	);
};
export default MessageBox;
