import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signInAnonymously } from 'firebase/auth';
import logo from '../assets/logostr3m.png'
import useVH from 'react-viewport-height';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignIn = () => {

    let navigate = useNavigate()
    
    // eslint-disable-next-line
    const vh = useVH();

    const [value, setValue] = useState('')

    // const handleClick = () => {
    //     signInWithPopup(auth,provider).then((data) => {
    //         setValue(data.user.email)
    //         localStorage.setItem("email",data.user.email)
    //     })
    // }

    // useEffect(() => {
    //     setValue(localStorage.getItem("email"))
    // })
    
    const handleClick = () => {
        signInAnonymously(auth).then((data) => {
            setValue(data.user.uid)
            localStorage.setItem("uid",data.user.uid)
            window.location.reload()

        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    const uid = localStorage.getItem("uid");

    useEffect(() => {
        setValue(localStorage.getItem("uid"))
        if(uid) {
            navigate('/user')
        }
    })

    
  return (
    <div className='signIn'>
        <AiOutlineArrowLeft color='white' size={24} className='signin_back' onClick={() => navigate('/')} />
        <div className='signIn_Inner'>
            <img src={logo} alt="Logo" className='signIn_Logo'></img>
            <p>Create an account or login to start playing</p>
            <div className='signIn_btn google_btn' onClick={handleClick}>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2638 4.87485C12.3388 5.27651 12.3796 5.69646 12.3796 6.1347C12.3796 9.56258 10.0854 12 6.62036 12C5.83236 12.0002 5.05204 11.8452 4.32398 11.5438C3.59591 11.2423 2.93438 10.8004 2.37718 10.2432C1.81999 9.68598 1.37804 9.02445 1.0766 8.29638C0.775152 7.56832 0.620121 6.788 0.620362 6C0.620121 5.212 0.775152 4.43168 1.0766 3.70362C1.37804 2.97555 1.81999 2.31402 2.37718 1.75682C2.93438 1.19962 3.59591 0.757677 4.32398 0.456234C5.05204 0.154791 5.83236 -0.000239977 6.62036 2.78821e-07C8.24043 2.78821e-07 9.59415 0.596099 10.6328 1.564L8.94137 3.25538V3.25112C8.31175 2.65136 7.51268 2.34356 6.62036 2.34356C4.64068 2.34356 3.03158 4.01605 3.03158 5.99634C3.03158 7.97603 4.64068 9.65217 6.62036 9.65217C8.41658 9.65217 9.63925 8.62515 9.89037 7.21475H6.62036V4.87485H12.2644H12.2638Z" fill="#181818"/>
                </svg>
                <span>Continue with Google</span>
            </div>
            <div className='signIn_btn twitter_btn'>
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0895 1.61898C13.5762 1.85231 13.0228 2.00564 12.4495 2.07898C13.0362 1.72564 13.4895 1.16564 13.7028 0.492311C13.1495 0.825645 12.5362 1.05898 11.8895 1.19231C11.3628 0.618978 10.6228 0.285645 9.78282 0.285645C8.21616 0.285645 6.93615 1.56564 6.93615 3.14564C6.93615 3.37231 6.96282 3.59231 7.00949 3.79898C4.63616 3.67898 2.52282 2.53898 1.11616 0.812311C0.869489 1.23231 0.729489 1.72564 0.729489 2.24564C0.729489 3.23898 1.22949 4.11898 2.00282 4.61898C1.52949 4.61898 1.08949 4.48564 0.702822 4.28564V4.30564C0.702822 5.69231 1.68949 6.85231 2.99616 7.11231C2.57664 7.22712 2.13622 7.24309 1.70949 7.15898C1.89056 7.7273 2.24518 8.22458 2.7235 8.58093C3.20182 8.93728 3.77979 9.13477 4.37616 9.14565C3.36524 9.94594 2.11215 10.3785 0.822822 10.3723C0.596156 10.3723 0.369489 10.359 0.142822 10.3323C1.40949 11.1456 2.91616 11.619 4.52949 11.619C9.78282 11.619 12.6695 7.25898 12.6695 3.47898C12.6695 3.35231 12.6695 3.23231 12.6628 3.10564C13.2228 2.70564 13.7028 2.19898 14.0895 1.61898Z" fill="white"/>
                </svg>
                <span>Continue with Twitter</span>
            </div>
            <div className='signIn_btn apple_btn'>
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.93718 0.622748C8.9058 0.587671 7.77503 0.636594 6.79102 1.7046C5.80702 2.77168 5.95841 3.99568 5.98056 4.02706C6.00272 4.05845 7.38364 4.10737 8.26518 2.86583C9.14672 1.62429 8.96857 0.658748 8.93718 0.622748ZM11.9963 11.4532C11.952 11.3646 9.85011 10.3142 10.0458 8.29446C10.2415 6.27384 11.592 5.71999 11.6132 5.65999C11.6344 5.59999 11.0621 4.93076 10.4556 4.59199C10.0104 4.35314 9.51755 4.2163 9.01288 4.19137C8.91318 4.1886 8.56703 4.10368 7.85533 4.29845C7.38641 4.42676 6.32948 4.84214 6.03871 4.85876C5.74702 4.87537 4.87933 4.37691 3.94609 4.24491C3.34886 4.12953 2.71563 4.36583 2.2624 4.54768C1.81009 4.7286 0.94978 5.24368 0.347932 6.61261C-0.253915 7.98061 0.0608547 10.148 0.286086 10.8218C0.511317 11.4948 0.86301 12.5979 1.46117 13.4028C1.99286 14.3111 2.69809 14.9416 2.99255 15.1557C3.28702 15.3699 4.11779 15.512 4.69379 15.2176C5.15717 14.9332 5.99348 14.7699 6.32395 14.7819C6.65349 14.7939 7.30333 14.924 7.96887 15.2794C8.49595 15.4612 8.99441 15.3856 9.4938 15.1825C9.99319 14.9785 10.716 14.2049 11.5597 12.6366C11.88 11.9074 12.0258 11.5132 11.9963 11.4532Z" fill="white"/>
                </svg>
                <span>Continue with Apple</span>
            </div>
            <div className='signIn_btn facebook_btn'>
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33333 9.2H7.2381L8 6H5.33333V4.4C5.33333 3.576 5.33333 2.8 6.85714 2.8H8V0.112C7.75162 0.0776001 6.81371 0 5.82324 0C3.75467 0 2.28571 1.3256 2.28571 3.76V6H0V9.2H2.28571V16H5.33333V9.2Z" fill="white"/>
                </svg>
                <span>Continue with Facebook</span>
            </div>
        </div>
    </div>
  )
}

export default SignIn