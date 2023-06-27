import {RiMessage2Line} from 'react-icons/ri';

const PaymentProfile = () => {
  return (
    <div>
    <div className="md:flex md:flex-col-3  justify-between items-center mx-4">
        <span className="flex items-center gap-4">
        <span className='rounded-full bg-[#F0CFB6] text-[#A8591F] relative py-1 px-2'>seller</span>
        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
        <div>
          <h1 className="font-medium text-2xl">Loyd Francis</h1>
          <span className='flex items-center  gap-4 leading-8'>
            <p className='text-gray-700 text-xl'>Loydfgmail.com</p>
            <RiMessage2Line className='text-primary-700' />
          </span>
          <p>Joined 6th March, 2022</p>
        </div>
        </span>

        <div className='border-2 border-green-bg rounded-lg py-4 px-4 md:my-0 my-4'>
            <p className='text-green-300'>WALLET BALANCE</p>
            <h1 className='text-green-200 font-medium text-4xl'>$ 10,230.00</h1>
        </div>
    </div>
    </div>
  )
}

export default PaymentProfile