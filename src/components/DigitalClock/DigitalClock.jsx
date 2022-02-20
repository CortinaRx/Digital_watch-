import React, { useState } from 'react'
import { useEffect } from 'react';
import './DigitalClock.scss';

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(()=>{
      setInterval(()=>{
          const date = new Date();
          setClockState(date.toLocaleTimeString());

      }, 1000);

  },[]);



  return (
    <div className="digital__clock">
    <h2>Hora Actual</h2>
    <h2 className="digital__clock__time">{clockState}</h2>
    </div>
  )
}

export default DigitalClock