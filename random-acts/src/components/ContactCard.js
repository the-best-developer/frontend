import React from 'react';
import { connect } from 'react-redux';
import { editContact, deleteContact } from '../actions';
import styled from 'styled-components'

const ContactCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;
    width: 29%;
    min-height: 125px;
    margin: 1%;
    padding: 5px;
    border: 2px solid white;
    border-radius: 0 10px;
    color: white;
    background-color: rgba(4, 37, 63);
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    width: 100%;
    justify-content: flex-end;
`;

const StyledButton = styled.button`
    width: 50px;
    margin: 0 10px;
`;

const StyledInput = styled.input`
    margin: 2px 0;
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
        this.setState(function () {
            return {
            Contact: {
                name: this.props.name,
                phoneNumber: this.props.phoneNumber,
                email: this.props.email,
            }}
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

    handleSubmitEdit = (id, e) => {
        e.preventDefault();
        console.log(this.state.Contact)
        //Call EDIT axios action here
        this.props.editContact(id, this.state.Contact);
        this.setState({
            isEditing: false
        })
    }  
    
    handleDelete = (id, e) => {
        e.preventDefault();
        this.props.deleteContact(id)
        //Call EDIT axios action here

    }

    render() {
        return (
            (this.state.isEditing)
            ? 
            <ContactCardDiv>
                <form type='submit' onSubmit={(e) => this.handleSubmitEdit(this.props.id, e)}>
                        <p><b>Name</b>:
                        <StyledInput 
                        type='text'
                        size="30"
                        value={this.state.Contact.name}
                        name='name'
                        placeholder={this.state.Contact.name}
                        onChange={this.handleChange}
                        />
                        </p>
                        <p><b>Phone</b>:
                        <StyledInput 
                        type='text'
                        size="30"
                        value={this.state.Contact.phoneNumber}
                        name='phoneNumber'
                        placeholder={this.state.Contact.phoneNumber}
                        onChange={this.handleChange}
                        />
                        </p>
                        <p><b>Email</b>:
                        <StyledInput 
                        type='text'
                        size="30"
                        value={this.state.Contact.email}
                        name='email'
                        placeholder={this.state.Contact.email}
                        onChange={this.handleChange}
                        />
                        </p>
                        <ButtonContainer>
                            <StyledButton onClick={this.handleSubmit}>Submit</StyledButton>
                        </ButtonContainer>
                    </form>
            </ContactCardDiv>
            :
            <ContactCardDiv>
                <p><b>Name</b>: {this.props.name}</p>
                <p><b>Phone</b>: {this.props.phoneNumber}</p>
                <p><b>Email</b>: {this.props.email}</p>
                <ButtonContainer>
                    <StyledButton onClick={this.handleEdit}>Edit</StyledButton>
                    <StyledButton onClick={(e) => this.handleDelete(this.props.id, e)}>Delete</StyledButton>
                </ButtonContainer>
            </ContactCardDiv>
        );
    };
}

export default connect(null, { editContact, deleteContact })(ContactCard);