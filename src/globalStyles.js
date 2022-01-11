import { createGlobalStyle } from 'styled-components';

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
    largePageWidth: 1600,
    regularPageWidth: 1100,
    textPageWidth: 800,
};

const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        fontFamily: Source Sans Pro, sans-serif;
    }
    #root {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
