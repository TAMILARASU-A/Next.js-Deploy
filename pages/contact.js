import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Contact | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-white"
        style={{
          backgroundImage:
            'url("https://th.bing.com/th/id/OIP.3ZgfqvAIkpvjOqBt2p_-wQHaEo?pid=ImgDet&rs=1")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(2px)',
        }}
      >
        <div
          className="p-4 rounded-4 shadow"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            maxWidth: '500px',
            width: '100%',
          }}
        >
          <div className="text-center mb-4">
            <h1 className="fw-bold text-white">📬 Contact Us</h1>
            <p className="lead text-light">
              We’d love to hear your thoughts, ideas, or feedback!
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white">
                  Your Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white">
                  Your Email
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          ) : (
            <div className="alert alert-success text-center">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </div>

        <div className="mt-4">
          <Link href="/" className="btn btn-outline-light me-3">
            🏠 Home
          </Link>
          <Link href="/generate" className="btn btn-light">
            ✍️ Try Generate
          </Link>
        </div>
      </div>
    </>
  )
}
