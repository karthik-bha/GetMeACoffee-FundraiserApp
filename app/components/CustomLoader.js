import React from 'react';
import Image from 'next/image';

const CustomLoader = () => {
  return (
   
      <div className='flex justify-center items-center m-auto z-50'>
        <Image 
          src="/assets/loader.gif" 
          alt="Loading..."
          width={250}  
          height={250} 
        />
      </div>
   
  );
};

export default CustomLoader;
