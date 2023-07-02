import { useState } from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom';

function ThirdForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [region, setRegion] = useState('');
  const [phone, setPhone] = useState('');
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
            Shipping Address
          </p>
        </div>
      </div>
    <form onSubmit={handleSubmit} className="max-w-md mt-4 mx-auto">
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isEditing}
        placeholder="Name"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        disabled={!isEditing}
        placeholder="Last Name"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        disabled={!isEditing}
        placeholder="Street"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="streetNumber"
        value={streetNumber}
        onChange={(e) => setStreetNumber(e.target.value)}
        disabled={!isEditing}
        placeholder="Street Number"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        disabled={!isEditing}
        placeholder="Country"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!isEditing}
        placeholder="City"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="postalCode"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        disabled={!isEditing}
        placeholder="Postal Code"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        disabled={!isEditing}
        placeholder="Region"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={!isEditing}
        placeholder="Phone"
        className="w-full px-2 py-2 mb-4 border-orange-500 border rounded"
      />
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

export default ThirdForm;
