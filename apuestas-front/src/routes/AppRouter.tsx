import { AppLayout } from '@/components/AppLayout';
import OutsidePageLayout from '@/components/OutsidePageLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Spinner } from '@/components/ui/spinner';
import Login from '@/pages/Login';
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
                        <Route
                            path="dashboard"
                            element={
                                <div>
                                    <h1>dash</h1>
                                </div>
                            }
                        ></Route>
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
