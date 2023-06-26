/* eslint-disable react/prop-types */
import ChatIcon from './icons/chatIconColored.svg?component';

const ReportComplaintContainer = ({
	complaint = 'I am writing to express my utmost disappointment and frustration regarding a product I recently purchased from your store. It is with great regret that I inform you of the abysmal delay i have experienced in receiving my product. Please admin treat this as urgent as I need my product',
	imgSrc = 'https://source.unsplash.com/100x100/?portrait',
	userName = 'User Name',
	role = 'Supplier',
}) => {
	return (
		<article className='border border-gray-100 rounded-2xl px-2 sm:px-8 py-4 w-[90%] mx-auto space-y-6'>
			<h4>Report Details</h4>
			<aside className='border border-slate-200 bg-[#f7f7f7] py-5 px-3 space-y-8'>
				<p className='text-sm lg:text-base lg:text-justify '>
					{complaint}
				</p>
				<div className='flex flex-col sm:flex-row items-center sm:justify-between gap-3'>
					<UserBox imgSrc={imgSrc} userName={userName} role={role} />
					<p className='text-sm lg:text-base'>12/22/2023</p>
				</div>
			</aside>
		</article>
	);
};
export default ReportComplaintContainer;

const UserBox = ({ imgSrc, userName, role }) => {
	return (
		<aside className='flex items-center justify-evenly gap-1 lg:gap-3 bg-white w-full max-w-[240px] sm:max-w-max px-3 py-2 lg:px-8 lg:py-4 rounded-3xl'>
			<div className='h-10 w-10 bg-green-bg rounded-full overflow-hidden object-contain object-top'>
				<img src={imgSrc} alt={userName} className='w-full h-full' />
			</div>
			<div className='flex-col pl-3 items-start justify-between sm:flex'>
				<h4 className='font-semibold capitalize leading-4 text-sm sm:text-sm whitespace-nowrap'>
					{userName}
				</h4>
				<p className='capitalize text-xs lg:text-sm text-gray-400'>
					{role}
				</p>
			</div>
			<ChatIcon />
		</aside>
	);
};
