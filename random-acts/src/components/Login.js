import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <form className='logForm' type='submit' onSubmit={this.handleSubmit}>
                    <label>Enter username</label>
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
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { login })(Login);