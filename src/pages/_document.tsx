/* import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/> 
                    <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Pacifico&family=Source+Sans+Pro&family=Staatliches&display=swap" rel="stylesheet" />
                    <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        );
    }
} */

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render(){
    return(
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/> 
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Pacifico&family=Source+Sans+Pro&family=Staatliches&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml"></link>
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    );
}
}