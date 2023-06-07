import { useState, useEffect } from 'react';

//MUST BEGIN WITH USE
//DOES NOT SHARE STATE ACROSS COMPONENTS
//parameter creates dynamic hooks
const useCounter = (add = true) =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(add){
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [add]);
    //how to return the variable(s) used in the custom hooks
    return counter;
};


export default useCounter;