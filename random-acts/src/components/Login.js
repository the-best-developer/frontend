import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';
import './Login.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
`;

const LoginContainer = styled.div`
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
            <MainContainer>
                <LoginContainer>
                    <h1>Login</h1>
                <form className='logForm' type='submit' onSubmit={this.handleSubmit}>
                    <StyledLabel>Username</StyledLabel>
                    <input 
                    type='text'
                    value={this.state.username}
                    name='username'
                    placeholder='username'
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
                    <StyledButton>Login</StyledButton>
                </form>
                <StyledP>Not a memeber yet??</StyledP>
                <StyledLink  to="/signup">Sign up!</StyledLink >
                </LoginContainer>
            </MainContainer>
        )
    }
}

export default connect(null, { login })(Login);