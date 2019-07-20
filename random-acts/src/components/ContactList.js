import React from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../actions';
import styled from 'styled-components';
import ContactCard from './ContactCard';

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
`;

const ContactsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
`;

const ContactsListDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    justify-content: space-evenly;
    background-color: rgba(4, 37, 63, 0.9);
    border-radius: 5px;
    box-shadow: 0px 5px 10px 1px;
    
`;

const AddContactContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const AddContactDiv = styled.div`
    width: 100%;
    display: flex;
    padding: 3%;
    flex-direction: column;
    background-color: rgba(4, 37, 63, 0.9);
    border-radius: 5px;
    box-shadow: 0px 5px 10px 1px black;
    text-align: left;
    color: white;
    overflow: hidden;
`;

const BlankContactCard = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    border: 2px solid white;
    border-radius: 0 10px;
    color: white;
    background-color: rgba(4, 37, 63);
    box-shadow: 0px 5px 10px 1px black;
`;

const StyledButton = styled.button`
    margin: 20px 0 5px 0;
`;

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContact: {
                name: '',
                phoneNumber: '',
                email: '',
            }
        }
    }

    handleChange = e => {
        this.setState({
            newContact: {
            ...this.state.newContact,
            [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.newContact)
        this.props.addNewContact(this.state.newContact);

        this.setState({
            newContact: {
                name: '',
                phoneNumber: '',
                email: '',
            }
        })
    }

    render() {
        return (
            <MainContainer>
                <ContactsContainer>
                    <h1>Contacts</h1>
                    <ContactsListDiv>
                        {(this.props.contactList.length === 0)
                        ?
                            <BlankContactCard>No contacts availble</BlankContactCard>
                        :
                            this.props.contactList.map((c, id) => 
                                <ContactCard key={id} id={c.id} name={c.name} phoneNumber={c.phoneNumber} email={c.email} />
                            )
                        }
                    </ContactsListDiv>
                </ContactsContainer>
                
                <AddContactContainer>
                <h1>Add New Contact:</h1>
                <AddContactDiv>
                    <form type='submit' onSubmit={this.handleSubmit}>
                        <p>Name:</p>
                        <input 
                        type='text'
                        size="40"
                        value={this.state.newContact.name}
                        name='name'
                        placeholder='Enter name here'
                        onChange={this.handleChange}
                        />
                        
                        <p>Phone number:</p>
                        <input 
                        type='text'
                        size="40"
                        value={this.state.newContact.phoneNumber}
                        name='phoneNumber'
                        placeholder='Enter phone number here'
                        onChange={this.handleChange}
                        />
                        
                        <p>Email:</p>
                        <input 
                        type='text'
                        size="40"
                        value={this.state.newContact.email}
                        name='email'
                        placeholder='Enter email here'
                        onChange={this.handleChange}
                        />
                        <StyledButton>Add Contact</StyledButton>
                    </form>
                </AddContactDiv>
                </AddContactContainer>
            </MainContainer>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        contactList: state.fetchReducer.contactList
    }
}

export default connect(mapStateToProps, { addNewContact })(ContactList);