// pages/generate.js
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CharacterCounter from '../components/CharacterCounter'
import WordHistory from '../components/WordHistory'

export default function Generate() {
  const [prompt, setPrompt] = useState('')
  const [story, setStory] = useState('')
  const [confirmedPrompt, setConfirmedPrompt] = useState('')
  const router = useRouter()

  const generateStory = () => {
    const trimmed = prompt.trim()
    if (!trimmed) return
    setStory(`✨ In just 83 words, a tale of "${trimmed}" unfolded, mysterious and unforgettable.`)
    setConfirmedPrompt(trimmed)
  }

  const goHome = () => {
    router.push('/')
  }

  return (
    <>
      <Head>
        <title>Generate | MicroMuse</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div
        className="d-flex flex-column align-items-center justify-content-center text-white text-center min-vh-100 px-3"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="bg-dark bg-opacity-75 p-5 rounded shadow-lg"
          style={{ maxWidth: '600px', width: '100%' }}
        >
          <h1 className="fw-bold mb-4">🔮 Generate Microfiction</h1>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter a word or theme..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <CharacterCounter text={prompt} />

          <button className="btn btn-light w-100 mb-3" onClick={generateStory}>
            ✨ Generate Story
          </button>

          {story && (
            <div className="alert alert-info text-dark mt-4 rounded shadow-sm">
              {story}
            </div>
          )}

          <WordHistory newPrompt={confirmedPrompt} />

          <button className="btn btn-outline-light mt-4" onClick={goHome}>
            ⬅ Back to Home
          </button>
        </div>
      </div>
    </>
  )
}
