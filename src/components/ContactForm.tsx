import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../store/actions/contactActions'
import * as S from './styles'
import { RootState } from '../store/reducers/rootReducer'

const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const isNameEmpty = name.trim() === ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Verificar se o campo de nome está vazio
    if (isNameEmpty) {
      alert('O campo de nome é obrigatório!')
      return
    }

    // Verificar se pelo menos um dos campos de e-mail ou telefone está preenchido
    if (email === '' && phone === '') {
      alert('É necessário preencher o campo de e-mail ou telefone!')
      return
    }

    // Checar se já existe um contato com o mesmo telefone ou e-mail
    let duplicatePhone = false
    let duplicateEmail = false

    if (phone !== '') {
      duplicatePhone = contacts.some((contact) => contact.phone === phone)
    }

    if (email !== '') {
      duplicateEmail = contacts.some((contact) => contact.email === email)
    }

    if (duplicatePhone) {
      alert('Já existe um contato com o mesmo telefone!')
      return
    }

    if (duplicateEmail) {
      alert('Já existe um contato com o mesmo e-mail!')
      return
    }

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

  // Limitar o campo telefone apenas para números
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const numericValue = value.replace(/\D/g, '') // Remover caracteres não numéricos.
    setPhone(numericValue)
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setName(e.target.value)
          }
        />
        <S.Input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setEmail(e.target.value)
          }
        />
        <S.Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={handlePhone}
        />
        <S.Button type="submit">Adicionar Contato</S.Button>
      </S.Form>
    </>
  )
}

export default ContactForm
