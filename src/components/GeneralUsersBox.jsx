/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import ChatIcon from './icons/chatIconColored.svg?component';
import ChatContext from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../lib/apiEndPoints';

const GeneralUsersBox = ({ className, chat = false, userId }) => {
	const { updateChat } = useContext(ChatContext);
	const navigate = useNavigate();
	const [userDetail, setUserDetail] = useState();

	useEffect(() => {
		const fetch = async () => {
			const data = await getUserDetails(userId);
			if (data.requestSucessful) {
				setUserDetail(data.userInfo);
			}
		};
		fetch();
	}, [userId]);

	function handleClick() {
		updateChat(userDetail);
		navigate('/live-chat');
	}
	return (
		<>
			{userDetail && (
				<aside
					className={`flex items-center justify-start gap-1 lg:gap-3 bg-primary-700 max-w-max px-6 py-2 lg:px-12 lg:py-4  rounded-3xl ${className}`}
				>
					<div className='h-10 w-10 bg-green-bg rounded-full overflow-hidden object-contain object-top'>
						<img
							src={userDetail.photo}
							alt={userDetail.lastName}
							className='w-full h-full'
						/>
					</div>
					<div className='flex-col pl-3 items-start justify-between sm:flex'>
						<h4 className='font-semibold capitalize leading-4 text-sm sm:text-sm whitespace-nowrap'>
							{userDetail.name}
						</h4>
						<p className='capitalize font-medium text-xs lg:text-sm'>
							{userDetail.roles == 2000
								? 'buyer'
								: userDetail.roles === 2001
								? 'seller'
								: 'driver'}
						</p>
					</div>
					{chat && (
						<ChatIcon
							className='cursor-pointer'
							onClick={handleClick}
						/>
					)}
				</aside>
			)}
		</>
	);
};
export default GeneralUsersBox;
