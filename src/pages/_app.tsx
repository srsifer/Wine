import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import { MyContext } from '../provider/Store'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [globalState, setGlobalState] = useState()

  return (
    <MyContext.Provider value={{globalState, setGlobalState}}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export default MyApp
