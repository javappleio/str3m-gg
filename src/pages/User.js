import React, { useEffect } from 'react';
import './User.css'
import useVH from 'react-viewport-height';
import background from '../assets/user_background.png'
import profile from '../assets/user.png'
import game1 from '../assets/favourite_1.png'
import game2 from '../assets/favourite_2.png'
import userdfav1 from '../assets/user_d_fav_1.png'
import userdfav2 from '../assets/user_d_fav_2.png'
import comingSoon from '../assets/coming_soon.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MediaQuery from 'react-responsive'
import Header from '../components/Header'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import BottomBar from '../components/bottomBar';
import { useNavigate, Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function User() {

    const random = Math.floor(1000 + Math.random() * 90000);
    const random1 = Math.floor(1000 + Math.random() * 9000);
    const random2 = Math.floor(1000 + Math.random() * 9000);
    const random3 = Math.floor(1000 + Math.random() * 9000);
    const random4 = Math.floor(1000 + Math.random() * 9000);
    const random5 = Math.floor(1000 + Math.random() * 9000);
    const random6 = Math.floor(1000 + Math.random() * 9000);

    let navigate = useNavigate()

    const uid = localStorage.getItem("uid");

    useEffect(() => {
        if(uid) {
        } else {
            navigate('/signin')
        }
    })

    const logOut = () => {
        localStorage.clear()
        navigate('/')
    }

    // eslint-disable-next-line
    const vh = useVH();
    return (
        <div>
            <MediaQuery maxWidth={767}>
                <div className='userDiv'>
                    <BiLogOut color='black' size={28} className='user_logout' onClick={logOut} />
                    <img src={background} alt="background_user" className='user_background'></img>
                    <div className='user_info'>
                        <img src={profile} alt="user_profile" className='user_profile'></img>
                        <h3>Yev Ledenov</h3>
                        <h6>@user_{random}</h6>
                        <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing et aliquet at ut non ac.</p>
                    </div>
                    <div className='user_friends'>
                        <div>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamer' className='user_friend' />
                            <h6>@user_{random1}</h6>
                        </div>
                        <div>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamergirl' className='user_friend' />
                            <h6>@user_{random2}</h6>
                        </div>
                        <div>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?profile' className='user_friend' />
                            <h6>@user_{random3}</h6>
                        </div>
                        <div>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?tech' className='user_friend' />
                            <h6>@user_{random4}</h6>
                        </div>
                        <div>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?girl' className='user_friend' />
                            <h6>@user_{random5}</h6>
                        </div>
                        <div>
                            <img src="https://source.unsplash.com/random/100x100/" alt="user_friend" className='user_friend'></img>
                            <h6>@user_{random6}</h6>
                        </div>
                    </div>
                    <Tabs>
                        <TabList>
                        <Tab>Favorites</Tab>
                        <Tab>Collectibles</Tab>
                        </TabList>

                        <TabPanel>
                            <div className='user_favourites'>
                            <Link to={'/game'}>
                                <div className='user_favourites_item'>
                                    <img src={game2} alt="favourite game" className='user_favourites_img'></img>
                                    <div className='user_favourites_text'>
                                        <div className='user_favourites_text_tabs'>
                                            <small>FPS</small>
                                            <small>Action</small>
                                            <small>Ranked</small>
                                        </div>
                                        <h4>Souls of Nature</h4>
                                        <h6>@metazooiestudios</h6>
                                    </div>
                                </div>
                            </Link>
                                <div className='user_favourites_item'>
                                    <img src={game1} alt="favourite game" className='user_favourites_img'></img>
                                    <div className='user_favourites_text'>
                                        <div className='user_favourites_text_tabs'>
                                            <small>FPS</small>
                                            <small>Action</small>
                                            <small>Ranked</small>
                                        </div>
                                        <h4>Caesarverse</h4>
                                        <h6>@metazooiestudios</h6>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='user_comingsoon'>
                                <img src={comingSoon} alt="Coming Soon" className='user_favourites_comingsoon'></img>
                                <h4>Coming Soon</h4>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <BottomBar></BottomBar>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
                <div className='user_D_Div'>
                    <Header />
                    <div className='user_D_background user_D_ProfileDiv'>
                        <img src={profile} alt="user_profile" className='user_D_profile'></img>
                        <h2>Yev Ledenov</h2>
                        <small>@user_{random}</small>
                        <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing et aliquet at ut non ac.</p>
                    </div>
                    <div className='user_D_background user_D_FriendsDiv'>
                        <h2>Online Friends</h2>
                        <div className='user_D_FriendsDiv_Row'>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamer' className='user_profile' />
                                <small>@user_{random1}</small>
                            </div>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamergirl' className='user_profile' />
                                <small>@user_{random2}</small>
                            </div>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?tech' className='user_profile' />
                                <small>@user_{random3}</small>
                            </div>
                        </div>
                        <div className='user_D_FriendsDiv_Row'>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?profile' className='user_profile' />
                                <small>@user_{random4}</small>
                            </div>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?men' className='user_profile' />
                                <small>@user_{random5}</small>
                            </div>
                            <div className='user_D_FriendsDiv_Row_Div'>
                            <LazyLoadImage alt="user_friend" effect='blur' src='https://source.unsplash.com/random/100x100/?gamer' className='user_profile' />
                                <small>@user_{random6}</small>
                            </div>
                        </div>
                    </div>
                    <div className='user_D_background user_D_DashDiv'>
                        <h2>Favourite games</h2>
                        <div className='user_D_DashDiv_Carousel'>
                            <Splide options={ {
                                perPage: 2,
                                padding: {right: 100},
                                arrows: false,
                                pagination: false
                            }} aria-label="My Favorite Images">
                                <SplideSlide>
                                    <div className='user_D_DashDiv_SplideDiv' style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%), url(${userdfav1})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                        <div className='user_D_DashDiv_SplideDiv_Tags'>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>FPS</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Adventure</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Ranked</p>
                                        </div>
                                        <h3>Genshin Impact</h3>
                                        <h4>@metazooiestudios</h4>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className='user_D_DashDiv_SplideDiv' style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%), url(${userdfav2})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                        <div className='user_D_DashDiv_SplideDiv_Tags'>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>FPS</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Adventure</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Ranked</p>
                                        </div>
                                        <h3>Genshin Impact</h3>
                                        <h4>@metazooiestudios</h4>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className='user_D_DashDiv_SplideDiv' style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 100%), url(${userdfav1})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                                        <div className='user_D_DashDiv_SplideDiv_Tags'>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>FPS</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Adventure</p>
                                            <p className='user_D_DashDiv_SplideDiv_Tag'>Ranked</p>
                                        </div>
                                        <h3>Genshin Impact</h3>
                                        <h4>@metazooiestudios</h4>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                        <div className='user_D_DashDiv_Activity'>
                            <h2>Recent Activity</h2>
                            <div className='user_D_DashDiv_ActivityRow'>
                                <div className='user_D_DashDiv_ActivityRow_Div'>
                                    <img src={userdfav1} alt="Recent Activity"></img>
                                    <div className='user_D_DashDiv_ActivityRow_Div_Right'>
                                        <h3>Genshin Impact</h3>
                                        <p>Archieved the 5th place on the leaderboard!</p>
                                    </div>
                                    <b>30 min ago</b>
                                </div>
                                <div className='user_D_DashDiv_ActivityRow_Div'>
                                    <img src={userdfav1} alt="Recent Activity"></img>
                                    <div className='user_D_DashDiv_ActivityRow_Div_Right'>
                                        <h3>Genshin Impact</h3>
                                        <p>Archieved the 5th place on the leaderboard!</p>
                                    </div>
                                    <b>30 min ago</b>
                                </div>
                            </div>
                            <div className='user_D_DashDiv_ActivityRow'>
                                <div className='user_D_DashDiv_ActivityRow_Div'>
                                    <img src={userdfav1} alt="Recent Activity"></img>
                                    <div className='user_D_DashDiv_ActivityRow_Div_Right'>
                                        <h3>Genshin Impact</h3>
                                        <p>Archieved the 5th place on the leaderboard!</p>
                                    </div>
                                    <b>30 min ago</b>
                                </div>
                                <div className='user_D_DashDiv_ActivityRow_Div'>
                                    <img src={userdfav1} alt="Recent Activity"></img>
                                    <div className='user_D_DashDiv_ActivityRow_Div_Right'>
                                        <h3>Genshin Impact</h3>
                                        <p>Archieved the 5th place on the leaderboard!</p>
                                    </div>
                                    <b>30 min ago</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

export default User;