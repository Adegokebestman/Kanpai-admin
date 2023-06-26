import ReportComplaintContainer from '../components/ReportComplaintContainer';
import UserReportUserCard from '../components/UserReportUserCard';

const UserReportDetail = () => {
	return (
		<div className='flex flex-col items-start justify-start gap-6 border border-gray-300 rounded-3xl overflow-hidden pt-2 sm:pt-5'>
			<ReportComplaintContainer />

			<div className='w-full'>
				<h2 className='font-bold text-gray-400 text-center mb-3 sm:mb-6 sm:text-left sm:ml-4'>
					Reported User
				</h2>

				<UserReportUserCard className={'rounded-b-3xl bg-gray-200 '} />
			</div>
		</div>
	);
};
export default UserReportDetail;
