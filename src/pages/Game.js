import React from 'react';
import './Game.css'
import useVH from 'react-viewport-height';
import background from '../assets/game_background.png'
import { AiOutlineStar } from "react-icons/ai";
import metazooie from '../assets/metazooie.png'
import studio from '../assets/metazooie.png'
import BottomBar from '../components/bottomBar';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import Header from '../components/Header';

function Game() {

    const random1 = Math.floor(1000 + Math.random() * 9000);
    const random2 = Math.floor(1000 + Math.random() * 9000);
    const random_users = Math.floor(10 + Math.random() * 99);
    
    const random_lead_1 = Math.floor(1000 + Math.random() * 9000);
    const random_lead_2 = Math.floor(1000 + Math.random() * 9000);
    const random_lead_3 = Math.floor(1000 + Math.random() * 9000);
    const random_lead_4 = Math.floor(1000 + Math.random() * 9000);

    // eslint-disable-next-line
    const vh = useVH();
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <div className='gameDiv'>
                    <div className='gameBack'>
                        <img src={background} alt="background_game" className='game_background'></img>
                        <div className='gameback_overlay'></div>
                        <div className='gameBack_inner'>
                            <div className='tags'>
                                <small className='tag'>RPG</small>
                                <small className='tag'>Adventure</small>
                                <small className='tag'>Realistic</small>
                                <small className='tag'>Action</small>
                            </div>
                            <h2>Souls of Nature</h2>
                            <p>Re-born into an animal soul in the first experience-to-earn.</p>
                            <AiOutlineStar className="svg" color='white' size={26} />
                            <div className="studio_div">
                                <Link to="/studio">
                                    <div className='studio'>
                                    <img src={metazooie} alt="logo"></img>
                                    <span>@metazooiestudios</span>
                                    </div>
                                </Link>
                            </div>
                            <button className='game_playbtn'>Play</button>
                        </div>
                    </div>
                    <div className='game_bottom'>
                        <div className='game_stats'>
                            <div className='game_stat'>
                                <b>1,000</b>
                                <h4>Followers</h4>
                            </div>
                            <div className='game_stat'>
                                <b>5th</b>
                                <h4>Rank</h4>
                            </div>
                            <div className='game_stat'>
                                <b>150</b>
                                <h4>Hrs. Played</h4>
                            </div>
                        </div>
                        <div className='game_social'>
                            <div className='game_socialfriends'>
                                <img src="https://source.unsplash.com/random/100x100/?men" alt="friend"></img>
                                <img src="https://source.unsplash.com/random/100x100/?women" alt="friend"></img>
                                <img src="https://source.unsplash.com/random/100x100/?gamer" alt="friend"></img>
                            </div>
                            <p><b>@user_{random1}, @user_{random2}</b> & {random_users} other friends played this game</p>
                        </div>
                    </div>
                    <div className='game_leaderboard'>
                        <h2>Leaderboard</h2>
                        <div className='game_leaderboard_first'>
                            <img src="https://source.unsplash.com/random/100x100/?gaming" alt="first place" className='game_leaderboard_first_img'></img>
                            <p className='game_leaderboard_first_usertag'>@user_{random1}</p>
                            <p className='game_leaderboard_first_score'>8122</p>
                        </div>
                        <div className='game_leaderboard_div'>
                            <small>2</small>
                            <div className='game_leaderboard_div_inner'>
                                <img src="https://source.unsplash.com/random/100x100/?profile" alt="first place" className='game_leaderboard_div_inner_user'></img>
                                <small>@user_{random_lead_1}</small>
                                <p className='game_leaderboard_div_inner_score'>8043</p>
                            </div>
                        </div>
                        <div className='game_leaderboard_div'>
                            <small>3</small>
                            <div className='game_leaderboard_div_inner'>
                                <img src="https://source.unsplash.com/random/100x100/?womengamer" alt="first place" className='game_leaderboard_div_inner_user'></img>
                                <small>@user_{random_lead_2}</small>
                                <p className='game_leaderboard_div_inner_score'>7914</p>
                            </div>
                        </div>
                        <div className='game_leaderboard_div'>
                            <small>4</small>
                            <div className='game_leaderboard_div_inner'>
                                <img src="https://source.unsplash.com/random/100x100/?tech" alt="first place" className='game_leaderboard_div_inner_user'></img>
                                <small>@user_{random_lead_3}</small>
                                <p className='game_leaderboard_div_inner_score'>7420</p>
                            </div>
                        </div>
                        <div className='game_leaderboard_div'>
                            <small>5</small>
                            <div className='game_leaderboard_div_inner'>
                                <img src="https://source.unsplash.com/random/100x100/?game" alt="first place" className='game_leaderboard_div_inner_user'></img>
                                <small>@user_{random_lead_4}</small>
                                <p className='game_leaderboard_div_inner_score'>7281</p>
                            </div>
                        </div>
                    </div>
                    <BottomBar />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className='game_D_Div'>
                    <Header />
                    <div className='game_D_Hero'>
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
                </div>
            </MediaQuery>
        </div>
    );
}

export default Game;