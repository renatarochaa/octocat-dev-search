import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            primaryText: string;
            secondaryText: string;
            tertiaryText: string;

            background: string;
            backgroundLight: string;
            
            error: string;
        }
    }
}