// pages/index.js
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  const goToLogin = () => {
    alert('Redirecting to generate page...')
    router.push('/generate')
  }

  return (
    <>
      <Head>
        <title>MicroMuse - AI Microfiction</title>
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

      {/* Navbar */}
      

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" href="/">MicroMuse</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
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

      <div className="landing-page">
        {/* Header */}
        <header className="text-center py-4 bg-dark text-white animated fadeInDown">
          <h1>📘 MicroMuse</h1>
          <p className="lead">AI-Powered Daily Microfiction Generator</p>
        </header>

        {/* Hero */}
        <section className="text-center py-5 animated fadeIn">
          <h2 className="display-4 fw-bold">Small Stories. Big Impact.</h2>
          <p className="fs-5 mt-3">
            Enter a word or choose a genre. MicroMuse crafts a gripping micro-story under 100 words,
            every single day.
          </p>
          <Image
            src="https://picsum.photos/400/200"
            alt="MicroMuse banner"
            width={400}
            height={200}
            className="img-fluid my-3 rounded-4 shadow"
          />
        </section>

        {/* Features */}
        <section className="container text-center py-5 my-5 animated fadeInUp">
          <h3 className="mb-5">✨ What You Can Do</h3>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="p-4 border rounded-4 h-100 shadow-sm bg-white">
                <h5>🧠 AI Story Generator</h5>
                <p>Generate unique microfiction using AI.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded-4 h-100 shadow-sm bg-white">
                <h5>🎭 Genre Selection</h5>
                <p>Pick your genre: Horror, Romance, Sci-Fi, and more.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded-4 h-100 shadow-sm bg-white">
                <h5>🖼️ Quote Cards</h5>
                <p>Convert stories into beautiful images.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded-4 h-100 shadow-sm bg-white">
                <h5>🔁 Daily Updates</h5>
                <p>Receive new stories daily with push alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-light py-5 text-center animated fadeInUp delay-1s">
          <h3>🔍 How It Works</h3>
          <div className="row mt-4 justify-content-center">
            <div className="col-md-3">
              <p><strong>1️⃣</strong> Enter a word or pick a theme</p>
            </div>
            <div className="col-md-3">
              <p><strong>2️⃣</strong> MicroMuse generates a story instantly</p>
            </div>
            <div className="col-md-3">
              <p><strong>3️⃣</strong> Save, share, or get daily updates</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-4 animated fadeInUp delay-2s">
          <button className="btn btn-primary btn-lg px-5" onClick={goToLogin}>
            Get Started →
          </button>
          <p className="mt-3">
            Already have an account?{' '}
            <Link href="/login">Log in here</Link>
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 animated fadeInUp delay-3s">
          <small>&copy; 2025 MicroMuse | Powered by Gemini API & Firebase</small>
        </footer>
      </div>
    </>
  )
}