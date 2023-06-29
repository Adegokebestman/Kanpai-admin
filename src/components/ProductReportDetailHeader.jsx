/* eslint-disable react/prop-types */
import BackButtonNavigation from './BackButtonNavigation';
import GeneralUsersBox from './GeneralUsersBox';

const ProductReportDetailHeader = () => {
	return (
		<header className='flex items-center justify-between'>
			<BackButtonNavigation />
			<GeneralUsersBox />
		</header>
	);
};
export default ProductReportDetailHeader;
