import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ time }) => {
  return (
    <div className='timer'>
      <Countdown date={Date.now() + time} />
    </div>
  );
};

export default Timer;

