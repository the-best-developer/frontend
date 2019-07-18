import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 80%;
    min-height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 10px -10px gray;
    background-color: rgb(31, 56, 104);
    border-radius: 10px;
`;

const StyledLinks = styled(Link)`
    width: 10%;
    height: 40px;
    padding-top: 10px;
    text-decoration: none;
    color: white;
    border-radius: 5px;
    background-color: darkcyan;
    font-weight: 600;
    font-size: 1.2rem;

    ${props => (props.bgcolor && `background-color: ${props.bgcolor};`)}
    ${props => (props.color && `color: ${props.color};`)}
`;

function NavBar () {
    return (
        <MainContainer>
            <StyledLinks to="/">About</StyledLinks>
            <StyledLinks to="/team">Team</StyledLinks>
            <StyledLinks to="/about">About</StyledLinks>
            <StyledLinks to="/contacts">Contacts</StyledLinks>
            <StyledLinks to="/services">Services</StyledLinks>
            <StyledLinks bgcolor="burlywood" to="/random-acts">Try it!</StyledLinks>
            <StyledLinks to="/login">Login</StyledLinks>
            <StyledLinks to="/signup">Sign Up</StyledLinks>
        </MainContainer>
    )
}

export default NavBar;