// pages/login.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase' // ✅ Import from shared Firebase config
import Head from 'next/head'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/generate')
    } catch (err) {
      setError('❌ ' + err.message.replace('Firebase:', '').replace('auth/', '').replace(/-/g, ' '))
    }
  }

  return (
    <>
      <Head>
        <title>Login | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      {/* 🌄 Background Image */}
      <div style={{
        backgroundImage: 'url("https://assets-global.website-files.com/653c03c7c53a2bcd281723b3/653d21a168483c9744514ee2_649c9c12f6d41f0d1ce9b5b0_Midjourney%2520Storyboard.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'blur(4px) brightness(0.6)',
      }} />

      {/* 🔐 Login Form */}
      <div className="d-flex justify-content-center align-items-center vh-100 px-3">
        <div
          className="bg-white bg-opacity-75 p-5 rounded shadow-lg animate__animated animate__fadeInDown"
          style={{ minWidth: '350px', maxWidth: '90%' }}
        >
          <h2 className="text-center mb-4 text-dark">🔐 Login</h2>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>

          {/* 🧾 Sign Up Prompt */}
          <p className="mt-3 text-center text-dark">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-primary fw-bold">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  )
}
