import axios from 'axios';
import axiosWithAuth from './axiosWithAuth'; 
import { history } from '../index'

//WE MUST ADD CORRECT URL PATHS TO ALL THESE AXIOS CALLS

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const POST_CONTACTS_START = 'POST_CONTACTS_START';
export const POST_CONTACTS_SUCCESS = 'POST_CONTACTS_SUCCESS';
export const POST_CONTACTS_FAILURE = 'POST_CONTACTS_FAILURE';

export const POST_SERVICES_START = 'POST_SERVICES_START';
export const POST_SERVICES_SUCCESS = 'POST_SERVICES_SUCCESS';
export const POST_SERVICES_FAILURE = 'POST_SERVICES_FAILURE';

export const EDIT_SERVICE_START = 'EDIT_SERVICE_START';
export const EDIT_SERVICE_SUCCESS =  'EDIT_SERVICE_SUCCESS';
export const EDIT_SERVICE_FAILURE = 'EDIT_SERVICE_FAILURE';

export const EDIT_CONTACT_START = 'EDIT_CONTACT_START';
export const EDIT_CONTACT_SUCCESS =  'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE';

export const DELETE_CONTACT_START = 'DELETE_CONTACT_START';
export const DELETE_CONTACT_SUCCESS =  'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

//add edit and delete for contacts edit and edit services

export const FETCH_CONTACTS_START = 'FETCH_CONTACTS_START';
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS';
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE';

export const FETCH_SERVICES_START = 'FETCH_SERVICES_START';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';


export const getServicesData = () => dispatch => {
    dispatch({type: FETCH_SERVICES_START})
    axiosWithAuth().get('http://localhost:9393/api/services')
    .then(res => dispatch({type: FETCH_SERVICES_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_SERVICES_FAILURE, payload: err.response}))
}

export const getContactsData = () => dispatch => {
    dispatch({type: FETCH_CONTACTS_START})
    axiosWithAuth().get('http://localhost:9393/api/contacts')
    .then(res => dispatch({type: FETCH_CONTACTS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_CONTACTS_FAILURE, payload: err.response}))
}

export const addNewService = newService => dispatch => {
    dispatch({type: POST_SERVICES_START});
    console.log(newService)
    axiosWithAuth().post('http://localhost:9393/api/services', newService)
    .then(res => {
        dispatch({type: POST_SERVICES_SUCCESS, payload: res.data})
        dispatch(getServicesData());
    })
    .catch(err => dispatch({type: POST_SERVICES_FAILURE, payload: err.response}))
}

export const addNewContact = newContact => dispatch => {
    dispatch({type: POST_CONTACTS_START});
    axiosWithAuth().post('http://localhost:9393/api/contacts', newContact)
    .then(res => {
         dispatch({type: POST_CONTACTS_SUCCESS, payload: res.data})
         dispatch(getContactsData());
    })
    .catch(err => dispatch({type: POST_CONTACTS_FAILURE, payload: err.response}))
}


export const signUp = creds => dispatch => {
    dispatch({type: SIGNUP_START})
    axios.post('http://localhost:9393/api/register', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload)  ////CHECK IF THIS IS CORRECT WAY TO DO THIS PART
        dispatch({type: SIGNUP_SUCCESS})
        history.push('/login');
    })
    .catch(err => dispatch({type: SIGNUP_FAILURE, payload: err.response}))
}

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START})
    axios.post('http://localhost:9393/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: LOGIN_SUCCESS})
        history.push('/contacts');
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err.response}))
}

export const editService = (id, service) => dispatch => {
    dispatch({type: EDIT_SERVICE_START})
    axios.put(`http://localhost:9393/api/services/${id}`, service)
    .then(res => {
        dispatch({type: EDIT_SERVICE_SUCCESS, payload: res.data.payload})
        dispatch(getServicesData());
    })
    .catch(err => dispatch({type: EDIT_SERVICE_FAILURE, payload: err.response}))

}

export const editContact = (id, contact) => dispatch => {
    dispatch({type: EDIT_CONTACT_START})
    axios.put(`http://localhost:9393/api/contacts/${id}`, contact)
    .then(res => { 
        dispatch({type: EDIT_CONTACT_SUCCESS, payload: res.data.payload})
        dispatch(getContactsData());
    })
    .catch(err => dispatch({type: EDIT_CONTACT_FAILURE, payload: err.response}))

}

export const deleteContact = (id) => dispatch => {
    dispatch({type: DELETE_CONTACT_START})
    axios.delete(`http://localhost:9393/api/contacts/${id}`)
    .then(res => { 
        dispatch({type: DELETE_CONTACT_SUCCESS, payload: res.data.payload})
        dispatch(getContactsData());
    })

    .catch(err => dispatch({type: DELETE_CONTACT_FAILURE, payload: err.response}))
}




