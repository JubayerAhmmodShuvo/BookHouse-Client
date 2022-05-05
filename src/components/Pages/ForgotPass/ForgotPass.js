import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { ToastContainer, toast } from "react-toastify";


const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (sending && email) {
      toast("Sending...");
    }
  }, [sending, email]);
  useEffect(() => {
    if (error) {
      toast("Enter an Email address");
    }
  }, [error]);
  
  return (
    <div className="mx-auto w-52 mt-20 " >
      <input
        className=" w-96 p-3  border-2 border-gray-400 rounded-lg focus:outline-none focus:border-red-500"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <br />
      <ToastContainer />
      <button
        className="btn btn-outline-primary my-4 w-96 "
        onClick={async () => {
          await sendPasswordResetEmail(email);
          setEmail(" ");
        }}
      >
        Reset password
      </button>
    </div>
  );
};

export default ForgotPass;