import React from 'react'
import Countdown from 'react-countdown';

const Timer = () => {
  return (
    <div>
       <Countdown date={Date.now() + 1*62}/>
    </div>
  )
}

export default Timer
