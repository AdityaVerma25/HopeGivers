import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'


const Super = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    if(loading) {   
        return <>Loading...</h2>;
    }

  return (
    <div>
      
    </div>
  )
}

export default Super
