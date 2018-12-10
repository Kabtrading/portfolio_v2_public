import React from 'react';
import Header from '../components/mainLanding/Header'

import About from '../components/mainLanding/About';
import TechStack from '../components/mainLanding/TechStack';
import Projects from '../components/mainLanding/Projects';
import Contact from '../components/mainLanding/Contact';
import SocialLinks from '../components/mainLanding/SocialLinks';
import Skills from '../components/mainLanding/Skills';
import Counters from '../components/dataTrack/Counters'
import LoginPanel from '../components/mainLanding/LoginPanel'

// const Spacer = <div className='spacer'></div>;

const Landing = (props) => (
                <div className='mainLanding'>
                        {Header}
                        {About}
                        {TechStack}
                        {Skills}
                        <Projects/>
                        <Contact sendData={props.sendData}/>
                        {SocialLinks}
                        
                        {props.pageViews &&
                        <Counters pageViews={props.pageViews}/>
                        }

                        <LoginPanel {...props}/>
                        
                </div>
            )

    
export default Landing;

