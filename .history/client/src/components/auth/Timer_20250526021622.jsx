import React from 'react'
import Countdown from 'react-countdown';

const Timer = ({time}) => {
  console.log(time);
  return (
    <div>
       <Countdown date={Date.now() + 1*60*1000}/>
    </div>
  )
}

export default Timer
