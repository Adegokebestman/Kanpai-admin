/* eslint-disable react/prop-types */
import TableComponent from '../components/TableComponent';
import {RiDeleteBinLine} from 'react-icons/ri'
import {LuEdit3} from 'react-icons/lu'
import { NavLink } from 'react-router-dom';
import ModalEditUser from './ModalEditUser'
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const SupplierInventory = () => {
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
          <div>
              <h1 className='text-xl'>{row.available}</h1>
              <p className='text-gray-400'> Available Unit</p>
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
        <div className='cursor-pointer text-2xl text-primary-700'>
                  <LuEdit3 />

        </div>

      ),
    },
    {
      name: '',
      selector: () => (
        <div className='cursor-pointer text-2xl text-primary-700'>
        <RiDeleteBinLine />
        </div>

      ),
    },
  ];

  const dataArray = [];

  for (let i = 0; i < 30; i++) {
    const userName = `Heineken ${i + 1}Blitz`;
    const email = `user${i + 1}@example.com`;
    const amount = `$1000${i + 1}`;
    const available = `200${1 + 1}`;
    const date = new Date().toLocaleDateString('en-US');
    const id = i + 1;
    const imageSrc = 'https://source.unsplash.com/400x400/?portrait';

    const object = {
      id: id,
      userName: userName,
      amount: amount,
      available:available,
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

export default SupplierInventory;

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
