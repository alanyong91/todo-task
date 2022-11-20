import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }

  html, body {
    min-height: 100vh;
  }

  body {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.greyBackground};
  }

  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.heading};
    margin: 0 0 24px;
    font-weight: 500;
  }

  input[type="text"] {
    height: 40px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.input};
    border: 0;
    padding-left: 16px;
    padding-right: 16px;

    &::placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.placeholder};
    }

    &:focus {
      outline: 2px solid #cfd2da;
    }
  }

  button {
    height: 40px;
    border-radius: 8px;
    border: 0;
    padding: 11px 22px;
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.whiteBackground};
    font-weight: 500;

    &:focus {
      outline: 2px solid #3d66b8;
    }

    &:disabled {
      background-color: #99b3e7;
    }
  }
`;

export default GlobalStyle;
