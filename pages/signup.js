import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/generate')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <Head>
        <title>Signup | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.8)',
      }}>
        <div className="bg-white bg-opacity-75 p-5 rounded shadow" style={{ minWidth: '350px', maxWidth: '90%' }}>
          <h2 className="text-center mb-4 text-dark">🔐 Sign Up</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          </form>
          <p className="mt-3 text-center text-dark">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </>
  )
}
