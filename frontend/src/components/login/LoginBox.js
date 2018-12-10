import React, {Component} from 'react';

class LoginBox extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault()
        let loginData = this.state
        this.props.checkLogin(loginData, ()=>{})
    }
    render(){
        return(
            <div className='login-form'>
               <div className="main-div">
                    <div className="panel">
                        <h2>Admin Login</h2>
                    </div>
                    <form id="Login" onSubmit={(e)=>this.submitLogin(e)}>
                        <div className="form-group">
                            <input onChange={(e) => this.handleEmail(e)}
                            type="email" className="form-control" id="inputEmail" placeholder="Email Address"/>
                        </div>
                        <div className="form-group">
                            <input onChange={(e) => this.handlePassword(e)}
                            type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                        </div>
                        <div className="forgot">
                        </div>
                        <button  type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginBox