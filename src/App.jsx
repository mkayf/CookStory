import "./App.css";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { login as storeLogin, logout as storeLogout } from "./store/authSlice";
import { useDispatch } from "react-redux";
import authService from "./services/auth";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(storeLogin(userData));
      } else{
        dispatch(storeLogout());
      }
    })
  }, [])

  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer />
    </>
  );
}

export default App;
