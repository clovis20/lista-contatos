import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/reducers/rootReducer'
import { removeContact } from '../store/actions/contactActions'

import ContactItem from './ContactItem'
import { Contact } from '../store/types/contactTypes'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }

  return (
    <>
      <ul>
        {contacts.contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </>
  )
}

export default ContactList
