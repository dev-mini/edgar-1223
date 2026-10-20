import { AppLayout } from '@/components/AppLayout';
import OutsidePageLayout from '@/components/OutsidePageLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Spinner } from '@/components/ui/spinner';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Payments from '@/pages/Payments';
import Register from '@/pages/Register';
import { Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to={'dashboard'} />}
                        />
                        <Route path="payments" element={<Payments />}></Route>
                        <Route path="dashboard" element={<Dashboard />}></Route>
                        <Route path="*" element={<Outlet />} />
                    </Route>
                    <Route element={<OutsidePageLayout />}>
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRouter;
