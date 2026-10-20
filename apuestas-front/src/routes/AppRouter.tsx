import OutsidePageLayout from '@/components/OutsidePageLayout';
import { Spinner } from '@/components/ui/spinner';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route element={<OutsidePageLayout />}>
                        <Route path="register" element={<Register />} />
                        <Route path="login" index element={<Login />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRouter;
