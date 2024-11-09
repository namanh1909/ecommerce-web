import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const storedToken = localStorage.getItem('token');
    let location = useLocation();

    if (storedToken && storedToken?.length > 0 && storedToken != 'undefined') {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default ProtectedRoute;