import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { useEffect, useState } from 'react';

const getCredit = () => localStorage.getItem('user-credit') ?? '0';

export const AppLayout = () => {
    const [credit, setCredit] = useState(getCredit);

    useEffect(() => {
        const update = () => setCredit(getCredit());
        window.addEventListener('credit-updated', update);
        return () => window.removeEventListener('credit-updated', update);
    }, []);

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger
                className={'bg-primary text-primary-foreground ml-1 mt-14'}
            />
            <div className="w-full bg-primary h-12 flex items-center justify-end absolute">
                <span className="text-primary-foreground  z-50 px-4 font-semibold">
                    Credit: ${credit}
                </span>
            </div>
            <div className="flex px-6 py-24 w-full">
                <Outlet />
            </div>
        </SidebarProvider>
    );
};
