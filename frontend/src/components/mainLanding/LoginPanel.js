import React from 'react';
import {Link} from 'react-router-dom';
// import auth0Client from '../../auth/Auth'


const LoginPanel = (props) => {
    return(
        <div className='justify-content-center text-center'>
            <div className=' login ' style={{ color: '#000'}}>
                {!props.isAdminLoggedIn && 
                    <Link to='/login'><button className="btn btn-dark">Sign In</button></Link>
                }
            </div>
            {props.isAdminLoggedIn &&
                <div>
                    <label className="mr-2 text-white">Admin name</label>
                    <button className="btn btn-dark" onClick={props.adminLogout}>Sign Out</button>
                </div>
            }
        </div>
    )
    
    }

export default LoginPanel