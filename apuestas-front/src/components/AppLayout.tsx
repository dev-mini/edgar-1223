import { Outlet } from 'react-router';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './AppSidebar';

export const AppLayout = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger
                className={'bg-primary text-primary-foreground ml-1 mt-14'}
            />
            <div className="w-full bg-primary h-12 absolute" />
            <div className="flex px-6 py-18">
                <Outlet />
            </div>
        </SidebarProvider>
    );
};
