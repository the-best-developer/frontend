import axios from 'axios';
import axiosWithAuth from './axiosWithAuth'; 


export const ADD_SERVICE = 'ADD_SERVICE';


export const addNewService = (newService) => {
    return {
        type: ADD_SERVICE,
        payload: newService
    }
}

export const ADD_CONTACT = 'ADD_CONTACT';

export const addNewContact = (newContact) => {
    return {
        type: ADD_CONTACT,
        payload: newContact
    }
}







//WE MUST ADD CORRECT URL PATHS TO ALL THESE AXIOS CALLS

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

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

/*
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCH_START})
    axios.get('http://localhost:9393/api/')
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}))
}

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const addNewService = newService => dispatch => {
    dispatch({type: POST_START});
    axiosWithAuth.post('urlgoeshere', newService)
    .then(res => dispatch({type: POST_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POST_FAILURE, payload: err.response}))
}

export const addNewContact = newContact => dispatch => {
    dispatch({type: POST_START});
    axiosWithAuth.post('urlgoeshere', newContact)
    .then(res => dispatch({type: POST_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POST_FAILURE, payload: err.response}))
}


*/
export const signUp = creds => dispatch => {
    dispatch({type: SIGNUP_START})
    axios.post('http://localhost:9393/api/register', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload)  ////CHECK IF THIS IS CORRECT WAY TO DO THIS PART
        dispatch({type: SIGNUP_SUCCESS})
    })
    .catch(err => dispatch({type: SIGNUP_FAILURE, payload: err.response}))
}

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START})
    axios.post('http://localhost:9393/api/login', creds)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        dispatch({type: LOGIN_SUCCESS})
    })
    .catch(err => dispatch({type: LOGIN_FAILURE, payload: err.response}))
}

export const editService = (id, service) => dispatch => {
    dispatch({type: EDIT_SERVICE_START})
    axios.put(`urlwith/${id}`, service)
    .then(res => dispatch({type: EDIT_SERVICE_SUCCESS, payload: res.data.payload}))
    .catch(err => dispatch({type: EDIT_SERVICE_FAILURE, payload: err.response}))

}

export const editContact = (id, contact) => dispatch => {
    dispatch({type: EDIT_CONTACT_START})
    axios.put(`urlwith/${id}`, contact)
    .then(res => dispatch({type: EDIT_CONTACT_SUCCESS, payload: res.data.payload}))
    .catch(err => dispatch({type: EDIT_CONTACT_FAILURE, payload: err.response}))

}

export const deleteContact = (id) => dispatch => {
    dispatch({type: DELETE_CONTACT_START})
    axios.put(`urlwith/${id}`)
    .then(res => dispatch({type: DELETE_CONTACT_SUCCESS, payload: res.data.payload}))
    .catch(err => dispatch({type: DELETE_CONTACT_FAILURE, payload: err.response}))
}




