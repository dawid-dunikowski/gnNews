import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [value, setValue] = useState();

    const time = () => {
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
  
      return `${hour} : ${min} : ${sec}`;
    }

    useEffect(() => {
      setValue(time());
      const interval = setInterval(() => setValue(time()), 1000);
  
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