import { createGlobalStyle } from 'styled-components';
import SpaceMono from '../assets/fonts/SpaceMono-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Space Mono';
        src: url(${SpaceMono}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono', monospace; 
        font-size: 16px;
        color: ${props => props.theme.colors.primaryText};
        background-color: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;
