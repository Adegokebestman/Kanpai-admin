import SingleRecycleItem from '../components/SingleRecycleItem';

const RecycleUsers = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	return (
		<div className='flex flex-col gap-3'>
			{arr.map((ar) => (
				<SingleRecycleItem key={ar} value={'User'} />
			))}
		</div>
	);
};
export default RecycleUsers;
