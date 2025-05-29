import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'


const Super = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    if(loading) {   
        return <h2>Loading...</h2>;
    }

    if(isAuth){
        return <Outlet />;
    }

  return (
    <div>
      
    </div>
  )
}

export default Super
