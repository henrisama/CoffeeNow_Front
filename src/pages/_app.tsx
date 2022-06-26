import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../global/styles/globals"
import theme from "../global/styles/theme"
import { ShopProvider } from "../hooks/useShop"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle>
        <ThemeProvider theme={theme}>
          <ShopProvider>
            <Component {...pageProps} />
          </ShopProvider>
        </ThemeProvider>
      </GlobalStyle>
    </>
  )
}

export default MyApp
