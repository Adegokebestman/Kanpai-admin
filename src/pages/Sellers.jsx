import SupplerList from "../components/SupplierList"
const Sellers = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className='flex flex-col gap-3'>
			{arr.map((ar) => (
				<SupplerList key={ar} value={'user'} id={ar}/>
			))}
		</div>
	);
};
export default Sellers