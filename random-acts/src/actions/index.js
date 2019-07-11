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