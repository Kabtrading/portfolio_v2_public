import React from 'react';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom'
// import Typing from 'react-typing-animation';


const Header = 
                    <div className='landing'>
                        <Grid className='landingGrid'>
                            <Cell col={12}>
                                <div  className='bannerContainer'>
                                
                                    <div>
                                        {/* <Typing speed={75}> */}
                                            <div className='bannerText'>
                                                <span>DREW</span><span> BEAUPRE</span>
                                                {/* <Typing.Delay ms={1000} /> */}
                                                <p>WEB DEVLOPER</p>
                                                    {/* <Typing.Delay ms={1000}/> */}
                                                <Link to='/contact'>
                                                <div className="button_base b05_3d_roll">
                                                    <div>Contact</div>
                                                    <div>Contact</div>
                                                </div>
                                                </Link>
                                                <p><i className="fas fa-arrow-down"></i></p>
                                            </div>
                                        {/* </Typing> */}
                                    </div>
                                </div>
                            </Cell>
                        </Grid>
                    </div>

export default Header;