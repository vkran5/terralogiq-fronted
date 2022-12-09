import React, { useState } from "react";
import cover from '../assets/Cover.png'
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { VscError } from "react-icons/vsc";
import axios from "axios";
import {
    Input,
    InputGroup,
    InputRightElement,
    Spinner
} from '@chakra-ui/react'

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [IsSuccess, setIsSuccess] = useState(true)

    const navigate = useNavigate();

    const btnSignUp = async () => {
        try {

            let res = await axios.post('http://localhost:8000/auth/login', {
                username,
                password
            });

            if (res.data.success) {

                localStorage.setItem('terralogiqLog', res.data.token);
                res.data.role === 'admin' ? navigate('/admin') : navigate('/home');
                setIsLoading(false);

            } else {
                setIsSuccess(false)
                setIsLoading(false);
            }

        } catch (error) {
            console.log(error);
            setIsSuccess(false)
            setIsLoading(false);
        };

    }

    return (
        <>
            {/* Alert jika gagal login */}
            <div className={`${!IsSuccess ? 'flex' : 'hidden'} absolute top-0 bg-red-200 h-[80px] w-screen items-center `} >
                {
                    !IsSuccess &&
                    <div className="w-3/4 px-10 mx-auto flex">
                        <VscError className=' mt-[4px] mr-2 text-red-600 text-[18px]' />
                        <p className="w-1/2 text-[18px]">Sign up failed, please check you credential </p>
                    </div>
                }

            </div>

            <div className="h-screen md:flex">

                <div className="w-2/3">
                    <img className="h-screen hidden md:inline" src={cover} alt="" />
                </div>

                <div className="lg:w-2/3 mt-10 md:mt-1 w-screen flex items-center">
                    <div className="mx-auto ">

                        <h1 className="text-center text-[24px] font-medium mb-7">Sign in</h1>

                        <p className="py-1">Username or email</p>

                        <InputGroup>
                            <Input
                                className="py-3"
                                size="md"
                                backgroundColor="white"
                                pr="4.5rem"
                                type='text'
                                placeholder="youremail@mail.com"
                                _placeholder={{ color: "grey" }}
                                _focusVisible={{ outline: '2px solid #cd4c4c' }}
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            />
                        </InputGroup>

                        <p className="py-1 mt-4">Password</p>

                        <InputGroup>
                            <Input
                                className="py-3"
                                size="md"
                                backgroundColor="white"
                                pr="4.5rem"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="your password"
                                _placeholder={{ color: "grey" }}
                                _focusVisible={{ outline: '2px solid #cd4c4c' }}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <InputRightElement>
                                {showPassword ? <AiFillEyeInvisible className="text-[18px] text-[#cd4c4c] cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} /> : <AiFillEye className="text-[18px] text-[#cd4c4c] cursor-pointer" onClick={() => { setShowPassword(!showPassword) }} /> }
                            </InputRightElement>
                        </InputGroup>

                        <button
                            className={`mx-auto border text-white py-3 w-[320px] mt-7 bg-[#cd4c4c] hover:bg-[#b54346] ${isLoading ? 'cursor-not-allowed' : ''}`}
                            onClick={() => {
                                setIsLoading(true);
                                setTimeout(() => {
                                    btnSignUp();
                                }, 2000)
                            }}
                        >
                            {isLoading ? <Spinner size='sm' color='red.300' /> : "Sign in"}
                        </button>

                        <div className="text-center">
                            <p className="my-6 text-slate-500">or sign in with</p>
                            <FcGoogle className="text-[34px] mx-auto my-6" />
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
};

export default LoginPage;