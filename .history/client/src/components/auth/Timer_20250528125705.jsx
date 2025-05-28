import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ time }) => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-red-500">OTP expired</span>;
    } else {
      return (
        <span className="text-gray-800 font-medium">
          Time remaining: {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      );
    }
  };

  return (
    <div className='timer'>
      <Countdown date={Date.now() + time} renderer={renderer} />
    </div>
  );
};

export default Timer;
