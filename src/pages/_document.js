import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/8fb7fe186b.js" crossOrigin="anonymous"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}