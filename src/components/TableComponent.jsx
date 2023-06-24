import DataTable from 'react-data-table-component';
import ArrowDownward from './icons/arrowDropDown.svg?component';

const TableComponent = (props) => {
	const sortIcon = <ArrowDownward />;
	const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };
	return (
		<DataTable
			pagination
			selectableRowsComponentProps={selectProps}
			sortIcon={sortIcon}
			{...props}
		/>
	);
};
export default TableComponent;
