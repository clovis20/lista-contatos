import styled from 'styled-components'
import variaveis from '../styles/variaveis'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin-bottom: 20px;
  background-color: ${variaveis.branco};
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${variaveis.borda};
  border-radius: 4px;
  background-color: ${variaveis.branco};
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${variaveis.azul1};
  color: ${variaveis.branco};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.azul2};
  }
`

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid ${variaveis.borda};
  margin: 10px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const ContactData = styled.span`
  flex-grow: 1;
  overflow-wrap: break-word;
`

export const ContactLabel = styled.span`
  font-weight: bold;
  width: 33.33% : 'auto';
`

export const ContactTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
`

export const Name = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`

export const Text = styled.p`
  margin-bottom: 5px;
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`

export const EditButtonSmall = styled.button`
  padding: 4px 8px;
  background-color: ${variaveis.verde1};
  color: ${variaveis.branco};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: ${variaveis.verde2};
  }
`

export const RemoveButtonSmall = styled.button`
  padding: 4px 8px;
  background-color: ${variaveis.verm1};
  color: ${variaveis.branco};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: ${variaveis.verm2};
  }
`

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ColumnName = styled.p`
  font-weight: bold;
`
