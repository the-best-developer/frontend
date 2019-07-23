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

    @media( max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transform: translateX(0);
    }
`;

const StyledTitle = styled(Link)`
    margin: 15px 0 0 40px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    font-style: italic;
    overflow: hidden;

    @media( max-width: 800px ) {
        align-items: center;
        margin: 15px 0;
    }
`;

const NavContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(5, 18, 41, 0.90);
    overflow: hidden;

    @media( max-width: 800px ) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledLinks = styled(Link)`
    width: 20%;
    padding: 20px;
    text-decoration: none;
    color: white;
    border-left: 1px solid white;
    border-right: 1px solid white;
    font-weight: 600;
    overflow: hidden;

    @media( max-width: 800px ) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }
    
    ${props => (props.custstyle && `${props.custstyle}`)}
`;

const StyledTryIt = styled(Link)`
    width: 20%;
    height: 30px;
    padding-top: 8px
    margin: 8px 4% 1% 3%;
    text-decoration: none;
    color: white;
    background-color: goldenrod;
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid white;
    overflow: hidden;

    @media( max-width: 800px ) {
        width: 80%;
        margin: 20px 0;
    }
`;

const MenuButton = styled.span`
    margin: 5px 0;
    color: white;

    @media( min-width: 800px ) {
        display: none;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75%;
    overflow: hidden;
    transition: all 0.25s ease-in-out;

    @media( max-width: 800px ) {
        height: 0;
        width: 100%;
        flex-direction: column;

        ${props => (props.menuOpen && `height: 350px;`)}
    }
`;

const ArrowContainer = styled.div`
    margin: 5px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    @media( min-width: 800px ) {
        display: none;
    }
`;

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    toggleMenu = e => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render() {
        return (
            <HeadingContainer>
                <StyledTitle to="/">Random Acts Generator ! ! !</StyledTitle>
                <MenuContainer menuOpen={this.state.menuOpen}>
                    <NavContainer>
                        <StyledLinks custstyle="border-left: 2px solid white;" to="/contacts">Contacts</StyledLinks>
                        <StyledLinks to="/services">Services</StyledLinks>
                        <StyledLinks to="/team">Team</StyledLinks>
                        <StyledLinks to="/login">Login</StyledLinks>
                        <StyledLinks custstyle="border-right: 2px solid white;" to="/signup">Sign Up</StyledLinks>
                    </NavContainer>
                    <StyledTryIt to="/random-acts">Generate an act!</StyledTryIt>
                </MenuContainer>
                {(this.state.menuOpen)
                ?
                    <ArrowContainer onClick={this.toggleMenu}>
                        <MenuButton className="fas fa-angle-double-up fa-1.5x" />
                    </ArrowContainer>
                :
                    <ArrowContainer onClick={this.toggleMenu}>
                        <MenuButton className="fas fa-angle-double-down fa-1.5x" />
                    </ArrowContainer>
                }
            </HeadingContainer>
        )
    }
}

export default NavBar;