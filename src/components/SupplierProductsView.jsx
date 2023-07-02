/* eslint-disable react/prop-types */
import TableComponent from '../components/TableComponent';
import { NavLink } from 'react-router-dom';
import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';
import ModalEditUser from './ModalEditUser'
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const SupplierProductsView = () => {
  const columns = [
    {
      name: '',
      selector: (row) => (
        <img
          src={row.imageSrc}
          alt={row.userName}
          className='w-10 h-10 sm:w-20 sm:h-20 rounded-full'
        />
      ),
      sortable: false,
    },
    {
      name: '',
      selector: (row) => (
        <div>
            <h1 className='text-xl'>{row.userName}</h1>
            <p className='text-gray-400'>Product Name</p>
        </div>
      ),
    },

    {
      name: '',
      selector: (row) => (
        <div>
            <h1 className='text-xl'>{row.amount}</h1>
            <p className='text-gray-400'>Unit Price</p>
        </div>
        ),
    },

    {
        name: '',
        selector: (row) => (
          <div className='border-green-bg border text-green-bg px-3 py-2 rounded-full'>
            {row.status}
          </div>
        ),
      },
    {
      name: '',
      selector: (row) => (
        <div>
            <h1 className='text-xl'>{row.date}</h1>
            <p className='text-gray-400'>Date Uploaded</p>
        </div>),
    },
    {
      name: '',
      selector: () => (
        <EditIcon />

      ),
    },
    {
      name: '',
      selector: () => (
          <DeleteIcon />
      ),
    },
  ];

  const dataArray = [];

  for (let i = 0; i < 30; i++) {
    const userName = `Honey Badger ${i + 1}Blitz`;
    const email = `user${i + 1}@example.com`;
    const amount = `$1000${i + 1}`;
    const date = new Date().toLocaleDateString('en-US');
    const id = i + 1;
    const imageSrc = 'https://source.unsplash.com/400x400/?portrait';

    const object = {
      id: id,
      userName: userName,
      amount: amount,
      email: email,
      date: date,
      approve: 'Approve',
      status: 'Available',
      decline: 'Decline',
      imageSrc: imageSrc,
    };

    dataArray.push(object);
  }

  return (
    <div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-10'>
      <div className='flex justify-center'></div>
      <TableComponent
        columns={columns}
        data={dataArray}
        fixedHeader
        selectableRows={false}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SupplierProductsView;

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
