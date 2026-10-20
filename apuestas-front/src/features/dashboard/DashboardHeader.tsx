import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

const DashboardHeader = () => {
    return (
        <div className="flex flex-col gap-4 w-full border-b-secondary-foreground border-b-2 pb-4">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <div className="flex flex-1 justify-between items-center">
                <h2 className="font-semibold text-lg text-primary">
                    Your credit: $0
                </h2>
                <Button className={'cursor-pointer flex gap-2'}>
                    <PlusIcon />
                    Buy credits
                </Button>
            </div>
        </div>
    );
};

export default DashboardHeader;
