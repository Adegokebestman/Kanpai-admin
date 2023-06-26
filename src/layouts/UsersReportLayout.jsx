import { Outlet } from 'react-router-dom';
import UserReportDetailHeader from '../components/UserReportDetailHeader';

const UsersReportLayout = () => {
	return (
		<>
			<UserReportDetailHeader />
			<Outlet />
		</>
	);
};
export default UsersReportLayout;
