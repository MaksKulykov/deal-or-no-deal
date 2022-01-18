import { createGlobalStyle } from 'styled-components';
import img from './static/images/background.jpeg';

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
        overflow: hidden;
    }
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Source Sans Pro, sans-serif;
        overflow: hidden;
    }
    #root {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-self: center;
        background-image: url(${img});
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
