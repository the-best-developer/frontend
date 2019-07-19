import React from 'react';
import { connect } from 'react-redux';
import { addNewService } from '../actions';
import styled from 'styled-components'
import ServicesCard from './ServicesCard'

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
`;

const ServicesContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
`;

const ServiceListDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;
    justify-content: space-evenly;
    background-color: rgba(4, 37, 63, 0.9);
    border-radius: 5px;
    box-shadow: 0px 5px 10px 1px;
    
`;

const AddServiceContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const AddServiceDiv = styled.div`
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

const StyledButton = styled.button`
    margin: 20px 0 5px 0;
`;


class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newService: '',
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewService(this.state.newService)
        this.setState({
            newService: ''
        })
    }

    render() {
        return (
            <MainContainer>
                <ServicesContainer >
                <h1>Service options:</h1>
                <ServiceListDiv>
                    {this.props.serviceList.map((s, id) =>
                        <ServicesCard service={s} id={id} key={id} />
                    )}
                </ServiceListDiv>
                </ServicesContainer>
                <AddServiceContainer>
                <h1>Add Service:</h1>
                <AddServiceDiv>
                    <form type='submit' onSubmit={this.handleSubmit}>
                        <p>Service:</p>
                        <input 
                            type='text'
                            name='newService'
                            size='40'
                            value={this.state.newService}
                            placeholder='Enter new service here'
                            onChange={this.handleChange}
                        />
                        <StyledButton>Add Service</StyledButton>
                    </form>
                </AddServiceDiv>
                </AddServiceContainer>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serviceList: state.fetchReducer.serviceList
    }
}

export default connect(mapStateToProps, { addNewService })(ServiceList);