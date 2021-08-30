import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  html, body, #root{
    margin: auto;
  }

  body{
    font: 14px 'Roboto', sans-serif;
    background: rgb(255, 255, 224);
    color: rgb(54, 54, 54);
    margin: auto;
    --webkit-font-smoothing: antialiased !important;
  }

  ul{
    list-style: none;
  }
`