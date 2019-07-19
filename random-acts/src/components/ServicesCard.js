import React from 'react';
import { connect } from 'react-redux';
import { editService } from '../actions';
import styled from 'styled-components'

const ServicesCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    flex-wrap: wrap;
    width: 20%;
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


class ServicesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            service: ''
        }
    }

    componentDidMount () {
        this.setState(function () {
            return {
                service: this.props.service
            }
        })
    }

    handleChange = e => {
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    handleEdit = e => {
        this.setState({
            isEditing: true,
            service: this.props.service
        })
    }

    handleSubmitEdit = (id, e) => {
        e.preventDefault();
        console.log(this.state.service)
        //Call EDIT axios action here
        this.props.editService(id, this.state.service);
        this.setState({
            isEditing: false,
            service: this.props.service
        })
    }

    render() {
        return (
            (this.state.isEditing)
            ? 
            <ServicesCardDiv>
                <form type='submit' onSubmit={(e) => this.handleSubmitEdit(this.props.id, e)}>
                        <StyledInput 
                        type='text'
                        size="30"
                        value={this.state.service}
                        name='service'
                        placeholder={this.state.service}
                        onChange={this.handleChange}
                        />
                        <ButtonContainer>
                            <StyledButton onClick={this.handleSubmit}>Submit</StyledButton>
                        </ButtonContainer>
                    </form>
            </ServicesCardDiv>
            :
            <ServicesCardDiv>
                <p>{this.state.service}</p>
                <ButtonContainer>
                    <StyledButton onClick={this.handleEdit}>Edit</StyledButton>
                </ButtonContainer>
            </ServicesCardDiv>
        );
    };
}

export default connect(null, { editService })(ServicesCard);