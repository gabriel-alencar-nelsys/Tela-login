import { createGlobalStyle } from "styled-components";

export const MyStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: black; /* A cor de fundo é aplicada ao body */
    font-family: 'Roboto', sans-serif; /* Adicione a fonte padrão se desejar */
  }
`;
