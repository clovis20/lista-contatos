import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: ${variaveis.fundo1};
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`
export default GlobalStyles

export const Container = styled.div`
  max-width: 1200px; /* Defina a largura máxima desejada */
  width: 100%;
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${variaveis.branco};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  margin-bottom: 16px;
  background-color: ${variaveis.branco};
`
export const Title2 = styled.h2`
  margin-bottom: 16px;
  background-color: ${variaveis.branco};
  margin-left: 44%;
`

export const ContactContainer = styled.div`
  background-color: ${variaveis.branco};
  border-radius: 4px;
  padding: 8px;
  margin-top: 20px;
`
