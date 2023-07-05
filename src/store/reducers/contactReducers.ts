import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  ContactState,
  ContactActionTypes
} from '../types/contactTypes'

const initialState: ContactState = {
  contacts: [],
  map: undefined
}

const contactReducer = (
  state = initialState,
  action: ContactActionTypes
): ContactState => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      }
    default:
      return state
  }
}

export default contactReducer
