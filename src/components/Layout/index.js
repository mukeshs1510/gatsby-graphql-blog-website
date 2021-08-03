import React from "react"
import { ThemeProvider } from "styled-components"
//styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

const index = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout components
      {children}
    </ThemeProvider>
  )
}

export default index
