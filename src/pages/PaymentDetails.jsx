// import TableComponent from '../components/TableComponent';
import InputFilter from '../components/InputFilter';
// import GeneralModal from '../components/GeneralModal';
import BackArrow from '../components/icons/backArrow.svg?component';


const PaymentDetails = () => {
  return (
    <div>
     <div className='flex justify-center md:hidden mb-4' >
        <InputFilter />
        </div>
        <div className='flex justify-between items-center'>
        <span className='md:flex items-center hidden'>
        <BackArrow /> Back
        </span>
    <div className='hidden md:flex' >
        <InputFilter />
        </div>
        <span className='flex items-center md:justify-end gap-4'>
        <button className="bg-red-text px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
        Suspend user
    </button>
    <button className="border-red-text border px-4 py-2 font-semibold text-red-text inline-flex items-center space-x-2 rounded-full">
    Block user
    </button>
    </span>
    </div>
    {/* Main content */}
    <div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-10'>

    </div>
    </div>
  )
}

export default PaymentDetails