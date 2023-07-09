import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div
			id='error-page'
			className='w-screen h-screen flex items-center justify-center flex-col gap-6 px-4'
		>
			<h1 className='font-bold text-5xl'>Oops!</h1>
			<p className='font-poppins text-lg sm:text-3xl'>
				The page you are looking for does not exist
			</p>
			<p className='text-primary-700 font-bold font-rubik'>
				<i>{error.statusText || error.message}</i>
			</p>
			<Link to={'/'} className='font-bold text-blue underline'>
				Homepage
			</Link>
		</div>
	);
}
