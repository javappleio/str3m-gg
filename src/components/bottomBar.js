import React from 'react';
import './bottomBar.css';
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import user from '../assets/user.png'
import {Link} from 'react-router-dom'

function BottomBar() {
  const uid = localStorage.getItem("uid");
  return (
    <div className="bottomBar">
        <Link to={'/'}><AiFillHome color='white' size={28} /></Link>
        {uid? <Link to={'/user'} ><img src={user} alt="user"></img></Link> : <Link to={'/signin'} ><AiOutlineUser color='white' size={28} /></Link>}
        
    </div>
  );
}

export default BottomBar;
