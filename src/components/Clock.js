import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [value, setValue] = useState();

    // The code imports the necessary dependencies React, useEffect, and useState.
    const time = () => {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
  
      return `${hour} : ${min} : ${sec}`;
    }

    // Using the useEffect hook, we set the value value to the current time every second.
    useEffect(() => {
      setValue(time());

      // The setInterval() function allows code to execute every specified time (in this case, every 1000ms, or 1s).
      const interval = setInterval(() => setValue(time()), 1000);
  
      // If the Timer component is unmounted, we finish executing the setInterval() function.
      return () => {
        clearInterval(interval);
      };
    }, []);

    return ( 
        <>
            {value}
        </>

     );
}
 
export default Timer;
