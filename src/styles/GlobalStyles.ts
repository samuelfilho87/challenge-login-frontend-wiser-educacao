import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --pure-white: #fff;
    --white: #FAF5FF;
    --pink: #FF377F;
    --purple: #9D25B0;
    --dark-purple: #693999;
    --very-dark-purple: #130525;
    --pastel-blue: #989FDB;
    --dark-pastel-blue: #383E71;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    height: 100vh;
    background: var(--white);
    -webkit-font-smoothing: antialiased;

    @media screen and (max-width: 375px) {
      background: var(--very-dark-purple);
    }
  }
`;