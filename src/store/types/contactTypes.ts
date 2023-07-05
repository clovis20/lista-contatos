export interface Contact {
  id: number
  name: string
  email: string
  phone: string
}

export interface ContactState {
  map: unknown
  contacts: Contact[]
}

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

interface AddContactAction {
  type: typeof ADD_CONTACT
  payload: Contact
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT
  payload: number
}

export type ContactActionTypes = AddContactAction | RemoveContactAction
