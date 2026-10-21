const DashboardHeader = () => {
    return (
        <div className="flex flex-col gap-2 w-full border-b-secondary-foreground border-b-2 pb-4">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <div className="flex flex-col">
                <h2 className="text-lg text-muted-foreground">
                    Welcome to your racing dashboard! Explore today's snail
                    races, track upcoming events, and review your betting
                    performance.
                </h2>
            </div>
        </div>
    );
};

export default DashboardHeader;
