import { useState } from 'react';
import TableComponent from '../components/TableComponent';
import { tableData } from '../lib/utils';
import { useEffect } from 'react';
import { getFlaggedProducts } from '../lib/apiEndPoints';

const ProductReports = () => {
	const { columns, dataArray } = tableData();
	const [productFlagged, setProductFlagged] = useState([]);

	useEffect(() => {
		let mount = true;
		async function fetch() {
			const flagProducts = await getFlaggedProducts();
			if (flagProducts.requestSucessful) {
				setProductFlagged(flagProducts.flags);
			}
		}
		if (mount) {
			fetch();
		}
		return () => (mount = false);
	}, []);

	// ! this takes in a component that returns a function
	// ?const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
	// ? pass this as props //actions={actionsMemo}
	return (
		<>
			{productFlagged.length < 1 ? (
				<div>You do not have any Flagged Product Reported</div>
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
export default ProductReports;

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
