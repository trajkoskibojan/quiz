import React from "react";
import { ThemeProvider } from "styled-components";
import { ResetCSS, theme } from "./config";
import "bootstrap/dist/css/bootstrap.min.css";

const StyleProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ResetCSS />
    {children}
  </ThemeProvider>
);

export default StyleProvider;
