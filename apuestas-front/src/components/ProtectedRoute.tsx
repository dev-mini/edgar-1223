import { type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Spinner } from './ui/spinner';

interface Props {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
    const userEmail = localStorage.getItem('user-email');
    const userfullName = localStorage.getItem('user-fullName');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userEmail && !userfullName) navigate('/login');
    }, [userEmail, userfullName, localStorage.getItem, navigate]);

    if (!userEmail) return <Spinner fontSize={20} />;

    if (userEmail && userfullName) return children;
};
