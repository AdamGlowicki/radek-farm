import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 80px 65px 0;
    font-family: 'Montserrat';
  }
  
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrst';
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles