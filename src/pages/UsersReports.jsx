import { useState } from 'react';
import TableComponent from '../components/TableComponent';
import { tableData } from '../lib/utils';
import { getFlaggedUsers } from '../lib/apiEndPoints';
import { useEffect } from 'react';

const UsersReports = () => {
	const { columns, dataArray } = tableData('users');
	const [productFlagged, setProductFlagged] = useState([]);

	useEffect(() => {
		let mount = true;
		async function fetch() {
			const flagProducts = await getFlaggedUsers();
			if (flagProducts.requestSucessful) {
				setProductFlagged(flagProducts.flags);
			}
		}
		if (mount) {
			fetch();
		}
		return () => (mount = false);
	}, []);
	return (
		<>
			{productFlagged.length < 1 ? (
				<div>You do not have any Flagged User Reported</div>
			) : (
				<article>
					<TableComponent
						columns={columns}
						data={dataArray}
						fixedHeader
						selectableRows={false}
						customStyles={customStyles}
					/>
				</article>
			)}
		</>
	);
};
export default UsersReports;

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
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
			textTransform: 'uppercase',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
			margin: '0 auto',
		},
	},
};
