import React from "react"
import { createGlobalStyle } from "styled-components"
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
  }

  *, *+* {
    padding: 0;
    margin: 0;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}

export default Layout
