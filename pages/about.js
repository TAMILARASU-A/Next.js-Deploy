import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About | MicroMuse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
      </Head>

      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-dark"
        style={{
          backgroundImage: 'url("https://picsum.photos/1200/800")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="text-center bg-white bg-opacity-75 p-5 rounded-4 shadow"
          style={{ maxWidth: '700px' }}
        >
          <h1 className="fw-bold mb-3">📖 About MicroMuse</h1>
          <p className="fs-5">
            <strong>MicroMuse</strong> is an AI-powered microfiction generator that brings
            bite-sized stories to life with a single word or idea. Whether you&#39;re a writer
            looking for inspiration or a reader in love with short-form storytelling, MicroMuse
            delivers creative sparks in under 100 words.
          </p>

          <div className="mt-4">
            <Link href="/" className="btn btn-outline-primary me-3">
              🏠 Home
            </Link>
            <Link href="/generate" className="btn btn-primary">
              ✍️ Try Generating
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
