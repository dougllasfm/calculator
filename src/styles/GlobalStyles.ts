import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;    
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 1440px;
    font-size: 32px;
    font-weight: 700;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-size: 32px;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Spartan', sans-serif;
  }
  :root {
    --theme1-background: hsl(222, 26%, 31%);
    --theme1-toggle: hsl(223, 31%, 20%);
    --theme1-screen: hsl(224, 36%, 15%);
    --theme1-key-background: hsl(225, 21%, 49%);
    --theme1-key-shadow: hsl(224, 28%, 35%);
    --theme1-key-red: hsl(6, 63%, 50%);
    --theme1-key-red-shadow: hsl(6, 70%, 34%);
    --theme1-key-white: hsl(30, 25%, 89%);
    --theme1-key-white-shadow: hsl(28, 16%, 65%);
    --theme1-text: hsl(221, 14%, 31%);
    --theme1-text-white: hsl(0, 0, 100%);

    --theme2-background: hsl(0, 0%, 90%);
    --theme2-toggle: hsl(0, 5%, 81%);
    --theme2-screen: hsl(0, 0%, 93%);
    --theme2-key-background: hsl(185, 42%, 37%);
    --theme2-key-shadow: hsl(185, 58%, 25%);
    --theme2-key-orange: hsl(25, 98%, 40%);
    --theme2-key-orange-shadow: hsl(25, 99%, 27%);
    --theme2-key-white: hsl(45, 7%, 89%);
    --theme2-key-white-shadow: hsl(35, 11%, 61%);
    --theme2-text: hsl(60, 10%, 19%);
    --theme2-text-white: hsl(0, 0, 100%);

    --theme3-background: hsl(268, 75%, 9%);
    --theme3-toggle: hsl(268, 71%, 12%);
    --theme3-key-background: hsl(281, 89%, 26%);
    --theme3-key-shadow: hsl(285, 91%, 52%);
    --theme3-key-secondary: hsl(176, 100%, 44%);
    --theme3-key-secondary-shadow: hsl(177, 92%, 70%);
    --theme3-key-dark: hsl(268, 47%, 21%);
    --theme3-key-dark-shadow: hsl(290, 70%, 36%);
    --theme3-text-yellow: hsl(52, 100%, 62%);
    --theme3-text-dark: hsl(198, 20%, 13%);
    --theme3-text-white: hsl(0, 0, 100%);
  }
`;
