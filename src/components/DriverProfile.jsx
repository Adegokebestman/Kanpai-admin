import { RiMessage2Line } from 'react-icons/ri';
import ImageElement from './ImageElement';
import SquareBox from './SquareBox';

const DriverProfile = () => {
	let srcImg = 'https://source.unsplash.com/400x400/?portrait';

	return (
		<div>
			<div className='flex flex-col-reverse md:flex-row justify-between items-center mx-4'>
				<span className='flex items-center gap-4'>
					<span className='hidden sm:block top-1/2 -right-[5%] translate-x-[20%] -translate-y-1/2 rounded-full bg-[#F0CFB6] text-[#A8591F] text-xs sm:text-sm relative py-1 px-2'>
						Driver
					</span>
					<div className=' bg-white rounded-full h-24 w-24  sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
						<ImageElement imgSrc={srcImg} imgTitle={'userName'} />
					</div>
					<div>
						<h1 className='font-medium text-lg md:text-xl'>
							Loyd Francis
						</h1>
						<span className='flex items-center  gap-4 leading-8'>
							<p className='text-gray-700 text-sm md:text-base'>
								Loydfgmail.com
							</p>
							<RiMessage2Line className='text-primary-700' />
						</span>
						<p className='text-sm'>Joined 6th March, 2022</p>
					</div>
				</span>

				<SquareBox
					tag='WALLET BALANCE'
					number={'$ 10,230.00'}
					classnames='border-2 border-green-bg rounded-lg text-green-200 flex-col-reverse w-full px-4 mb-2 md:mb-0'
				/>
			</div>
		</div>
	);
};

export default DriverProfile;
