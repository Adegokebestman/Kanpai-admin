/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import BackArrow from './icons/backArrow.svg?component';

const ProductReportDetailHeader = ({
	imgSrc = 'https://source.unsplash.com/100x100/?portrait',
	userName = 'User Name',
	role = 'Supplier',
}) => {
	const navigate = useNavigate();
	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<header className='flex items-center justify-between'>
			<div
				className='flex items-center gap-2 justify-start'
				onClick={navigateBack}
			>
				<span>
					<BackArrow />
				</span>
				<span className='text-sm lg:text-base hidden sm:block'>
					Back
				</span>
			</div>

			<aside className='flex items-center justify-start gap-1 lg:gap-3 bg-primary-700 max-w-max px-6 py-2 lg:px-12 lg:py-4 text-white rounded-3xl'>
				<div className='h-10 w-10 bg-green-bg rounded-full overflow-hidden object-contain object-top'>
					<img
						src={imgSrc}
						alt={userName}
						className='w-full h-full'
					/>
				</div>
				<div className='flex-col pl-3 items-start justify-between sm:flex'>
					<h4 className='font-semibold capitalize leading-4 text-sm sm:text-sm whitespace-nowrap'>
						{userName}
					</h4>
					<p className='capitalize font-medium text-xs lg:text-sm'>
						{role}
					</p>
				</div>
			</aside>
		</header>
	);
};
export default ProductReportDetailHeader;
