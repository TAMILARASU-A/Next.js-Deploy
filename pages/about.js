// pages/about.js
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-white text-shadow"
        style={{
          backgroundImage: 'url("https://sl.bing.net/dhAegT7wfiC")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-center bg-dark bg-opacity-50 p-5 rounded-4" style={{ maxWidth: '700px' }}>
          <h1 className="fw-bold mb-3">📖 About MicroMuse</h1>
          <p className="fs-5">
            <strong>MicroMuse</strong> is an AI-powered microfiction generator that brings
            bite-sized stories to life with a single word or idea. Whether you're a writer looking
            for inspiration or a reader in love with short-form storytelling, MicroMuse delivers
            creative sparks in under 100 words.
          </p>

          <div className="mt-4">
            <Link href="/" className="btn btn-outline-light me-3">
              🏠 Home
            </Link>
            <Link href="/generate" className="btn btn-light">
              ✍️ Try Generating
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
