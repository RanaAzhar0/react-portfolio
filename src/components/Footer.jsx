import React, { useEffect, useState } from 'react';


const Footer = () => {
  const [count, setCount] = useState(1);
  const [shouldCount, setShouldCount] = useState(true);

  useEffect(() => {
    if (shouldCount) {
      const interval = setInterval(() => {
        if (count < 20) {
          setCount((prevCount) => prevCount + 1);
        } else {
          setShouldCount(false);
        }
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [count, shouldCount]);

  return (
    <>
   
    <div className="bg-gray-800 text-sm p-4 text-center text-white font-mono"> 
      Copyright © {count}23 Rana Azhar Rights reserved.
      
    </div>
    
    </>
  );
};

export default Footer;



  
  
