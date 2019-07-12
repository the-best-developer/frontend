import React from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../actions';
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
`;

const ContactsListDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AddContactDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
                <ContactsListDiv>
                    <h1>Contacts</h1>
                    {this.props.contactList.map((c, id) => 
                    <div key={id}>
                        <p><b>Name</b>: {c.name}</p>
                        <p><b>Phone number</b>: {c.phoneNumber}</p>
                        <p><b>Email address</b>: {c.email}</p>
                    </div>
                    )}
                </ContactsListDiv>
                
                <AddContactDiv>
                    <h1>Add New Contact:</h1>
                    <form type='submit' onSubmit={this.handleSubmit}>
                        <h2>Name:</h2>
                        <input 
                            type='text'
                            value={this.state.newContact.name}
                            name='name'
                            placeholder='Enter name here'
                            onChange={this.handleChange}
                        />
                        <h2>Phone number:</h2>
                        <input 
                        type='text'
                            value={this.state.newContact.phoneNumber}
                            name='phoneNumber'
                            placeholder='Enter phone number here'
                            onChange={this.handleChange}
                        />
                        <h2>Email:</h2>
                        <input 
                            type='text'
                            value={this.state.newContact.email}
                            name='email'
                            placeholder='Enter email here'
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <button>Add Contact</button>
                    </form>
                </AddContactDiv>
            </MainContainer>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        contactList: state.contactReducer.contactList
    }
}

export default connect(mapStateToProps, { addNewContact })(ContactList);