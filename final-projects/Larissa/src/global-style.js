import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  body {
    line-height: normal;
    margin: 0;
    padding: 0;
    background-color: #2e2f34;
    overflow-x: hidden;
  }

  html,
  body,
  #root,
  .App {
    font-family: 'Montserrat';
    width: 100%;
    min-height: 100%;
    height: auto;
    display: flex;
    font-weight: 400;
  }

  strong,
  b {
    font-weight: 600;
  }
`

export default globalStyle