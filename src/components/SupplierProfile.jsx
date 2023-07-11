import { RiMessage2Line } from 'react-icons/ri';
import ImageElement from './ImageElement';
import SquareBox from './SquareBox';
import { useContext } from 'react';
import OtherContext from '../context/OtherContext';
import ChatContext from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const SupplierProfile = () => {
	const { userData } = useContext(OtherContext);
	const { updateChat } = useContext(ChatContext);
	const navigate = useNavigate();
	function handleClick() {
		updateChat(userData);
		navigate('/live-chat');
	}
	return (
		<div>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center mx-4'>
				<div className='flex items-center gap-4'>
					<span className='hidden sm:block top-1/2 -right-[5%] translate-x-[20%] -translate-y-1/2 rounded-full bg-[#F0CFB6] text-[#A8591F] text-xs sm:text-sm relative py-1 px-2'>
						seller
					</span>
					<div className=' bg-white rounded-full h-24 w-24  sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
						<ImageElement
							imgSrc={userData.photo}
							imgTitle={userData.name}
						/>
					</div>
					<div>
						<h1 className='font-medium text-2xl'>
							{userData.lastName + ' ' + userData.name}
						</h1>
						<span className='flex items-center  gap-4 leading-8'>
							<p className='text-gray-700 text-xl'>
								{userData.email}
							</p>
							<RiMessage2Line
								className='text-primary-700'
								onClick={handleClick}
							/>
						</span>
						<p>Joined 6th March, 2022</p>
					</div>
				</div>

				<SquareBox
					tag='WALLET BALANCE'
					number={'$ 10,230.00'}
					classnames='border-2 border-green-bg rounded-lg text-green-200 flex-col-reverse w-full px-4 mb-2 md:mb-0'
				/>
			</div>
		</div>
	);
};

export default SupplierProfile;
