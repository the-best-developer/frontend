import { combineReducers } from 'redux';

import { ADD_SERVICE } from '../actions';
import { ADD_CONTACT } from '../actions';

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
    addingService: false
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



export const rootReducer = combineReducers({
    serviceReducer,
    contactReducer,
})
