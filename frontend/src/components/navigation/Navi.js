import React, {Component} from 'react';
import {Link} from 'react-router-dom';



class Navi extends Component {
    state = {
        activeLink: 0
    }

    setActive = (id) => {
        this.setState({
            activeLink: parseInt(id)
        })
    }
    
    render(){
        const Links = 
            <nav className="nav nav-pills justify-content-center">
                <Link className={`nav-item nav-link text-white ${this.state.activeLink === 0 ? 'active animated fadeIn slow' : ''}`} 
                        id={0} 
                        onClick={(e) => this.setActive(e.target.id)}to='/'>Home
                </Link>
                <Link className={`nav-item nav-link text-white ${this.state.activeLink === 1 ? 'active animated fadeIn slow' : ''}`} 
                        id={1} 
                        onClick={(e) => this.setActive(e.target.id)} to='/resume'>Resume
                </Link>
                <Link className={`nav-item nav-link text-white ${this.state.activeLink === 2 ? 'active animated fadeIn slow' : ''}`} 
                        id={2} 
                        onClick={(e) => this.setActive(e.target.id)} to='/blog'>Blog
                </Link>
                <Link className={`nav-item nav-link text-white ${this.state.activeLink === 3 ? 'active animated fadeIn slow' : ''}`} 
                        id={3} 
                        onClick={(e) => this.setActive(e.target.id)} to='/contact'>Contact
                </Link>
            </nav>

        return(
            <div>
                {Links}
            </div>
        )
    } 
}

export default Navi;
