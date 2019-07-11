import React from 'react';
import { connect } from 'react-redux';

import './ContactList.css';
import { addNewContact } from '../actions';



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
            <div>
                <div>
                    Contacts:
                </div>
                <div>
                    {this.props.contactList.map(c => 
                    <div>
                        <p>name: {c.name}</p>
                        <p>phone number: {c.phoneNumber}</p>
                        <p>email address: {c.email}</p>
                    </div>
                    )}
                </div>  
                <h1>Add New Contact:</h1>
                <form type='submit' onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    value={this.state.newContact.name}
                    name='name'
                    placeholder='Enter name here'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    value={this.state.newContact.phoneNumber}
                    name='phoneNumber'
                    placeholder='Enter phone number here'
                    onChange={this.handleChange}
                    />
                    <input 
                    type='text'
                    value={this.state.newContact.email}
                    name='email'
                    placeholder='Enter email here'
                    onChange={this.handleChange}
                    />
                    <button>Add Contact</button>
                </form>
                
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        contactList: state.contactReducer.contactList
    }
}

export default connect(mapStateToProps, { addNewContact })(ContactList);