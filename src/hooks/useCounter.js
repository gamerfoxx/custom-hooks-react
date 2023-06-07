import { useState, useEffect } from 'react';

//MUST BEGIN WITH USE
//DOES NOT SHARE STATE ACROSS COMPONENTS
const useCounter = () =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
    //how to return the variable(s) used in the custom hooks
    return counter;
};


export default useCounter;