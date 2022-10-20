import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../theme/default";
import GlobalStyles from "./global";

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Theme;
