import { ChartBarLabel } from '@/components/ChartBarLabel';
import { ChartPieDonut } from '@/components/ChartPieDonut';

const DashboardBody = () => {
    return (
        <div className="flex flex-col gap-4 items-center md:flex-row">
            <ChartPieDonut />
            <ChartBarLabel />
        </div>
    );
};

export default DashboardBody;
