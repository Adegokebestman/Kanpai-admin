/* eslint-disable react/prop-types */

import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';

const ProductReportProductContainer = ({
	productName = 'Cardbuary Bournvita',
	productImage = 'https://source.unsplash.com/400x400/?portrait',
	productPrice = 200,
	productAvailability = 90,
}) => {
	return (
		<article className='flex flex-col sm:items-center sm:flex-row gap-4 sm:justify-between bg-gray-200 p-2 sm:p-3'>
			<div className='flex items-center justify-evenly gap-3 sm:gap-24'>
				<div className='bg-white rounded-full h-24 w-24 sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
					<img
						src={productImage}
						alt={productName}
						className='w-full h-full object-cover'
					/>
				</div>

				<aside className='sm:flex sm:justify-between gap-5'>
					<div className='text-gray-600'>
						<h3 className='font-bold text-lg sm:text-3xl capitalize whitespace-break-spaces'>
							{productName}
						</h3>
						<p className='text-base lg:text-xl capitalize'>
							Available: {productAvailability ?? 0}
						</p>
					</div>
					<h2 className='font-bold text-xl sm:text-3xl text-gray-600'>
						${productPrice}
					</h2>
				</aside>
			</div>

			<aside className='flex items-center gap-10 self-center'>
				<EditIcon />
				<DeleteIcon />
			</aside>
		</article>
	);
};
export default ProductReportProductContainer;
