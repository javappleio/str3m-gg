import React from 'react';
import image from '../assets/game_son.png'
import metazooie from '../assets/metazooie.png'
import useVH from 'react-viewport-height';
import {Link} from 'react-router-dom'
import { AiOutlineStar } from "react-icons/ai";

function gameIndex() {

    // eslint-disable-next-line
    const vh = useVH();
  return (
    <div className="App">
      <div className="overlay"></div>
      <img src={image} alt="logo"></img>
      <div className="text">
        <div className='tags'>
          <small className='tag'>RPG</small>
          <small className='tag'>Adventure</small>
          <small className='tag'>Realistic</small>
          <small className='tag'>Action</small>
        </div>
        <Link to={'/game'} style={{ textDecoration: 'none' }}>
          <h2>Souls of Nature</h2>
        </Link>
        <p>Re-born into an animal soul in the first experience-to-earn.</p>
        <AiOutlineStar className="svg" color='white' size={26} />
        <div className="studio_div">
          <Link to={'/studio'} style={{ textDecoration: 'none' }}>
            <div className='studio'>
              <img src={metazooie} alt="logo"></img>
              <span>@metazooiestudios</span>
            </div>
          </Link>
          <button className='studio_followbtn_borded'>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75176 7.2C8.54249 7.2 9.30083 7.51607 9.85996 8.07868C10.4191 8.64129 10.7332 9.40435 10.7332 10.2V11.4C10.7332 11.5591 10.6704 11.7117 10.5586 11.8243C10.4467 11.9368 10.2951 12 10.1369 12C9.97877 12 9.8271 11.9368 9.71528 11.8243C9.60345 11.7117 9.54063 11.5591 9.54063 11.4V10.2C9.54063 9.72261 9.35216 9.26477 9.01668 8.92721C8.68121 8.58964 8.2262 8.4 7.75176 8.4H2.98145C2.50701 8.4 2.052 8.58964 1.71653 8.92721C1.38105 9.26477 1.19258 9.72261 1.19258 10.2V11.4C1.19258 11.5591 1.12976 11.7117 1.01793 11.8243C0.906104 11.9368 0.754435 12 0.596289 12C0.438144 12 0.286475 11.9368 0.174649 11.8243C0.0628231 11.7117 0 11.5591 0 11.4V10.2C0 9.40435 0.314116 8.64129 0.873246 8.07868C1.43238 7.51607 2.19072 7.2 2.98145 7.2H7.75176ZM10.9801 4.2486C11.0871 4.13985 11.2315 4.07638 11.3835 4.07119C11.5355 4.066 11.6838 4.11948 11.7979 4.22068C11.9121 4.32188 11.9834 4.46315 11.9975 4.61557C12.0115 4.768 11.9671 4.92005 11.8733 5.0406L11.8232 5.0976L10.1369 6.7938C10.0342 6.89711 9.89763 6.95916 9.75272 6.96833C9.60781 6.9775 9.46455 6.93315 9.34982 6.8436L9.29377 6.7938L8.45061 5.9454C8.34253 5.83768 8.27946 5.69246 8.2743 5.53947C8.26914 5.38649 8.32229 5.2373 8.42286 5.12245C8.52344 5.0076 8.66384 4.93578 8.81532 4.92168C8.9668 4.90758 9.11791 4.95227 9.23772 5.0466L9.29377 5.0964L9.71534 5.5212L10.9801 4.248V4.2486ZM5.3666 0C6.15733 0 6.91568 0.316071 7.47481 0.87868C8.03394 1.44129 8.34805 2.20435 8.34805 3C8.34805 3.79565 8.03394 4.55871 7.47481 5.12132C6.91568 5.68393 6.15733 6 5.3666 6C4.57588 6 3.81753 5.68393 3.2584 5.12132C2.69927 4.55871 2.38516 3.79565 2.38516 3C2.38516 2.20435 2.69927 1.44129 3.2584 0.87868C3.81753 0.316071 4.57588 0 5.3666 0ZM5.3666 1.2C5.13169 1.2 4.89907 1.24656 4.68203 1.33702C4.465 1.42748 4.2678 1.56006 4.10168 1.72721C3.93557 1.89435 3.8038 2.09278 3.71391 2.31117C3.62401 2.52956 3.57774 2.76362 3.57774 3C3.57774 3.23638 3.62401 3.47044 3.71391 3.68883C3.8038 3.90722 3.93557 4.10565 4.10168 4.27279C4.2678 4.43994 4.465 4.57253 4.68203 4.66298C4.89907 4.75344 5.13169 4.8 5.3666 4.8C5.84104 4.8 6.29605 4.61036 6.63153 4.27279C6.967 3.93523 7.15547 3.47739 7.15547 3C7.15547 2.52261 6.967 2.06477 6.63153 1.72721C6.29605 1.38964 5.84104 1.2 5.3666 1.2Z" fill="white"/>
              </svg>
              Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default gameIndex;