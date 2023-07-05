import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  Contact,
  ContactActionTypes
} from '../types/contactTypes'

export const addContact = (contact: Contact): ContactActionTypes => ({
  type: ADD_CONTACT,
  payload: contact
})

export const removeContact = (id: number): ContactActionTypes => ({
  type: REMOVE_CONTACT,
  payload: id
})
