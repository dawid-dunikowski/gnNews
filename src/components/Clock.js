import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [value, setValue] = useState();

    const time = () => {
      const time = new Date();
      const hour = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();
  
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