import React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
  )
}

export default MyApp
