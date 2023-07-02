import DriverList from '../components/DriverList';

const TruckDriver = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className='flex flex-col gap-3'>
			{arr.map((ar) => (
				<DriverList key={ar} value={'user'} id={ar}/>
			))}
		</div>
	);
};
export default TruckDriver;