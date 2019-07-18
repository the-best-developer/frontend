import React from 'react';

import './SignUp.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
`;

const SignUpContainer = styled.div`
    min-width: 200px;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    background-color: rgba(4, 37, 63, 0.9);
    color: white;
    padding-top: 10px;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px 2px black;
`;

const StyledLabel = styled.label`
    margin: 15px 0;
`;

const StyledButton = styled.button`
    margin: 20px 0 5px 0;
`;

const StyledLink = styled(Link)`
    color: royalblue;
    text-decoration: none;
`;

const StyledP = styled.p`
    margin-top: 25px;
`;


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

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.password && this.state.verifyPassword && this.state.email && this.state.password === this.state.verifyPassword) {
            console.log('you are in')
        } else {
            console.log('please fill out all fields and make sure passwords match')
        }
        this.setState({
            username: '',
            password: '',
            email: '',
        })

    }

    render() {
        return (
            <MainContainer>
                <SignUpContainer>
                <form className='form' type='submit' onSubmit={this.handleSubmit}>
                <StyledLabel>Username</StyledLabel>
                    <input 
                    type='text'
                    value={this.state.username}
                    name='username'
                    placeholder='Username'
                    onChange={this.handleChange}
                    />
                    <StyledLabel>Password</StyledLabel>
                    <input 
                    type='password'
                    value={this.state.password}
                    name='password'
                    placeholder='password'
                    onChange={this.handleChange}
                    />
                    <StyledLabel>Email</StyledLabel>
                    <input 
                    type='text'
                    value={this.state.email}
                    name='email'
                    placeholder='enter email'
                    onChange={this.handleChange}
                    />
                    <StyledButton>Join and Serve</StyledButton>
                </form>
                <StyledP>Already A Member?</StyledP>
                <StyledLink to="/login">Login!</StyledLink>
                </SignUpContainer>
            </MainContainer>
        )
    }
}

export default SignUp;