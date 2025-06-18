// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Google Font: EB Garamond */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "'EB Garamond', serif" }}>
        <Main />
        <NextScript />
        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </body>
    </Html>
  )
}
