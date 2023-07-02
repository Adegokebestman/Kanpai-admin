import { useState } from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'

function PaymentMethod() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
	<div>
		<div className='mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center items-center'>
        <div>
          <button className='mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
            <Link to='/'>
              <IoIosArrowBack />
            </Link>
          </button>
          <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
            Payment Method
          </p>
        </div>
      </div>
    <form onSubmit={handleSubmit} className="max-w-md  mt-4 mx-auto">
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditing}
          placeholder="Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={!isEditing}
          placeholder="Last Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="billingAddress"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          disabled={!isEditing}
          placeholder="Billing Address"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          disabled={!isEditing}
          placeholder="Company Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          disabled={!isEditing}
          placeholder="Card Number"
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            disabled={!isEditing}
            placeholder="Expiry Date"
            className="w-28 px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            disabled={!isEditing}
            placeholder="CVV"
            className="w-20 px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
      {isEditing ? (
        <button type="submit" className="px-4 py-2 bg-primary-700 text-white rounded">
          Save
        </button>
      ) : (
        <button type="button" onClick={handleEditClick} className="px-4 py-2 bg-primary-700 text-white rounded">
          Edit
        </button>
      )}
    </form>
	</div>

  );
}

export default PaymentMethod;
