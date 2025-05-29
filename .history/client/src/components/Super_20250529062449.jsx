import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const Super = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

 
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('/api/get/access', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            })
            .then(response => response.json())
            .then(data => {
                setIsAuth(data.status);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
        } else {
            setLoading(false);
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
