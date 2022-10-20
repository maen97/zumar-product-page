import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    radius: "10px",

    fonts: {
        title: "'Poppins', sans-serif",
        main: "'Poppins', sans-serif",
    },

    palette: {
        common: {
            black: "#222831",
            white: "#ffffff",
            highlight: "#ecf1f4",
            accent: "#ff374e",
            danger: "#f95659",
            success: "#38B349",
            dark: "#0f3043",
        },
        primary: {
            main: "#000",
        },
        secondary: {
            main: "#f95659",
        },
    },

    breakpoints: {
        xs: "screen and (max-width: 320px)",
        sm: "screen and (max-width: 640px)",
        md: "screen and (max-width: 992px)",
        lg: "screen and (max-width: 1024px)",
        xl: "screen and (max-width: 1280px)",
    },

    spacing: (factor) => `${5 * factor}px`,
};
export default theme;
