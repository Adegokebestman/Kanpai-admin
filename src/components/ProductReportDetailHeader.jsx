/* eslint-disable react/prop-types */
import BackButtonNavigation from './BackButtonNavigation';
import GeneralUsersBox from './GeneralUsersBox';

const ProductReportDetailHeader = ({ id }) => {
	return (
		<header className='flex items-center justify-between'>
			<BackButtonNavigation />
			<GeneralUsersBox
				userId={id}
				className={'text-white bg-primary-700'}
			/>
		</header>
	);
};
export default ProductReportDetailHeader;
