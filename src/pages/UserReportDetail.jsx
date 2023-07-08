import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReportComplaintContainer from '../components/ReportComplaintContainer';
import UserReportUserCard from '../components/UserReportUserCard';
import { getFlagItem, getUserDetails } from '../lib/apiEndPoints';
import OtherContext from '../context/OtherContext';

const UserReportDetail = () => {
	const { id } = useParams();
	const [reports, setReports] = useState([]);
	const { userReportUser, setUserReportUser } = useContext(OtherContext);
	useEffect(() => {
		let mounted = true;
		const fetch = async () => {
			const response = await getFlagItem(id);
			if (response.requestSucessful) {
				setReports(response.flag.reports);
				const data = await getUserDetails(response.flag.flaggedId);
				if (data.requestSucessful) {
					setUserReportUser(data.userInfo);
				}
			}
		};

		if (mounted) {
			fetch();
		}

		return () => {
			mounted = false;
		};
	}, [id, setUserReportUser]);

	return (
		<div className='flex flex-col items-start justify-start gap-6 border border-gray-300 rounded-3xl overflow-hidden pt-2 sm:pt-5'>
			<ReportComplaintContainer reports={reports} />

			<div className='w-full'>
				<h2 className='font-bold text-gray-400 text-center mb-3 sm:mb-6 sm:text-left sm:ml-4'>
					Reported User
				</h2>
				{userReportUser && (
					<UserReportUserCard
						className={'rounded-b-3xl bg-gray-200 '}
					/>
				)}
			</div>
		</div>
	);
};
export default UserReportDetail;
