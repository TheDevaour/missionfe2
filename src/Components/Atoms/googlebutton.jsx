import React, { useState } from 'react';
import Googlelogo from '../../assets/images/logos_google-icon.svg';

const Googlebutton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Actual Google auth implementation would go here
    setTimeout(() => setIsLoading(false), 2000); // Simulate API call
  };

  return (
    <button 
      onClick={handleGoogleLogin}
      disabled={isLoading}
      className='flex border bg-textLight-primary border-input-default w-full h-12 rounded-xl justify-center items-center gap-2 cursor-pointer mt-6'
    >
      <img src={Googlelogo} alt="logo google" className='w-6 h-6' />
      {isLoading ? 'Memproses...' : 'Masuk Dengan Google'}
    </button>
  );
};

export default Googlebutton