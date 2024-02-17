import { useEffect } from 'react';
import { useAuth } from '../Reducers/Authentication/AuthContext';
import toast from 'react-hot-toast';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth().state;
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            toast.error('please Login first');
            navigate('/login');
        }else{
            navigate('/');
        }
    })
    return <Outlet />
}

export default ProtectedRoute;