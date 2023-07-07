import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store/reducers/rootReducer'
import { removeContact, updateContact } from '../store/actions/contactActions'

import ContactItem from './ContactItem'
import { Contact } from '../store/types/contactTypes'
import * as S from './styles'

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }

  const handleUpdate = (id: number, updatedContact: Contact) => {
    dispatch(updateContact(id, updatedContact))
  }

  return (
    <>
      <S.List>
        {contacts.contacts.map((contact: Contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onRemove={handleRemove}
            onUpdate={handleUpdate}
          />
        ))}
      </S.List>
    </>
  )
}

export default ContactList
