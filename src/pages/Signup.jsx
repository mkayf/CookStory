import React, { useState } from "react";
import { Input, Container, Button } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../services/auth";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/authSlice";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createAccount = async (data) => {
    setLoading(true);
    try {
      const userAccount = await authService.createAccount(data);
      if (userAccount) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData));
          navigate("/");
        }
      }
    } catch (e) {
      if (e.type == "user_already_exists") {
        toast('A user already exists with this email. Please try a different one.', {
          type: "error",
          position: "bottom-right",
        });
      } else{
        toast("Failed to create account due to some technical error. Please try again", {
          type : 'error',
          position : 'bottom-right'
        }); 
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="flex justify-center items-center my-10">
      <div className="w-auto sm:w-[350px] p-6 rounded-xl shadow-xl bg-white">
        <h4 className="text-xl md:text-2xl text-black text-center poppins-semibold">
          Create your account
        </h4>
        <div className="mt-6">
          <form onSubmit={handleSubmit(createAccount)}>
            <Input
              label="Full name"
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Full name must contain atleast 3 letters",
                },
                validate: (value) => {
                  return (
                    /^[A-Za-z\s]+$/.test(value) ||
                    "Please enter a valid full name."
                  );
                },
              })}
            />
            {errors.name && (
              <small className="text-red-500">{errors.name.message}</small>
            )}
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
                loading ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-950 border-b-transparent rounded-full animate-spin"></div>
                ) : (
                  "Create"
                )
              }
              disabled={loading ? true : false}
            />
          </form>
        </div>
        <div className="mt-6">
          <p className="poppins-regular text-sm md:text-md">
            Already have an account?
            <Link to="/login">
              <span className="text-[#012f22]"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
