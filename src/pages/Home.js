import React from 'react'
import './Home.css'
import studio from '../assets/metazooie.png'
import friend from '../assets/user_friend_1.png'
import Header from '../components/Header'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='Home_Inner'>
        <Link to="/studio" style={{ textDecoration: 'none', color: 'white' }}>
        <div className='Home_Studio'>
          <img src={studio} alt="Studio profile"></img>
          <p>@metazooiestudios</p>
        </div>
        </Link>
        <h2>GENSHIN<br></br>IMPACT</h2>
        <p>Genshin Impact takes place in the fantasy world of Teyvat, home to seven nations, each of which is tied to a different element and ruled by a different god.</p>
        <div className='Home_Tags'>
          <p>First Person Shooter</p>
          <p>Action</p>
          <p>Ranked</p>
        </div>
      </div>
      <div className='Home_Bottom'>
        <div className='Home_Bottom_Nav'>
          <svg width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 22.5C31.5 22.7415 31.4012 22.9731 31.2254 23.1439C31.0496 23.3146 30.8112 23.4106 30.5626 23.4106H19.7019L23.7271 27.3186C23.8143 27.4033 23.8834 27.5038 23.9306 27.6144C23.9777 27.725 24.002 27.8436 24.002 27.9633C24.002 28.083 23.9777 28.2016 23.9306 28.3122C23.8834 28.4228 23.8143 28.5233 23.7271 28.608C23.64 28.6926 23.5365 28.7598 23.4226 28.8056C23.3087 28.8514 23.1867 28.875 23.0634 28.875C22.9402 28.875 22.8181 28.8514 22.7043 28.8056C22.5904 28.7598 22.4869 28.6926 22.3998 28.608L16.7754 23.1447C16.6881 23.0601 16.6188 22.9596 16.5716 22.849C16.5243 22.7384 16.5 22.6198 16.5 22.5C16.5 22.3802 16.5243 22.2616 16.5716 22.151C16.6188 22.0404 16.6881 21.9399 16.7754 21.8553L22.3998 16.392C22.5758 16.2211 22.8145 16.125 23.0634 16.125C23.3124 16.125 23.5511 16.2211 23.7271 16.392C23.9031 16.563 24.002 16.7949 24.002 17.0367C24.002 17.2785 23.9031 17.5104 23.7271 17.6814L19.7019 21.5895H30.5626C30.8112 21.5895 31.0496 21.6854 31.2254 21.8561C31.4012 22.0269 31.5 22.2585 31.5 22.5Z" fill="white"/>
            <rect x="1.5" y="1.125" width="45" height="42.75" rx="11.25" stroke="white" stroke-width="1.5"/>
          </svg>
          <svg width="48" height="45" viewBox="0 0 48 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 22.5C16.5 22.2585 16.5988 22.0269 16.7746 21.8561C16.9504 21.6854 17.1888 21.5894 17.4374 21.5894L28.2981 21.5895L24.2729 17.6814C24.1857 17.5967 24.1166 17.4962 24.0694 17.3856C24.0223 17.275 23.998 17.1564 23.998 17.0367C23.998 16.917 24.0223 16.7984 24.0694 16.6878C24.1166 16.5772 24.1857 16.4767 24.2729 16.392C24.36 16.3074 24.4635 16.2402 24.5774 16.1944C24.6913 16.1486 24.8133 16.125 24.9366 16.125C25.0598 16.125 25.1819 16.1486 25.2957 16.1944C25.4096 16.2402 25.5131 16.3074 25.6002 16.392L31.2246 21.8553C31.3119 21.9399 31.3812 22.0404 31.4284 22.151C31.4757 22.2616 31.5 22.3802 31.5 22.5C31.5 22.6198 31.4757 22.7384 31.4284 22.849C31.3812 22.9596 31.3119 23.0601 31.2246 23.1447L25.6002 28.608C25.4242 28.7789 25.1855 28.875 24.9366 28.875C24.6876 28.875 24.4489 28.7789 24.2729 28.608C24.0969 28.437 23.998 28.2051 23.998 27.9633C23.998 27.7215 24.0969 27.4896 24.2729 27.3186L28.2981 23.4106L17.4374 23.4105C17.1888 23.4105 16.9504 23.3146 16.7746 23.1439C16.5988 22.9731 16.5 22.7415 16.5 22.5Z" fill="white"/>
            <rect x="46.5" y="43.875" width="45" height="42.75" rx="11.25" transform="rotate(-180 46.5 43.875)" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
        <div className='Home_Bottom_Friends'>
          <div className='Home_Bottom_Friends_Up'>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM14 13.1053C12.0703 13.1053 10.5 11.5113 10.5 9.55263C10.5 7.59395 12.0703 6 14 6C15.9297 6 17.5 7.59395 17.5 9.55263C17.5 11.5113 15.9297 13.1053 14 13.1053ZM21 21H20.2222H7V20.2105C7 17.1639 9.44222 14.6842 12.4444 14.6842H15.5556C18.557 14.6842 21 17.1639 21 20.2105V21Z" fill="white"/>
            </svg>
            <p>Friends playing</p>
          </div>
          <div className='Home_Bottom_Friends_Down'>
            <div className='Home_Bottom_Friends_Down_Div'>
              <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamer' />
              <small>@user_2134</small>
            </div>
            <div className='Home_Bottom_Friends_Down_Div'>
              <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?boy' />
              <small>@user_2134</small>
            </div>
            <div className='Home_Bottom_Friends_Down_Div'>
              <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?girl' />
              <small>@user_2134</small>
            </div>
            <div className='Home_Bottom_Friends_Down_Div'>
              <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?tech' />
              <small>@user_2134</small>
            </div>
          </div>
        </div>
        <div className='Home_Play_Div'>
          <button className='Home_Play'>Play Game</button>
        </div>
      </div>
    </div>
  )
}

export default Home
