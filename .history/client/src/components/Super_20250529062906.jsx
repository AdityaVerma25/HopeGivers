import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import apis from '../utils/apis'


const Super = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

 
    useEffect(() => {
        const getRouteAccess= async () => {
            try {
                const response = await fetch(apis().getAccess, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token: localStorage.getItem('passToken') }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setIsAuth(data.status);
            } catch (error) {
                toast.error(error.message);
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        }
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
