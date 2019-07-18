import React from 'react';
import { connect } from 'react-redux';

import './SignUp.css';
import { signUp } from '../actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
    }
     
    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.setState({
            username: '',
            password: '',
            email: '',
        })
        

    }

    render() {
        return (
            <div>
                <form className='form' type='submit' onSubmit={this.handleSubmit}>
                <label>Enter Username</label>
                    <input 
                    type='text'
                    value={this.state.username}
                    name='username'
                    placeholder='username'
                    onChange={this.handleChange}
                    />
                
                    <label>Enter Password</label>
                    <input 
                    type='password'
                    value={this.state.password}
                    name='password'
                    placeholder='password'
                    onChange={this.handleChange}
                    />
                
                    <label>Enter Email</label>
                    <input 
                    type='text'
                    value={this.state.email}
                    name='email'
                    placeholder='enter email'
                    onChange={this.handleChange}
                    />
                    <button>Join and Serve</button>
                </form>
                <p className='login'>Already A Member? Login</p>
            </div>
        )
    }
}

export default connect(null, { signUp })(SignUp);