import React, { useState } from 'react'
import { Container } from '../components'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Input, Button} from '../components';
import { Link } from 'react-router-dom';
import authService from '../services/auth';
import { login as storeLogin } from '../store/authSlice';
import { toast } from 'react-toastify';

function Login() {

    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState : {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginUser = async (data) => {
        setLoading(true);
        try{
            const session = await authService.login(data);
            if(session){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(storeLogin(userData));
                    navigate('/');
                    toast('You are logged in.', {
                        type : 'success',
                        position : 'bottom-right'
                    })
                }
            }
        }
        catch(e){
            if(e.type == "user_invalid_credentials"){
                toast(e.message, {
                    type : 'error',
                    position : 'bottom-right'
                })
            } else{
                toast('Failed to login due to some technical error. Please try again', {
                    type : 'error',
                    position : 'bottom-right'
                })
            }
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <Container className="flex justify-center items-center my-10">
        <div className="w-auto sm:w-[350px] p-6 rounded-xl shadow-xl bg-white">
        <h4 className="text-xl md:text-2xl text-black text-center poppins-semibold">
          Login to your account
        </h4>
        <div className="mt-6">
          <form onSubmit={handleSubmit(loginUser)}>
            <Input
              type="email"
              label="Email"
              {...register("email", {
                required: "Email is required.",
                validate: (value) => {
                  return (
                    /^[^\s][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Please enter a valid email address."
                  );
                },
              })}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
            <Input
              type="password"
              label="Password"
              {...register("password", {
                required: "Password is required.",
                validate: (value) => {
                  return (
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                      value
                    ) ||
                    "Password must be at least 8 characters long and include uppercase, lowercase, number, and a special character and no spaces."
                  );
                },
              })}
            />
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
            <Button
              type="submit"
              className="mt-6 w-full !py-2.5 "
              text={
                loading ? (<div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-950 border-b-transparent rounded-full animate-spin"></div>) : 'Login'
              }
              disabled={
                loading ? true : false
              }
            />
          </form>
        </div>
        <div className="mt-6">
          <p className="poppins-regular text-sm md:text-md">
            Don't have an account?
            <Link to="/signup">
              <span className="text-[#012f22]"> Signup</span>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Login