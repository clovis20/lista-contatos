import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../store/actions/contactActions'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Criar objeto de contato
    const contact = {
      id: Date.now(),
      name,
      email,
      phone
    }

    // Disparar a ação de adicionar contato
    dispatch(addContact(contact))

    // Limpar o formulário
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Adicionar Contato</button>
      </form>
    </>
  )
}

export default ContactForm
