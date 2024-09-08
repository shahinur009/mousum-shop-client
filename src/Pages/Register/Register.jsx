import React, { useContext } from 'react';
import logo from '../../../public/login.png'
import bg from '../../../public/Login-background.jpg'
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle, loading } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    // Register handler
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axios.post('http://localhost:5000/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to database')

                                    reset()
                                    Swal.fire({
                                        position: "top",
                                        icon: "success",
                                        title: "Sign up Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    }

    // // google signIn
    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axios.post('http://localhost:5000/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }
    return (
        <>
            <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-2xl mx-auto">
                    <img src={logo} alt="Login image" className='flex mx-auto h-32' />
                    <h1 className="text-2xl font-bold text-center uppercase">Regis<span className='text-[#f57224] '>Ter</span></h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-600">Username</label>
                            <input type="text"
                                defaultValue="" {...register("name", { required: true })}
                                name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="mobile" className="block dark:text-gray-600">Mobile</label>
                            <input type="tel" pattern='[0-9]{11}'
                                defaultValue="" {...register("mobile", { required: true })}
                                name="mobile" id="mobile" placeholder="Your Mobile" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                            {errors.mobile && <span className="text-red-600">Phone Number is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                            <input type="email"
                                defaultValue="" {...register("email", { required: true })}
                                name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                            {errors.email && <span className="text-red-600">Phone Number is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password"
                                defaultValue="" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    
                                })}
                                id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600" />
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                            {errors.password && <span className="text-red-600">Password must be 6 characters</span>}
                        </div>
                        <button className="block w-full px-1 rounded-md py-3 bg-[#f57224]">
                            {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Register'}
                        </button>
                    </form>
                    <div className="flex items-center pt-1 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300 bg-[#f57224]"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-full bg-[#f57224] dark:bg-[#f57224]"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handelGoogleSignIn} aria-label="Log in with Google" className="p-2 rounded-sm">
                            <FcGoogle className='text-4xl' />
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do you have an account?
                        <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">LogIn</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;