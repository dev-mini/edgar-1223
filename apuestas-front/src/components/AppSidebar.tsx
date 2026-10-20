import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import {
    Building,
    ChartColumnStacked,
    ChevronDown,
    DollarSign,
    LogOutIcon,
    User2,
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Link, useLocation, useNavigate } from 'react-router';
import { logOut } from '@/api/auth/auth';
import { handleErrorResponse } from '@/utils/handleErrorResponse';

export function AppSidebar() {
    const userName = localStorage.getItem('user-fullName');
    const userEmail = localStorage.getItem('user-email');
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            logOut();
            navigate('/login', { replace: true });
        } catch (error) {
            handleErrorResponse(error);
        }
    };

    return (
        <Sidebar>
            <SidebarHeader className="bg-primary text-primary-foreground">
                <SidebarMenu>
                    <SidebarMenuItem className="flex gap-2 items-center">
                        <Building className="size-8 p-1" />
                        <span className="font-bold text-lg">ACME INC.</span>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="mt-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link to={'/dashboard'} />}
                            isActive={pathname === '/dashboard'}
                        >
                            <ChartColumnStacked />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            render={<Link to={'/payments'} />}
                            isActive={pathname === '/payments'}
                        >
                            <DollarSign />
                            <span>SnailPay</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <SidebarMenuButton className="flex items-center cursor-pointer h-full px-2" />
                                }
                            >
                                <User2 className="w-8 h-8" />
                                <div className="flex flex-col">
                                    <span className="font-bold">
                                        {userName}
                                    </span>
                                    <span>{userEmail}</span>
                                </div>
                                <ChevronDown className="ml-auto" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    className={
                                        'flex gap-2 text-red-500 cursor-pointer'
                                    }
                                    onClick={handleLogout}
                                >
                                    <LogOutIcon />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail className="h-fit" />
        </Sidebar>
    );
}
