import React from "react"
import { ThemeProvider } from "styled-components"
//styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      Layout components
      {children}
    </ThemeProvider>
  )
}

export default Layout
