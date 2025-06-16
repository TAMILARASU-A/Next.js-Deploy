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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      {/* 🌌 Enhanced Parallax Background */}
      <div
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,50,0.6)),
            url("https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&w=1600&q=80")
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
          style={{ maxWidth: '750px', width: '100%' }}
        >
          <div className="text-center mb-4">
            <h1 className="fw-bold display-4">📘 About MicroMuse</h1>
            <p className="lead text-light">Where creativity meets code, and stories spark in seconds.</p>
          </div>

          <div className="fs-5 text-white-50">
            <p>
              <strong>MicroMuse</strong> is your AI-powered storyteller, conjuring microfiction masterpieces from a single idea.
              From suspense to love, fantasy to sci-fi, every genre becomes a playground of possibility.
            </p>
            <p>
              We blend OpenAI & Gemini APIs with beautiful design to turn daily prompts into short fiction under 100 words.
              Whether you're a reader, writer, or dreamer, MicroMuse welcomes your imagination.
            </p>
            <p>
              Start creating. Start feeling. Start MicroMuse.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-4 text-center animate__animated animate__fadeIn animate__delay-1s">
          <Link href="/" className="btn btn-outline-light me-3 shadow-sm">🏠 Home</Link>
          <Link href="/generate" className="btn btn-light shadow-sm">✨ Try Generate</Link>
        </div>
      </div>

      {/* Glassmorphism Style */}
      <style jsx>{`
        .bg-glass {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
        }
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </>
  )
}
