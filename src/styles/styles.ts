import {createGlobalStyle} from 'styled-components'

export const StylesGlobal = createGlobalStyle`
  :root {
    --background: #dcdcdc
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  body, input, textarea,button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

`
