import React from 'react';
import { connect } from 'react-redux';
import { addNewService } from '../actions';
import styled from 'styled-components'
import ServicesCard from './ServicesCard'

const MainContainer = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;

    @media( max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%
    }
`;

const ServicesContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;

    @media( max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        width: 100%
    }
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

    @media( max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%
    }
    
`;

const AddServiceContainer = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: left;

    @media( max-width: 800px ) {
        flex-direction: column;
        justify-content: center;
        width: 100%
    }
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

    @media( max-width: 800px ) {
        width: 94%
    }
`;

const StyledButton = styled.button`
    margin: 20px 0 5px 0;

    @media( max-width: 800px ) {
        margin: 20px 0 5px 10px;
    }
`;


class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newService: {
                service: ''
            }
        }
    }
    
    handleChange = e => {
        this.setState({
            newService: {
            ...this.state.newService,
            service: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewService(this.state.newService)
        this.setState({
            newService: {
                service: ''
            }
        })
    }

    render() {
        return (
            <MainContainer>
                <ServicesContainer >
                <h1>Service options:</h1>
                <ServiceListDiv>
                    {this.props.serviceList && this.props.serviceList.map((s, id) =>
                        <ServicesCard key={id} service={s.service} id={s.id} />
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
                            name='service'
                            size='40'
                            value={this.state.newService.service}
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