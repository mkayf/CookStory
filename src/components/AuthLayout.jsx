import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function AuthLayout({children, authentication = true}) {
  
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth.authStatus);
  
  useEffect(() => {
    if(authentication && authStatus !== authentication){
        navigate('/login');
    } else if(!authentication && authStatus !== authentication){
        navigate('/');
    }
    setLoader(false);
  }, [navigate, authStatus, authentication]);


  return loader ? (
        <div className='flex justify-center items-center h-90'>
          <div className="w-8 h-8 sm:w-16 sm:h-16 border-3 border-gray-950 border-b-transparent rounded-full animate-spin"></div>
        </div>
        )
        :
        <div>
            {children}
        </div>
}

export default AuthLayout