/* eslint-disable react/prop-types */
import { useState } from 'react';
import ImageElement from './ImageElement';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';
import {
	getProductDetails,
	getUserDetails,
	unSuspendAProduct,
	unSuspendAUser,
} from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';
import { useEffect } from 'react';
import moment from 'moment/moment';

const SingleRecycleItem = ({ value, user = true }) => {
	const [openOptions, setOpenOptions] = useState(false);
	const [loading, setLoading] = useState(false);
	const [productDetail, setProductDetail] = useState();
	const formattedDate = moment(value.suspensionExpiresAt).format(
		'DD/MM/YYYY'
	);

	useEffect(() => {
		setLoading(true);
		async function fetch() {
			if (!user) {
				const { requestSucessful, product } = await getProductDetails(
					value.id
				);
				if (requestSucessful) {
					const { requestSucessful: ok, userInfo } =
						await getUserDetails(product.createdBy);
					if (ok) {
						setProductDetail({ ...userInfo, ...product });
						setLoading(false);
					}
				}
			} else {
				const { requestSucessful, userInfo } = await getUserDetails(
					value.id
				);
				setProductDetail(userInfo);
				if (requestSucessful) {
					setLoading(false);
				}
			}
		}
		fetch();
	}, [user, value]);

	const handleUnsuspend = async (id) => {
		let res;
		if (!user) {
			res = await unSuspendAProduct(id);
		} else {
			res = await unSuspendAUser(id);
		}
		return res;
	};

	return (
		<>
			{loading && (
				<Oval
					height={30}
					width={30}
					color='#F9F8F8'
					wrapperStyle={{}}
					wrapperClass='bg-gray-fade w-full flex items-center justify-center h-full py-20'
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#B3B3B3'
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			)}
			{productDetail && (
				<div
					className={`mt-4 flex flex-col sm:flex-row px-2 py-3 items-center justify-between gap-2 sm:gap-4 hover:drop-shadow-xl hover:bg-primary-100 text-black hover:text-primary-700`}
				>
					<div className='flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 w-full flex-1'>
						<div className='w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden hidden sm:block'>
							<ImageElement
								imgSrc={productDetail.photo}
								imgTitle={
									user
										? productDetail.name
										: productDetail.productName
								}
							/>
						</div>
						<h2 className='font-bold text-sm lg:text-base uppercase sm:capitalize'>
							{productDetail.productName ??
								productDetail.lastName +
									' ' +
									productDetail.name}
						</h2>
						<h2 className='font-bold text-sm lg:text-base capitalize'>
							{productDetail.email}
						</h2>
					</div>

					<div className='flex items-center justify-end gap-8 sm:justify-around text-sm w-full sm:max-w-max'>
						<p>{formattedDate}</p>
						<button
							className='px-3 py-1 sm:p-2 rounded-full bg-red-text text-white cursor-pointer text-xs sm:text-sm self-end'
							onClick={() => setOpenOptions(!openOptions)}
						>
							Unsuspend
						</button>
					</div>
				</div>
			)}
			{productDetail && (
				<GeneralModal isOpen={openOptions} setIsOpen={setOpenOptions}>
					<ModalDelete
						recycle={true}
						setOpenDelete={setOpenOptions}
						value={productDetail.productName ?? productDetail.email}
						action={() => handleUnsuspend(value.id)}
					/>
				</GeneralModal>
			)}
		</>
	);
};

export default SingleRecycleItem;
