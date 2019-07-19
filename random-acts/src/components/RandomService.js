import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`;

const GenFriendDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GenServiceDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class RandomService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                phoneNumber: '',
                email: '',
            },
            service: '' 
        }
    } 

    generateFriend = () => {
        let contact = this.props.contactList[Math.floor(Math.random() * this.props.contactList.length)]
        console.log(contact)
        this.setState({
            contact: contact
        })
    }

    generateService = () => {
        let service  = this.props.serviceList[Math.floor(Math.random() * this.props.serviceList.length)]
        this.setState({
            service: service
        })
    }

    render() {
        return (
            <MainContainer>
                <h1>Generate a random contact to service here!</h1>
                <GenFriendDiv>
                    <button onClick={this.generateFriend}>Click to generate contact!</button>
                    <p>{this.state.contact.name ? `You will service ${this.state.contact.name}. Click again to pick someone else, or click below to find out how you will will service them.` : null }</p>
                </GenFriendDiv>
                <GenServiceDiv>
                    <button onClick={this.state.contact.name ? this.generateService : null}>Click to generate service!</button>
                    <p>{this.state.service && this.state.contact.name ? `Your service to ${this.state.contact.name} will be ${this.state.service}.  Call them at ${this.state.contact.phoneNumber} or email them at ${this.state.contact.email} to let them know the good news, or click again if you cannot do this service and need to generate another service` : null}</p>
                </GenServiceDiv>
            </MainContainer>
        );
    };
}

const mapStateToProps = state => {
    return {
        contactList: state.fetchReducer.contactList,
        serviceList: state.fetchReducer.serviceList
    }
}

export default connect(mapStateToProps, {})(RandomService);
