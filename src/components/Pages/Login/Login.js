import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import logo from "../../images/logobook1.png";
import "./Login.css";

import { ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  const from = location?.state?.from?.pathname || "/";
  if (googleUser || githubUser) {
    navigate(from, {replace: true});
  }

  if (user  ) {
   // navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />;
  }

  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Please enter correct password" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };
  const handleUserLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    

    await signInWithEmailAndPassword(userInfo.email, userInfo.password);
    const { data } = await axios.post("https://quiet-harbor-16613.herokuapp.com/login", { email });
    localStorage.setItem("user", data.accessToken);
    navigate(from, { replace: true });
   
  };
 

  return (
    <div className=" h-full mb-24">
      <div className=" bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
      <div className="  mx-auto lg:w-5/12">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
          <div className="">
            <a href=" ">
              <img
                src={logo}
                className="w-32 rounded mx-auto"
                alt="bookhouse logo"
              />
            </a>
            <p className="font-bold text-lg text-purple-900	 text-center mt-6">
              Welcome to BookHouse ! Login first
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <button
              onClick={() => signInWithGoogle()}
              className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200"
            >
              <div className="flex gap-4 justify-center">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#EA4335 "
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>

                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  with Google
                </span>
              </div>
            </button>
            <button
              onClick={() => signInWithGithub()}
              className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700"
            >
              <div className="flex gap-4 items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="block w-max font-medium tracking-wide text-sm text-white">
                  with Github
                </span>
              </div>
            </button>
          </div>

          <div className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form onSubmit={handleUserLogin} className="space-y-6 py-6">
            <div>
              <input
                onBlur={handleEmailBlur}
                ref={emailRef}
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {errors?.email && (
                <p className="alert alert-danger mt-3">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col items-end">
              <input
                onBlur={handlePasswordBlur}
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
              />
              {errors?.password && (
                <p className="alert alert-danger mt-3">{errors?.password}</p>
              )}
            </div>
            <div className="  flex flex-col items-end">
              <Link to="/forgotpass" className="w-max mt-3 text-end ">
                <span className="text-lg tracking-wide text-red-600">
                  Forgot password ?
                </span>
              </Link>
            </div>

            <ToastContainer />

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="w-1/2 px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span className="font-semibold text-white text-lg">Login</span>
              </button>
            </div>
          </form>
          <div className="">
            <p className="text-lg">
              Don't have an account?
              <Link to="/signup" className="w-full mt-3 ">
                <span className="text-xl tracking-wide text-center ml-2 text-purple-600">
                  SignUp
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
