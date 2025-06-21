// pages/signup.js
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/generate') // Redirect after signup
    } catch (err) {
      setError('❌ ' + err.message.replace('Firebase:', '').replace('auth/', '').replace(/-/g, ' '))
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="bg-white p-5 rounded-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">📝 Create Account</h2>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary w-100">Sign Up</button>
          </form>

          <p className="mt-3 text-center text-dark">
            Already have an account?{' '}
            <Link href="/login" className="text-decoration-none">Log in</Link>
          </p>
        </div>
      </div>
    </>
  )
}
