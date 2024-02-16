import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'
import { LuEye, LuEyeOff } from "react-icons/lu";


function Login() {
  const [user, setUser] = useState({
    username : "",
    password : ""
  })
  const [isPassword, setIsPassword] = useState(true);

  const navigate = useNavigate();

  const changeHandler = (e) =>{
    setUser({...user,
      [e.target.name] : e.target.value
      })
  }
  
  const submitHandler = async (e) =>{
    e.preventDefault();

    axios.post('https://dummyjson.com/auth/login', user)
    .then((response)=>{
      console.log(response.data)
      if(response.data.success){
        toast.success(response.data.message);
        navigate('/');
      }
      else{
        toast.error(response.data.message);
      }

    })
    .catch((error)=>{
      console.log(error);
      toast.error('Something wend wrong')
    });

  }
  return (
    <>
      <section className="bg-gray-50 pb-8">
        <div className="flex justify-center h-auto">
          <div className="w-full max-w-md bg-white rounded-lg shadow dark:border   mt-9">
            <div className="p-6 space-y-4 md:space-y-6">
              <div className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 ">
                Build With Innovation
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                    username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    value={user.username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your username"
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <div className='flex items-center'>
                  <input
                    type={isPassword ? 'password' : 'text'}
                    name="password"
                    id="password"
                    onChange={changeHandler}
                    value={user.password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    />
                    {isPassword ? <LuEye className='w-9 -m-10' onClick={()=>setIsPassword(!isPassword)}/> : <LuEyeOff className='w-9 -m-10'  onClick={()=>setIsPassword(!isPassword)}/>}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link to="/forgotpassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  name='submit'
                  className="w-full text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <Link to="/CreateAccount" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;