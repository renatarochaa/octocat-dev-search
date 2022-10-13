import React, { ReactChild } from "react";

import { ThemeProvider } from "styled-components";

import dark from "../styles/themes/dark";
import GlobalStyle from "../styles/global";

interface TestWrapperProps {
    children: ReactChild | ReactChild[]
}

const TestWrapper = ({ children }: TestWrapperProps) =>
    <ThemeProvider theme={dark}>
        <GlobalStyle /> 
        {children}
    </ThemeProvider>

export default TestWrapper