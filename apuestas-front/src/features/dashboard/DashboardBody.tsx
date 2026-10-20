import { ChartBarLabel } from '@/components/ChartBarLabel';
import { ChartPieDonut } from '@/components/ChartPieDonut';

const DashboardBody = () => {
    return (
        <div className="flex gap-4 items-center">
            <ChartPieDonut />
            <ChartBarLabel />
        </div>
    );
};

export default DashboardBody;
