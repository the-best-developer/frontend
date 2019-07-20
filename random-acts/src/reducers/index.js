import { combineReducers } from 'redux';

//import { ADD_SERVICE } from '../actions';
//import { ADD_CONTACT } from '../actions';
import { POST_SERVICES_START, POST_SERVICES_SUCCESS, POST_SERVICES_FAILURE, 
         POST_CONTACTS_START, POST_CONTACTS_SUCCESS, POST_CONTACTS_FAILURE, 
         FETCH_CONTACTS_START, FETCH_CONTACTS_SUCCESS, FETCH_CONTACTS_FAILURE, 
         FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_FAILURE, 
         LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, 
         SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, 
         EDIT_SERVICE_START, EDIT_SERVICE_SUCCESS, EDIT_SERVICE_FAILURE, 
         EDIT_CONTACT_START, EDIT_CONTACT_SUCCESS, EDIT_CONTACT_FAILURE, 
         DELETE_CONTACT_START, DELETE_CONTACT_SUCCESS, DELETE_CONTACT_FAILURE
        } from '../actions';

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
    contactList: [],
    isLoggingIn: false,
    isSigningUp: false,
    loggedIn: false,
    isFetching: false,
    addingContact: false,
    addingService: false,
    isEditingService: false,
    isEditingContact: false,
    isDeletingContact: false,
    error: ''
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

const fetchReducer = (state=initialState, action) => {
    switch (action.type) {

        case FETCH_CONTACTS_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contactList: [...action.payload],    ///may have to change these 2 based on how data is returned
                isFetching: false,                          //spread check
            }

        case FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                isFetching: false,                                 //spread check
                error: action.payload
            }

        case FETCH_SERVICES_START:
            return {
                ...state,
                isFetching: true
            }

        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                serviceList: [...action.payload],    ///may have to change these 2 based on how data is returned
                isFetching: false,                          //spread check
            }

        case FETCH_SERVICES_FAILURE:
            return {
                ...state,
                isFetching: false,                                 //spread check
                error: action.payload
            }
        default: 
            return state;
    }
}


const contactReducer = (state=initialState, action) => {
    switch (action.type) {
        case POST_CONTACTS_START: 
            return {
                ...state,
                addingContact: true,
            }
        case POST_CONTACTS_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                contactList: action.payload,                     ///check again on these spread operators
                addingContact: false
            }
        case POST_CONTACTS_FAILURE:
            return {
                ...state,
                addingContact: false,                      ///check if spread used correctly
                error: action.payload
            }
            case EDIT_CONTACT_START:
                    return {
                        ...state,
                        isEditingContact: true
                    }
                case EDIT_CONTACT_SUCCESS:
                    return {
                        ...state,
                        isEditingContact: false,
                        contactList: action.payload ///if doesn't work use [...state.contactList, action.payload]
                    }
                case EDIT_CONTACT_FAILURE:
                    return {
                        ...state,
                        isEditingContact: false,
                        error: action.payload
                    }
                case DELETE_CONTACT_START:
                    return {
                        ...state,
                        isDeletingContact: true
                    }
                case DELETE_CONTACT_SUCCESS:
                    return {
                        ...state,
                        isDeletingContact: false,
                        contactList: action.payload
                    }
                case DELETE_CONTACT_FAILURE:
                    return {
                        ...state,
                        isDeletingContact: false,
                        error: action.payload
                    }
        default:
            return state;
    }
}


const serviceReducer = (state=initialState, action) => { ///check to see if using the same POST_START etc for serviceReducer and contactReducer will cause bugs prob not cuz called throught different actions and onclicks tied to different components but check to see
    switch (action.type) {
        case POST_SERVICES_START:
            return {
                ...state,
                addingService: true
            }
        case POST_SERVICES_SUCCESS:
            return {
                ...state,
                serviceList: action.payload, ///Check to see if this sytax is correct for this situation
                addingService: false
            }
        case POST_SERVICES_FAILURE:
            return {
                ...state,
                addingService: false,
                error: action.payload
            }
        case EDIT_SERVICE_START:
                    return {
                        ...state,
                        isEditingService: true
                    }
        case EDIT_SERVICE_SUCCESS:
                    return {
                        ...state,
                        isEditingService: false,
                        serviceList: action.payload,
                    }
        case EDIT_SERVICE_FAILURE:
                    return {
                        ...state,
                        isEditingService: false,
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








export const rootReducer = combineReducers({
    serviceReducer,
    contactReducer,
    fetchReducer,
    loginReducer,
    signupReducer
})
