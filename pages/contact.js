// pages/contact.js
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
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-dark"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div
          className="bg-white bg-opacity-75 p-4 rounded shadow-lg"
          style={{
            maxWidth: '500px',
            width: '100%',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <div className="text-center mb-4">
            <h1 className="fw-bold">📬 Contact Us</h1>
            <p className="lead">We’d love to hear your thoughts, ideas, or feedback!</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          ) : (
            <div className="alert alert-success text-center">
              ✅ Thank you! Your message has been sent.
            </div>
          )}
        </div>

        <div className="mt-4">
          <Link href="/" className="btn btn-outline-light me-3">🏠 Home</Link>
          <Link href="/generate" className="btn btn-light">✍️ Try Generate</Link>
        </div>
      </div>
    </>
  )
}
