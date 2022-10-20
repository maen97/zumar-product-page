import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: {
            title: string;
            main: string;
        };

        // Breakpoints for responsive design
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };

        palette: {
            common: {
                black: string;
                white: string;
                highlight: string;
                accent: string;
                danger: string;
                success: string;
                dark: string;
            };
            primary: {
                main: string;
                contrastText?: string;
            };
            secondary: {
                main: string;
                contrastText?: string;
            };
        };
        spacing: (factor: number) => string;
        radius: string;
    }
}
