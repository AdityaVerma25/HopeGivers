import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const Super = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

 
    useEffect(() => {
        const getRouteAccess= async () => {
    }, []);


    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (isAuth) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            Super
        </div>
    )
}

export default Super
