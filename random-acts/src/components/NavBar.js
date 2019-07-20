import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    border-radius: 0 0 50px 50px;
    background-color: rgba(5, 18, 41, 0.85);
`;

const StyledTitle = styled(Link)`
    margin: 15px 0 0 40px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    font-style: italic;
`;

const NavContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(5, 18, 41, 0.90);
    overflow: hidden;
`;

const StyledLinks = styled(Link)`
    width: 20%;
    height: 20px;
    padding: 20px;
    text-decoration: none;
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-weight: 600;
    
    ${props => (props.custstyle && `${props.custstyle}`)}
`;

const StyledTryIt = styled(Link)`
    width: 12.5%;
    height: 30px;
    padding-top: 8px
    margin: 8px 3% 0 0;
    text-decoration: none;
    color: white;
    background-color: goldenrod;
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid white;
`;

function NavBar () {
    return (
        <HeadingContainer>
            <StyledTitle to="/">Random Acts Generator ! ! !</StyledTitle>
            <NavContainer>
                <StyledLinks custstyle="border-left: 2px solid white;" to="/contacts">Contacts</StyledLinks>
                <StyledLinks to="/services">Services</StyledLinks>
                <StyledLinks to="/team">Team</StyledLinks>
                <StyledLinks to="/login">Login</StyledLinks>
                <StyledLinks custstyle="border-right: 2px solid white;" to="/signup">Sign Up</StyledLinks>
            </NavContainer>
            <StyledTryIt to="/random-acts">Generate an act!</StyledTryIt>
        </HeadingContainer>
    )
}

export default NavBar;