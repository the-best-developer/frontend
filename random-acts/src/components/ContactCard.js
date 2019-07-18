import React from 'react';
import { connect } from 'react-redux';
import { addNewContact } from '../actions';
import styled from 'styled-components'

const ContactCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;
    width: 29%;
    height: 17.5vh;
    margin: 1%;
    padding: 5px;
    border: 2px solid white;
    border-radius: 0 10px;
    color: white;
    background-color: rgba(4, 37, 63);
`;

const StyledButton = styled.button`
    margin: 20px 0 5px 0;
`;

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            Contact: {
                name: '',
                phoneNumber: '',
                email: '',
            }
        }
    }

    componentDidMount () {
        this.setState({
            Contact: {
                name: this.props.name,
                phoneNumber: this.props.phoneNumber,
                email: this.props.email,
            }
        })
    }

    handleChange = e => {
        this.setState({
            Contact: {
                ...this.state.Contact,
                [e.target.name]: e.target.value
            }
        })
    }

    handleEdit = e => {
        this.setState({
            isEditing: true,
            Contact: {
                name: this.props.name,
                phoneNumber: this.props.phoneNumber,
                email: this.props.email,
            }
        })
    }

    handleSubmitEdit = e => {
        e.preventDefault();
        console.log(this.state.Contact)
        //Call EDIT axios action here

        this.setState({
            isEditing: false
        })
    }

    render() {
        return (
            (this.state.isEditing)
            ? 
            <ContactCardDiv>
                <form type='submit' onSubmit={this.handleSubmit}>
                        <p><b>Name</b>:
                        <input 
                        type='text'
                        size="30"
                        value={this.state.Contact.name}
                        name='name'
                        placeholder={this.state.Contact.name}
                        onChange={this.handleChange}
                        />
                        </p>
                        <p><b>Phone</b>:
                        <input 
                        type='text'
                        size="30"
                        value={this.state.Contact.phoneNumber}
                        name='phoneNumber'
                        placeholder={this.state.Contact.phoneNumber}
                        onChange={this.handleChange}
                        />
                        </p>
                        <p><b>Email</b>:
                        <input 
                        type='text'
                        size="30"
                        value={this.state.Contact.email}
                        name='email'
                        placeholder={this.state.Contact.email}
                        onChange={this.handleChange}
                        />
                        </p>
                        <button onClick={this.handleSubmit}>Submit</button>
                    </form>
            </ContactCardDiv>
            :
            <ContactCardDiv>
                <p><b>Name</b>: {this.props.name}</p>
                <p><b>Phone</b>: {this.props.phoneNumber}</p>
                <p><b>Email</b>: {this.props.email}</p>
                <button onClick={this.handleEdit}>Edit</button>
            </ContactCardDiv>
        );
    };
}

export default connect(null, { })(ContactCard);