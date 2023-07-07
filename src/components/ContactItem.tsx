import React, { useState } from 'react'
import { Contact } from '../store/types/contactTypes'
import * as S from './styles'

interface ContactItemProps {
  contact: Contact
  onRemove: (id: number) => void
  onUpdate: (id: number, updatedContact: Contact) => void
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onRemove,
  onUpdate
}) => {
  const {
    id: contactId,
    name: initialName,
    email: initialEmail,
    phone: initialPhone
  } = contact
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(initialName)
  const [email, setEmail] = useState(initialEmail)
  const [phone, setPhone] = useState(initialPhone)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleUpdate = () => {
    const updatedContact: Contact = {
      id: contactId,
      name,
      email,
      phone
    }

    onUpdate(contactId, updatedContact)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setName(initialName)
    setEmail(initialEmail)
    setPhone(initialPhone)
  }

  const handleRemove = () => {
    onRemove(contactId)
  }

  const contactInfo = {
    name: {
      label: 'Nome:',
      value: name,
      inputType: 'text',
      handleChange: (e: { target: { value: React.SetStateAction<string> } }) =>
        setName(e.target.value)
    },
    email: {
      label: 'E-Mail:',
      value: email,
      inputType: 'email',
      handleChange: (e: { target: { value: React.SetStateAction<string> } }) =>
        setEmail(e.target.value)
    },
    phone: {
      label: 'Telefone:',
      value: phone,
      inputType: 'tel',
      handleChange: (e: { target: { value: React.SetStateAction<string> } }) =>
        setPhone(e.target.value)
    }
  }

  return (
    <S.ListItem>
      <S.ContactInfo>
        {isEditing ? <S.ContactTitle>Editar Contato</S.ContactTitle> : null}
        {Object.entries(contactInfo).map(([key, info]) => (
          <S.ContactRow key={key}>
            <S.ContactLabel>{info.label}</S.ContactLabel>
            <S.ContactData>
              {isEditing ? (
                <S.Input
                  type={info.inputType}
                  value={info.value}
                  onChange={info.handleChange}
                />
              ) : (
                info.value
              )}
            </S.ContactData>
          </S.ContactRow>
        ))}

        <S.ActionButtons>
          {isEditing ? (
            <>
              <S.EditButtonSmall onClick={handleUpdate}>Save</S.EditButtonSmall>
              <S.RemoveButtonSmall onClick={handleCancel}>
                Cancel
              </S.RemoveButtonSmall>
            </>
          ) : (
            <>
              <S.EditButtonSmall onClick={handleEdit}>Edit</S.EditButtonSmall>
              <S.RemoveButtonSmall onClick={handleRemove}>
                Remove
              </S.RemoveButtonSmall>
            </>
          )}
        </S.ActionButtons>
      </S.ContactInfo>
    </S.ListItem>
  )
}

export default ContactItem
