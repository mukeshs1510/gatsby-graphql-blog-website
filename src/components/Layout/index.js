import React from "react"
import { ThemeProvider } from "styled-components"

import Header from "components/Header"

//styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"
import { useMetaDataQuery } from "../../hooks/useMetaDataQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log(data)

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
