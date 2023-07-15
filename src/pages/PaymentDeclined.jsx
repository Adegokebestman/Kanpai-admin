/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import InputFilter from '../components/InputFilter';
import TableComponent from '../components/TableComponent';
import { getDeclinedPayments, getUserDetails } from '../lib/apiEndPoints';
import moment from 'moment';

const PaymentDeclined = () => {
	const [loading, setLoading] = useState(false);
	const [requests, setRequests] = useState([]);

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
	];

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const { requestSucessful, payments } = await getDeclinedPayments();
			if (requestSucessful) {
				const tempArray = []; // Temporary array to accumulate the data objects

				for (const element of payments) {
					// const {product} = await getProductDetails(element._id);
					const { userInfo } = await getUserDetails(element.user);

					const object = {
						id: element._id,
						userName:
							userInfo && userInfo.lastName + ' ' + userInfo.name,
						amount: element.amount,
						email: userInfo && userInfo.email,
						date: moment(element.updatedAt).format('DD/MM/YYYY'),
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
					<InputFilter action={'Declined Requests'} filter={false} />
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
		</>
	);
};
export default PaymentDeclined;

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
