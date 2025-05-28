import React from 'react'
import Spinner from './Spinner'

const LoadingButton = ({loading,title}) => {
  return (
    <div>
         <span> { loading ? "plaese wait...." :} </span>
    </div>
  )
}

export default LoadingButton
