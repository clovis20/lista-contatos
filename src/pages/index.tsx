import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <h1>Lista de Contatos</h1>
        <ContactForm />
        <ContactList />
      </div>
    </>
  )
}

export default HomePage
