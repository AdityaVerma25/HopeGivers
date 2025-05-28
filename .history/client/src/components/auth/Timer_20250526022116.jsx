import React from 'react'
import Countdown from 'react-countdown';

const Timer = ({time}) => {
  console.log(time);
  return (
    <div>
       <Countdown date={Date.now() + time}/>
    </div>
  )
}

export default Timer
