import SingleRecycleItem from '../components/SingleRecycleItem';

const RecycleProducts = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<div className='flex flex-col gap-3'>
			{arr.map((ar) => (
				<SingleRecycleItem key={ar} value={'Product'}/>
			))}
		</div>
	);
};
export default RecycleProducts;
