import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({isAuthenticated}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated])



    return <Outlet />;
}

export default ProtectedRoute;