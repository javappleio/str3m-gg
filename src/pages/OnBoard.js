import React, { useState } from 'react'
import './OnBoard.css'
import useVH from 'react-viewport-height'
import ob_1 from '../assets/onboard_1.png'
import { AiFillCaretRight } from "react-icons/ai";

const OnBoard = () => {

    const [isActive1, setActive1] = useState("false");

    const handleToggle1 = () => {
        setActive1(!isActive1);
    };
    
    const [isActive2, setActive2] = useState("false");

    const handleToggle2 = () => {
        setActive2(!isActive2);
    };
    
    const [isActive3, setActive3] = useState("false");

    const handleToggle3 = () => {
        setActive3(!isActive3);
    };
    
    const [isActive4, setActive4] = useState("false");

    const handleToggle4 = () => {
        setActive4(!isActive4);
        localStorage.setItem("onboard","true")
    };

    // eslint-disable-next-line
    const vh = useVH();
    
    const onboard_ls = localStorage.getItem("onboard");

    if(onboard_ls) {
        
    } else {
        return (
          <div className={isActive4 ? 'onboard_div' : 'onboard_div_disabled'}>
              <div className={isActive1 ? 'onboard_inner ob_active' : 'onboard_inner'} id='ob_one'>
                  <img src={ob_1} alt="OnBoard" className='ob_image'></img>
                  <div className='onboard_bottom'>
                      <h2>Swipe down to browse games</h2>
                      <p>Find new releases, classics and your favorite titles.</p>
                      <button onClick={handleToggle1} className='onboard_button'>
                          <AiFillCaretRight className='ob_svg' color='white' size={22} />
                      </button>
                  </div>
              </div>
              <div className={isActive2 ? 'onboard_inner ob_active' : 'onboard_inner'} id='ob_two'>
                  <img src={ob_1} alt="OnBoard" className='ob_image'></img>
                  <div className='onboard_bottom'>
                      <h2>Swipe right to play</h2>
                      <p>Click on names to open the game’s profile and the game studio’s details.</p>
                      <button onClick={handleToggle2} className='onboard_button'>
                          <AiFillCaretRight className='ob_svg' color='white' size={22} />
                      </button>
                  </div>
              </div>
              <div className={isActive3 ? 'onboard_inner ob_active' : 'onboard_inner'} id='ob_three'>
                  <img src={ob_1} alt="OnBoard" className='ob_image'></img>
                  <div className='onboard_bottom'>
                      <h2>Learn about games & creators</h2>
                      <p>Click on names to open the game’s profile and the game studio’s details.</p>
                      <button onClick={handleToggle3} className='onboard_button'>
                          <AiFillCaretRight className='ob_svg' color='white' size={22} />
                      </button>
                  </div>
              </div>
              <div className={isActive4 ? 'onboard_inner ob_active' : 'onboard_inner'} id='ob_four'>
                  <img src={ob_1} alt="OnBoard" className='ob_image'></img>
                  <div className='onboard_bottom'>
                      <h2>Like & follow your favs</h2>
                      <p>Save your favorites in one place with one click.</p>
                      <button onClick={handleToggle4} className='onboard_button'>
                          <AiFillCaretRight className='ob_svg' color='white' size={22} />
                      </button>
                  </div>
              </div>
      
          </div>
        )
    }
}

export default OnBoard