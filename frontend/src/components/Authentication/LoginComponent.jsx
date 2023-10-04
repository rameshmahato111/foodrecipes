import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from "react-icons/ri"
import { ButtonComponent } from "../Common"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: "",
        error:""
    })

    const handleChanage = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const result = await fetch(`https://api.spoonacular.com/users/connect?apiKey=${process.env.REACT_APP_API_KEY}`, {
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(user)
            })
            const res = await result.json()
            localStorage.setItem('user', JSON.stringify(user))
            console.log(res)
            if(!user.username && !user.password){
                toast.warning(`credentials are required`)
            
            }
            else{
                toast.success('you are successfully logged in')
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <>
           <ToastContainer theme='colored' position='top-centerd' />
            <div className='w-full h-screen mx-auto bg-gradient-to-r from-yellow via-purple-500 to-pink-300 px-5 py-32'>
                <div className='max-w-sm h-[500px] mx-auto drop-shdadow-lg bg-black  rounded-2xl py-4'>
                    <form>
                        <h1 className='text-center font-poppins text-white'>Login Here</h1>
                        <div className='relative px-3 mt-3'>
                            <FaUser className='text-gray-400 text-2xl absolute top-4 pl-2' />
                            <input type='email' name='username' id='username' autoComplete='off'
                                placeholder='Email'
                                className='peer w-full h-14 bg-gray-900 focus:ring-0 focus:outline-none focus:border-gray-400 rounded-lg pl-8 text-white placeholder-transparent'
                                value={user.username}
                                onChange={handleChanage}
                            />
                            <label htmlFor="username"

                                className='login-float'

                            >Email</label>
                        </div>

                        <div className='relative px-3 mt-3'>
                            <RiLockPasswordFill className='text-gray-400 text-2xl absolute top-4 pl-2' />
                            <input type='password' name='password' id='password' autoComplete='off'
                                placeholder='Password'
                                className='peer w-full h-14 bg-gray-900 focus:ring-0 focus:outline-none focus:border-gray-400 rounded-lg pl-8 text-white placeholder-transparent'
                                value={user.password}
                                onChange={handleChanage}
                            />
                            <label htmlFor="password"

                                className='login-float'

                            >Password</label>
                        </div>

                        <div className='text-end text-white px-3 py-2'>
                            <Link to={'/forgetpassword'} className='hover:underline decoration-gray-400'>forget password?</Link>
                        </div>

                        <div className='mt-4 text-center px-3'>
                            <ButtonComponent tittle={'Log In'} btnSize={'w-full'} backgroundColor={'bg-blue-500'} textColor={'text-white'} hover={'hover:bg-blue-700'}
                                onClick={handleSubmit}
                            />
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-white text-center py-1'>Sign Up with </h1>
                            <div className='px-3 space-y-3'>
                                <ButtonComponent tittle={'sign up with Google'} btnSize={'w-full'} backgroundColor={'bg-gray-800'} textColor={'text-white'} />
                                <ButtonComponent tittle={'sign up with Facebook'} btnSize={'w-full'} backgroundColor={'bg-gray-800'} textColor={'text-white'} />

                            </div>
                        </div>
                        <div className='text-white px-3 mt-3 font-poppins font-bold'>
                            <h1>Don't have Account? <span className='hover:underline decoration-blue-600'><Link to={'/register'}>Signup</Link></span></h1>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default LoginComponent