import { Outlet } from 'react-router';

const OutsidePageLayout = () => {
    return (
        <div className="flex min-w-dvw min-h-dvh">
            <div className="flex-1/2 bg-primary"></div>
            <div className="flex flex-1/2 flex-col items-center justify-center gap-12 p-4 border-2 bg-primary-foreground">
                <h1 className="text-4xl font-bold text-foreground">
                    Welcome to Bet{' '}
                    <span className="text-green-600 text-4xl">$</span>nail
                </h1>
                <Outlet />
            </div>
        </div>
    );
};

export default OutsidePageLayout;
