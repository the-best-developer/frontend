import React from 'react';
import { connect } from 'react-redux';
import { addNewService } from '../actions';
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
`;

const ServiceListDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AddServiceDiv = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
                <ServiceListDiv>
                    <h1>Service options:</h1>
                    {this.props.serviceList.map(s => <p>{s}</p>)}
                </ServiceListDiv>
                <AddServiceDiv>
                    <h1>Add New Service of Your Choice:</h1>
                    <form type='submit' onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            name='newService'
                            value={this.state.newService}
                            placeholder='Enter new service here'
                            onChange={this.handleChange}
                        />
                        <br></br><br></br>
                        <button>Add Service</button>
                    </form>
                </AddServiceDiv>
            </MainContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serviceList: state.serviceReducer.serviceList
    }
}

export default connect(mapStateToProps, { addNewService })(ServiceList);