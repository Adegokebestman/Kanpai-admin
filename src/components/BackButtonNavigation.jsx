import { useNavigate } from 'react-router-dom';
import BackArrow from './icons/backArrow.svg?component';

const BackButtonNavigation = () => {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate(-1);
	};
	return (
		<div
			className='flex items-center gap-2 justify-start cursor-pointer'
			onClick={navigateBack}
		>
			<span>
				<BackArrow />
			</span>
			<span className='text-sm lg:text-base hidden sm:block'>Back</span>
		</div>
	);
};
export default BackButtonNavigation;
