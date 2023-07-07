import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactList from '../components/ContactList'
import { ContactContainer, Container, Title, Title2 } from '../styles/styles'
import { useSelector } from 'react-redux'
import { RootState } from '../store/reducers/rootReducer'

const HomePage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts)

  return (
    <>
      <Container>
        <Title>Lista de Contatos</Title>
        <ContactForm />
        {contacts.contacts.length > 0 && (
          <ContactContainer>
            <Title2>Contatos</Title2>
            <ContactList />
          </ContactContainer>
        )}
      </Container>
    </>
  )
}

export default HomePage
