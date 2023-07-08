/* eslint-disable react/prop-types */
import moment from 'moment';
import GeneralUsersBox from './GeneralUsersBox';

const ReportComplaintContainer = ({ reports }) => {
	return (
		<article className='border border-gray-100 rounded-2xl px-2 sm:px-8 py-4 w-[90%] mx-auto space-y-6'>
			<h4>Report Details</h4>
			{reports.map((report, i) => (
				<Container key={i} report={report} />
			))}
		</article>
	);
};
export default ReportComplaintContainer;
const Container = ({ report }) => {
	return (
		<aside className='border border-slate-200 bg-[#f7f7f7] py-5 px-3 space-y-8'>
			<p className='text-sm lg:text-base lg:text-justify '>
				{report.report}
			</p>
			<div className='flex flex-col sm:flex-row items-center sm:justify-between gap-3'>
				<GeneralUsersBox
					userId={report.reporterId}
					className={'bg-white text-black'}
					chat={true}
				/>

				<p className='text-sm lg:text-base'>
					{moment(report.date).format('DD/MM/YYYY')}
				</p>
			</div>
		</aside>
	);
};
