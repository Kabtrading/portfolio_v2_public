import React from 'react';
import Contact from '../components/mainLanding/Contact';

const ContactView = (props) => (
            <div className='animated slideInUp'>
                <Contact sendData={props.sendData}/>
            </div>
        )
    
export default ContactView;