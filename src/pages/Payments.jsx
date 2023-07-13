/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import InputFilter from '../components/InputFilter';
import TableComponent from '../components/TableComponent';
import { getPaymentRequests, getUserDetails } from '../lib/apiEndPoints';
import moment from 'moment';
import GeneralModal from '../components/GeneralModal';
import ModalPayments from '../components/ModalPayments';

// import Button from '../components/Button';
const Payments = () => {
	const [loading, setLoading] = useState(false);
	const [requests, setRequests] = useState([]);
	const [openApprove, setOpenApprove] = useState(false);
	const [openDecline, setOpenDecline] = useState(false);
	const [id, setId] = useState('');

	async function handleDeclinePayment(paymentId) {
		setOpenDecline(true);
		setId(paymentId);
	}
	async function handleApprovePayment(paymentId) {
		setOpenApprove(true);
		setId(paymentId);
	}

	const columns = [
		{
			name: 'Username',
			selector: (row) => row.userName,
		},
		{
			name: 'Email',
			selector: (row) => row.email,
		},
		{
			name: 'Amount',
			selector: (row) => <p>$ {row.amount}</p>,
		},

		{
			name: 'Date',
			selector: (row) => row.date,
			sortable: true,
		},
		{
			name: '',
			selector: (row) => (
				<button
					className='border-green-bg border text-green-bg px-3 py-2 rounded-full'
					onClick={() => handleApprovePayment(row.id)}
				>
					{row.approve}
				</button>
			),
		},
		{
			name: '',
			selector: (row) => (
				<button
					className='border-red-text border text-red-200 px-3 py-2 rounded-full'
					onClick={() => handleDeclinePayment(row.id)}
				>
					{row.decline}
				</button>
			),
		},
	];

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const { requestSucessful, paymentRequests } =
				await getPaymentRequests();
			if (requestSucessful) {
				const tempArray = []; // Temporary array to accumulate the data objects

				for (const element of paymentRequests) {
					// const {product} = await getProductDetails(element._id);
					const { userInfo } = await getUserDetails(element.user);

					const object = {
						id: element._id,
						userName:
							userInfo && userInfo.lastName + ' ' + userInfo.name,
						amount: element.amount,
						email: userInfo && userInfo.email,
						date: moment(element.createdAt).format('DD/MM/YYYY'),
						approve: 'Approve',
						decline: 'Decline',
					};

					tempArray.push(object);
				}

				setRequests(tempArray);
				setLoading(false);
			}
		}
		fetch();
	}, []);

	return (
		<>
			<div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-10'>
				<div className='flex justify-center'>
					<InputFilter action={'Pay Out Requests'} filter={false} />
				</div>
				{loading ? (
					<p className='animate-pulse'>Loading...</p>
				) : (
					<TableComponent
						columns={columns}
						data={requests}
						fixedHeader
						selectableRows={false}
						customStyles={customStyles}
					/>
				)}
			</div>

			<GeneralModal isOpen={openDecline}>
				<ModalPayments setOpenDelete={setOpenDecline} id={id} />
			</GeneralModal>

			<GeneralModal isOpen={openApprove}>
				<ModalPayments
					setOpenDelete={setOpenApprove}
					accept={true}
					id={id}
				/>
			</GeneralModal>
		</>
	);
};
export default Payments;

const customStyles = {
	rows: {
		style: {
			minHeight: '40px', // override the row height
			padding: '15px 0',
			fontWeight: 'bold',
			'&:hover': {
				backgroundColor: '#f9d7bf45',
			},
		},
	},
	headCells: {
		style: {
			textTransform: 'uppercase',
		},
	},
};
