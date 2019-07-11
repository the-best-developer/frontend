import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        console.log('you are in');
        this.setState({
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <form className='logForm' type='submit' onSubmit={this.handleSubmit}>
                    <label>Enter Email</label>
                    <input 
                    type='text'
                    value={this.state.email}
                    name='email'
                    placeholder='email'
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

export default Login;