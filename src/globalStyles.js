import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    },
    html {
        height: 100%,
    },
    body {
        height: 100%,
        margin: 0,
        padding: 0,
        fontFamily: Source Sans Pro, sans-serif,
        backgroundColor: #fff,
    },
    '#root' {
        display: flex,
        flexDirection: column,
        minHeight: 100%,
    }
`;

export default GlobalStyle;