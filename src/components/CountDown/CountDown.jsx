import React, { useState } from 'react'
import { useEffect } from 'react'
import './CountDown.scss'

const CountDown = () => {
    const [time, setTime] = useState("")

    useEffect(() =>{
        let countDownDate = new Date("February 27, 2022 23:00:00").getTime();
        let x = setInterval(() =>{
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

            if (distance <0 ){
                clearInterval(x);
                setTime("COUNTDOWN FINISHED")
            }

        }, 1000)
        

    }, [])

    


  return (
    <div className="countDown">
    <div>
        <h2>Finalización del BootCamp</h2>
        <h2 className="countDown__time">{time}</h2>
    </div>

    </div>
  )
}

export default CountDown