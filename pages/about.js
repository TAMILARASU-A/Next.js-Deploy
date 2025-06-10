import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function About() {
  const [bgImage, setBgImage] = useState(
    'https://via.placeholder.com/10x6?text=Loading...' // low-res placeholder
  )

  useEffect(() => {
    const img = new Image()
    img.src = 'https://th.bing.com/th/id/OIP.3ZgfqvAIkpvjOqBt2p_-wQHaEo?pid=ImgDet&rs=1'
    img.onload = () => setBgImage(img.src)
  }, [])

  return (
    <>
      <Head>
        <title>About | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="d-flex flex-column align-items-center justify-content-center min-vh-100 px-3 text-white"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.8s ease-in-out',
        }}
      >
        <div
          className="text-center p-4 rounded-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            maxWidth: '700px',
            backdropFilter: 'blur(4px)',
          }}
        >
          <h1 className="fw-bold mb-3">📖 About MicroMuse</h1>
          <p className="fs-5">
            <strong>MicroMuse</strong> is an AI-powered microfiction generator that brings
            bite-sized stories to life with a single word or idea. Whether you're a writer looking
            for inspiration or a reader in love with short-form storytelling, MicroMuse delivers
            creative sparks in under 100 words.
          </p>

          <div className="mt-4">
            <Link href="/" className="btn btn-outline-light me-3">
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
