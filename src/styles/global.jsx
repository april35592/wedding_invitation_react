import { createGlobalStyle } from "styled-components";

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};
setScreenSize();

const GlobalStyle = createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 100%);
    --black: hsl(210, 8%, 5%);
    --green1: rgb(130,150,120);
    --green2: rgb(173,181,167);
    --green3: rgb(234,243,221);
    --black-025: hsl(210, 8%, 97.5%);
    --black-050: hsl(210, 8%, 95%);
    --black-075: hsl(210, 8%, 90%);
    --black-100: hsl(210, 8%, 85%);
    --black-150: hsl(210, 8%, 80%);
    --black-200: hsl(210, 8%, 75%);
    --black-300: hsl(210, 8%, 65%);
    --black-350: hsl(210, 8%, 60%);
    --black-400: hsl(210, 8%, 55%);
    --black-500: hsl(210, 8%, 45%);
    --black-600: hsl(210, 8%, 35%);
    --black-700: hsl(210, 8%, 25%);
    --black-750: hsl(210, 8%, 20%);
    --black-800: hsl(210, 8%, 15%);
    --black-900: hsl(210, 8%, 5%);
    --fs-normal: 16px;
    --fs-small: 14px;
    --fs-large: 18px;
    --fs-xxlarge: 26px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: unset;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    vertical-align: middle;
    text-decoration-line: none;
  }

  body {
    font-size: var(--fs-base);

  }

  #root {
    background-color: var(--white);
    width: 100vw;
    height: max-content;
    position: relative;
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-normal);
    font-weight: 400;

    strong {
        font-weight: 600;
      }
  }
`;

export default GlobalStyle;
