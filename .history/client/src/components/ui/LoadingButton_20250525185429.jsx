import React from 'react'
import Spinner from './Spinner'

const LoadingButton = ({ loading, title }) => {
    return (
        <div className=''>
            <span> {loading ? "plaese wait...." : title} </span>
        </div>
    )
}

export default LoadingButton
