import React, {Component} from 'react';

const emailSuccess = 'Your Email has been sent'
const emailFail = 'Sorry there was an error, please try sending email again.'

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    handleSubmit = (e) => {
        // alert(`Thank you ${this.state.name}, your message has been submitted. I will get in touch with you shortly`)
        e.preventDefault();

        if (this.state.name === '') {
            alert('please fill out your name')
        } else if(this.state.email === ''){
            alert('please enter your email')
        } else if(this.state.message === '') {
            alert('please fill out the message portion')
        } else {
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        // console.log(`A name was sumbitted: ${this.state.name}\n${this.state.email}\n${this.state.message}`)
        this.props.sendData(data, (result) => {
            result.status === 200 ? alert(`${emailSuccess}`) : alert(`${emailFail}`)
        })

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    }
    render(){
        
        return(
            // <div className='contactBody '>
            <div className='mainLanding'>
                <div className='contactGrid animated slideInUp slow'>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className='contactList'>
                        <div>
                            <i className='fa fa-phone-square fa-4x' aria-hidden='true'/><br/>
                                (250) 258 2932
                        </div>
                    </div>
                    <div className='contactForm'>
                        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder='Name'
                                        value={this.state.name}
                                        onChange={this.handleNameChange}  />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleEmailChange} />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" placeholder='Please type your message here and click Submit below'
                                            value={this.state.message}
                                            onChange={this.handleMessageChange} />
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;