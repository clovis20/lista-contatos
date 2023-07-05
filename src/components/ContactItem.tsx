import React from 'react'
import { Contact } from '../store/types/contactTypes'

interface ContactItemProps {
  contact: Contact
  onRemove: (id: number) => void
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onRemove }) => {
  const { id, name, email, phone } = contact
  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <>
      <li>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={handleRemove}>Remover</button>
      </li>
    </>
  )
}

export default ContactItem
