import DashboardBody from '@/features/dashboard/DashboardBody';
import DashboardHeader from '@/features/dashboard/DashboardHeader';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <DashboardHeader />
            <DashboardBody />
        </div>
    );
};

export default Dashboard;
