/* eslint-disable react/prop-types */
import CancelIcon from './icons/cancelIcon.svg?component';
import SuccessfulIcon from './icons/successful.svg?component';

const ModalSuccess = ({ action, closeSecond, label }) => {
	function closeAll() {
		action(false);
		if (closeSecond) {
			closeSecond(false);
		}
	}
	return (
		<div className='flex items-center gap-7 justify-center flex-col'>
			<CancelIcon onClick={closeAll} className='self-end' />
			<SuccessfulIcon />
			<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>
				Successfully
			</h4>
			<p className='text-gray-300 text-center'>{label}</p>
		</div>
	);
};
export default ModalSuccess;
