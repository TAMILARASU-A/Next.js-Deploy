// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const goToSignup = () => {
    router.push('/signup')
  }

  return (
    <>
      <Head>
        <title>MicroMuse - AI Microfiction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 🌄 Fullscreen Background */}
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'white',
          fontFamily: "'EB Garamond', serif",
        }}
      >
        {/* 🔗 Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div className="container">
            <Link href="/" className="navbar-brand">MicroMuse</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 🏠 Hero Section */}
        <header className="text-center py-5">
          <h1 className="display-3 fw-bold">📘 MicroMuse</h1>
          <p className="lead">Tiny Tales. Infinite Wonder.</p>
          <button className="btn btn-light btn-lg mt-4 shadow" onClick={goToSignup}>
            ✨ Get Started
          </button>
        </header>

        {/* ✨ Features (Only 2) */}
        <section className="text-center container py-5">
          <h2 className="mb-4">✨ What You Can Do</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="p-4 backdrop-card shadow-sm w-100">
                <h5>🧠 AI Story Generator</h5>
                <p>Generate unique microfiction instantly using AI.</p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch">
              <div className="p-4 backdrop-card shadow-sm w-100">
                <h5>🎭 Genre Selection</h5>
                <p>Pick your favorite genre like Horror, Romance, Sci-Fi and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 🔍 How It Works */}
        <section className="text-center py-5">
          <h3>🔍 How It Works</h3>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3">
              <p><strong>1️⃣</strong> Enter a word or pick a genre</p>
            </div>
            <div className="col-md-3">
              <p><strong>2️⃣</strong> MicroMuse generates a tiny tale</p>
            </div>
            <div className="col-md-3">
              <p><strong>3️⃣</strong> Download or share your creation</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-5 bg-dark">
          <h2>🌌 Ready to Write Magic?</h2>
          <p className="mb-4">Let MicroMuse turn your idea into a story.</p>
          <button className="btn btn-warning btn-lg px-5" onClick={goToSignup}>
            Begin Journey →
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 bg-black text-white">
          <small>&copy; 2025 MicroMuse | Powered by Gemini API & Firebase</small>
        </footer>
      </div>

      <style jsx>{`
        .backdrop-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: #fff;
          transition: transform 0.3s ease;
        }

        .backdrop-card:hover {
          transform: scale(1.03);
        }
      `}</style>
    </>
  )
}
