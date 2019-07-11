import React from 'react';
import { connect } from 'react-redux';

import './ServiceList.css';
import { addNewService } from '../actions';


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
            <div>
                <div>
                    Service Options:
                </div>
                <div>
                    {this.props.serviceList.map(s => <p>{s}</p>)}
                </div>
                <h1>Add New Service of Your Choice:</h1>
                <form type='submit' onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name='newService'
                    value={this.state.newService}
                    placeholder='Enter new service here'
                    onChange={this.handleChange}
                    />
                    <button>Add Service</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serviceList: state.serviceReducer.serviceList
    }
}

export default connect(mapStateToProps, { addNewService })(ServiceList);