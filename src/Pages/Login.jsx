import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiOutlineGoogle, AiFillApple } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import {signInWithEmailAndPassword} from 'firebase/auth'
// import { auth } from '../firebase';

function Login() {
  //   const [err, setErr] = useState(false);
  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // try {
    //   await signInWithEmailAndPassword(auth, email, password)
    //   navigate('/')
    // } catch (err) {
    //   setErr(true);
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col gap-8 items-start justify-center xs:w-4/5 lg:w-3/6 w-6/12">
        
        <div>
          <h3 className="text-xl font-bold">Hello</h3>
          <p className=" text-[14px] font-semibold flex items-center justify-center gap-3">

            Sign in to u4buy or 
            <Link to="/register">
            <h1 className="text-blue-500">Create account</h1>
            </Link>
            {/* Sign in to ebay or <Link to="/register">create an account</Link> */}
          </p>
        </div>
        <form className="flex flex-col gap-5 w-full">
          <input
            className="focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="focus:ring-2 focus:ring-teal-300 border-solid border-[1px] rounded-lg p-1 px-2 ring-1 ring-gray-300 outline-none"
            type="password"
            placeholder="Password"
          />
          {/* {err && <span>Something went wrong</span>} */}
          <button
            className="bg-gray-400 text-gray-50 p-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-gray-500
                                "
          >
            Continue
          </button>
          <div class="relative flex justify-center py-1 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-2 text-gray-400">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>

          <button
            className="flex flex-row border-2 rounded-full focus px-2 items-center justify-center py-2 gap-2 bg-blue-500 hover:bg-slate-200 text-white"
          >
            <AiFillFacebook size={40} style={{color: 'white'}}/>
            
            Continue with Facebook
          </button>
          <button
            className="flex flex-row border-2 rounded-full focus px-2 items-center justify-center py-2 gap-2 hover:bg-slate-200"
          >
           <AiOutlineGoogle size={40}/>
            Continue with Google
          </button>
          <button
            className="flex flex-row border-2 rounded-full focus px-2 items-center justify-center py-2 gap-2 hover:bg-slate-200"
          >
            <AiFillApple size={40}/>
            Continue with Apple
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
