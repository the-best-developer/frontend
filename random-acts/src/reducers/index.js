import { combineReducers } from 'redux';

import { ADD_SERVICE } from '../actions';
import { ADD_CONTACT } from '../actions';
import { POST_START, POST_SUCCESS, POST_FAILURE, FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE} from '../actions';

const initialState = {
    serviceList: [
        'Make a donation in their name.',
        'Take them to religious/spiritual venue of their choice.',
        'Clean their gutters.',
        'Babysit their kids/pet on an evening out of their choice',
        'Cook them dinner',
        'Wash their laundry',
        'Take them shopping',
        'Do their chores all day',
        'Do their grocery shopping',
        'Buy them a massage',
        'Tell them something nice',
        'Let them pick service of their choice'
    ],
    contactList: [
        {
        name: 'Ian Cook',
        phoneNumber: '818-414-7366',
        email: 'dadadude@aol.com',    
    }, {
        name: 'Mary Poppins',
        phoneNumber: '420-429-4255',
        email: 'poopinMary@gmail.com',    
    },{
        name: 'Sally Sallison',
        phoneNumber: '818-954-4296',
        email: 'sistasal@hotmail.com',    
    },{
        name: 'Joe Gagliano',
        phoneNumber: '908-421-9999',
        email: 'JGags@gmail.com',    
    }
    ],
    isLoggingIn: false,
    isSigningUp: false,
    loggedIn: false,
    isFetching: false,
    addingContact: false,
    addingService: false,
    error: ''
}

const serviceReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SERVICE:
            return {
                ...state,
                serviceList: [...state.serviceList, action.payload]
            }
        default:
            return state;
    }
}

const contactReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contactList: [...state.contactList, action.payload]
            }
        default:
            return state;
    }
}

const signupReducer = (state=initialState, action) => {
    switch (action.type){
        case SIGNUP_START:
            return {
                ...state,
                isSigningUp: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                loggedIn: true
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                error: action.payload
            }
        default:
            return state;
    }
}









/*

const fetchReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SUCCESS:
            return {
                serviceList: action.payload.serviceList,    ///may have to change these 2 based on how data is returned
                contactList: action.payload.contactList,
                ...state,
                isFetching: false,                          //spread check
            }
        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                ...state,                                   //spread check
                error: action.payload
            }
        default: 
            return state;
    }
}


const contactReducer = (state=initialState, action) => {
    switch (action.type) {
        case POST_START: 
            return {
                ...state,
                addingContact: true,
            }
        case POST_SUCCESS:
            return {
                ...state,       
                contactList: action.payload,
                ...state,                       ///check again on these spread operators
                addingContact: false,
            }
        case POST_FAILURE:
            return {
                ...state,
                addingContact: false,
                ...state,                       ///check if spread used correctly
                error: action.payload
            }
        default:
            return state;
    }
}


const serviceReducer = (state=initialState, action) => { ///check to see if using the same POST_START etc for serviceReducer and contactReducer will cause bugs prob not cuz called throught different actions and onclicks tied to different components but check to see
    switch (action.type) {
        case POST_START:
            return {
                ...state,
                addingService: true
            }
        case POST_SUCCESS:
            return {
                serviceList: action.payload, ///Check to see if this sytax is correct for this situation
                ...state,
                addingService: false
            }
        case POST_FAILURE:
            return {
                ...state,
                addingService: false,
                error: action.payload
            }
        default:
            return state;
    }
}

const loginReducer = (state=initialState, action) => {
    switch (action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            }
        default:
            return state;
    }
}





*/


export const rootReducer = combineReducers({
    serviceReducer,
    contactReducer,
    //fetchReducer,
    //loginReducer,
    signupReducer
})
