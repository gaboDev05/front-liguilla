import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Jost';
        line-height: 1.5;
        font-weight: 400;

        background: ${({ theme }) => theme.background};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
`;

export const lightTheme = {
    background: '#F7F7F9',
    background_container: '#FFFFFF',
    text_primary: '#716F70',
    text_secondary: '',
    accent: '',
    accent_hover: '',
};