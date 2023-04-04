import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    html, body, button, input, textarea {
      font-size: 1.6rem;
      font-family: 'Roboto', sans-serif;
    }

    a {
      text-decoration: none;
    }

    button {
      cursor: pointer;
    }


   
`;

export default GlobalStyle;
