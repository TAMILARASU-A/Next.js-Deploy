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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      {/* 🌌 Parallax Background */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,50,0.7)),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80")
          `,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* Main Content */}
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-white text-shadow">
        <div
          className="p-5 rounded-5 bg-glass animate__animated animate__fadeInUp animate__slower shadow-lg"
          style={{ maxWidth: '600px', width: '100%' }}
        >
          <div className="text-center mb-4">
            <h1 className="fw-bold display-5">📬 Contact Us</h1>
            <p className="lead text-light">We’d love to hear your ideas or feedback!</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Your Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-light"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Your Email</label>
                <input
                  type="email"
                  className="form-control bg-transparent text-white border-light"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">Message</label>
                <textarea
                  className="form-control bg-transparent text-white border-light"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 shadow-sm">📨 Send Message</button>
            </form>
          ) : (
            <div className="alert alert-success text-center mt-4 mb-0 rounded-4">
              ✅ Thank you! Your message has been sent.
            </div>
          )}

          {/* 📞 Your Contact Info */}
          <div className="mt-4 text-center text-light">
            <p className="mb-1"><strong>Email:</strong> arasu9725@gmail.com</p>
            <p className="mb-0"><strong>Phone:</strong> +91 9750273135</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 text-center animate__animated animate__fadeIn animate__delay-1s">
          <Link href="/" className="btn btn-outline-light me-3 shadow-sm">🏠 Home</Link>
          <Link href="/generate" className="btn btn-light shadow-sm">✍️ Try Generate</Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .bg-glass {
          background: rgba(255, 255, 255, 0.07);
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }
        .text-shadow {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        }
        input, textarea {
          box-shadow: none !important;
        }
      `}</style>
    </>
  )
}
