import React from 'react'
import authService from '../services/auth'
import { logout as storeLogout } from '../store/authSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function LogoutBtn({
    className = '',
    ...props
}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    const logoutUser = await authService.logout();
    if(logoutUser){
      dispatch(storeLogout());
      toast('You have been logged out.', {
        type : 'info',
        position : 'bottom-right'
      });
      navigate('/');
    }
  }

  return (
    <button onClick={logout} className={`bg-[#A8C66C] text-black poppins-regular px-4 py-2 rounded-lg cursor-pointer hover:bg-[#8aa259] duration-300 ${className}`} {...props}>Logout</button>
  )
}

export default LogoutBtn