import React, { useContext, useState } from 'react';
import logo from '../../../public/login.png'
import bg from '../../../public/Login-background.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

const Login = () => {
    const { signIn, signInWithGoogle, loading, } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // navigate(from, { replace: true });
        
        try {
            await signIn(email, password)
            // navigate(from, { replace: true });
            navigate('/')
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Log In Successfully",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    // google sing in handle function
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            const { data } = await axios.put(`/users`, {

                email: result?.user?.email,
                name: result?.user?.displayName,
                role: 'user'

            })
            console.log(data)
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Sign In Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-md mx-auto">
                    <img src={logo} alt="Login image" className='flex mx-auto h-32' />
                    <h1 className="text-2xl font-bold text-center uppercase">Log <span className='text-[#f57224] '>in</span></h1>
                    <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button
                            disabled={loading}
                            className="block w-full px-1 rounded-md py-3 bg-[#f57224]">
                            {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Login'}
                        </button>
                    </form>
                    <div className="flex items-center pt-1 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300 bg-[#f57224]"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-full bg-[#f57224] dark:bg-[#f57224]"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-2 rounded-sm">
                            <FcGoogle className='text-4xl' />
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link to='/register' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign up</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;