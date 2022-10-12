import React, { ReactChild } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import dark from "../styles/themes/dark";

interface TestWrapperProps {
    children: ReactChild | ReactChild[]
}

const TestWrapper = ({ children }: TestWrapperProps) =>
    <ThemeProvider theme={dark}>
        <GlobalStyle /> 
        {children}
    </ThemeProvider>

export default TestWrapper