import { RiMessage2Line } from 'react-icons/ri';
import ImageElement from './ImageElement';

const UserProfile = () => {
	let srcImg = 'https://source.unsplash.com/400x400/?portrait';

	return (
		<div>
			<div className='md:flex md:flex-col-3  justify-between items-center mx-4'>
				<span className='flex items-center gap-4'>
					<div className='bg-white rounded-full h-20 w-20 sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
						<ImageElement imgSrc={srcImg} imgTitle={'userName'} />
					</div>
					<div>
						<h1 className='font-medium text-lg md:text-2xl'>
							Loyd Francis
						</h1>
						<span className='flex items-center  gap-4 leading-8'>
							<p className='text-gray-700 text-base md:text-xl'>
								Loydfgmail.com
							</p>
							<RiMessage2Line className='text-primary-700' />
						</span>
						<p className='text-xs md:text-sm'>
							Joined 6th March, 2022
						</p>
					</div>
				</span>

				<div className='hidden md:block border-2 py-2 px-2 border-primary-700 rounded-full font-medium text-primary-700 flex-col-reverse text-sm'>
					Recent Activity
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
