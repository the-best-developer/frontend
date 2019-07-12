import React from 'react';

import './SignUp.css'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            password: '',
            verifyPassword: '',
            email: '',
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
        if (this.state.firstName && this.state.lastName && this.state.password && this.state.verifyPassword && this.state.email && this.state.password === this.state.verifyPassword) {
            console.log('you are in')
        } else {
            console.log('please fill out all fields and make sure passwords match')
        }
        this.setState({
            firstName: '',
            lastName: '',
            password: '',
            verifyPassword: '',
            email: '',
        })

    }

    render() {
        return (
            <div>
                <form className='form' type='submit' onSubmit={this.handleSubmit}>
                    <label>Enter First Name</label>
                    <input 
                    type='text'
                    value={this.state.name}
                    name='firstName'
                    placeholder='first name'
                    onChange={this.handleChange}
                    />
                    <label>Enter Last Name</label>
                    <input 
                    type='text'
                    value={this.state.lastName}
                    name='lastName'
                    placeholder='last name'
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
                    <label>Verify Password</label>
                    <input 
                    type='password'
                    value={this.state.verifyPassword}
                    name='verifyPassword'
                    placeholder='verify password'
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

export default SignUp;