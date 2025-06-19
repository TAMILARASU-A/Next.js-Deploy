// pages/generate.js
import { useState, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import CharacterCounter from '../components/CharacterCounter'
import WordHistory from '../components/WordHistory'

function Generate() {
  const [prompt, setPrompt] = useState('')
  const [story, setStory] = useState('')
  const [confirmedPrompt, setConfirmedPrompt] = useState('')
  const router = useRouter()
  const storyRef = useRef(null)

  const generateStory = async () => {
    const trimmed = prompt.trim()
    if (!trimmed) return

    setStory('✨ Generating your story...')

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: `Write a short microfiction story about: ${trimmed}`,
        }),
      })

      const data = await res.json()

      if (data.text) {
        setStory(data.text)
        setConfirmedPrompt(trimmed)

        // Save to Firestore
        try {
          await addDoc(collection(db, 'stories'), {
            prompt: trimmed,
            story: data.text,
            createdAt: serverTimestamp(),
          })
        } catch (error) {
          console.error('Error saving to Firestore:', error)
        }

      } else {
        setStory('❌ No story returned.')
      }
    } catch (err) {
      console.error('Error generating story:', err)
      setStory('❌ Error generating story.')
    }
  }

  const handleDownloadImage = async () => {
    if (!storyRef.current) return
    const canvas = await html2canvas(storyRef.current)
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = 'microfiction-story.png'
    link.click()
  }

  const handleDownloadPDF = async () => {
    if (!storyRef.current) return
    const canvas = await html2canvas(storyRef.current)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF()
    const width = pdf.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width
    pdf.addImage(imgData, 'PNG', 0, 0, width, height)
    pdf.save('microfiction-story.pdf')
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
            <div ref={storyRef} className="alert alert-info text-dark mt-4 rounded shadow-sm">
              {story}
            </div>
          )}

          {story && (
            <div className="mt-3 d-flex justify-content-between flex-wrap">
              <button className="btn btn-outline-warning me-2 mb-2" onClick={handleDownloadImage}>
                🖼️ Save as Image
              </button>
              <button className="btn btn-outline-success mb-2" onClick={handleDownloadPDF}>
                📄 Save as PDF
              </button>
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

export default Generate
