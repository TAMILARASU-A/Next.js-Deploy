import { useState, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CharacterCounter from '../components/CharacterCounter';
import WordHistory from '../components/WordHistory';

function Generate() {
  const [prompt, setPrompt] = useState('');
  const [genre, setGenre] = useState('');
  const [story, setStory] = useState('');
  const [confirmedPrompt, setConfirmedPrompt] = useState('');
  const [generatedTime, setGeneratedTime] = useState('');
  const router = useRouter();
  const storyRef = useRef(null);

  const generateStory = async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setStory('✨ Generating your story...');

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Write a very short ${genre || 'microfiction'} story about: ${trimmed}`,
        }),
      });

      const data = await res.json();

      if (data.text) {
        const now = new Date().toLocaleString();
        setStory(data.text);
        setConfirmedPrompt(trimmed);
        setGeneratedTime(now);

        await addDoc(collection(db, 'stories'), {
          prompt: trimmed,
          genre: genre || 'general',
          story: data.text,
          createdAt: serverTimestamp(),
        });
      } else {
        setStory('❌ No story returned.');
      }
    } catch (err) {
      console.error('Error generating story:', err);
      setStory('❌ Error generating story.');
    }
  };

  const handleDownloadImage = async () => {
    if (!storyRef.current) return;
    const canvas = await html2canvas(storyRef.current, {
      backgroundColor: '#ffffff',
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'microfiction-story.png';
    link.click();
  };

  const handleDownloadPDF = async () => {
    if (!storyRef.current) return;
    const canvas = await html2canvas(storyRef.current, {
      backgroundColor: '#ffffff',
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.setFontSize(12);
    pdf.setTextColor(80);
    pdf.text('Generated using MicroMuse', 10, height + 10);
    pdf.save('microfiction-story.pdf');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `MicroMuse - ${confirmedPrompt}`,
          text: story,
          url: window.location.href,
        })
        .catch((err) => console.error('Share failed:', err));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  const goHome = () => router.push('/');

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
        <div className="bg-dark bg-opacity-75 p-5 rounded shadow-lg" style={{ maxWidth: '700px', width: '100%' }}>
          <h1 className="fw-bold mb-4">🔮 Generate Microfiction</h1>

          <select
            className="form-select mb-3"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select Genre (optional)</option>
            <option value="science fiction">Science Fiction</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="comedy">Comedy</option>
          </select>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter a word or theme..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <CharacterCounter text={prompt} />

          <button className="btn btn-light w-100 mb-3 fw-semibold" onClick={generateStory}>
            ✨ Generate Story
          </button>

          {story && (
            <div
              ref={storyRef}
              className="mt-4 rounded shadow-sm text-start"
              style={{
                backgroundColor: '#fff',
                color: '#222',
                padding: '2rem',
                borderRadius: '12px',
                fontFamily: 'Georgia, serif',
                lineHeight: '1.7',
              }}
            >
              <h4 className="fw-bold mb-2">📘 MicroMuse Story</h4>
              <p><strong>Topic:</strong> {confirmedPrompt}</p>
              <p><strong>Generated on:</strong> {generatedTime}</p>
              <hr />
              <p>{story}</p>
              <hr />
              <p className="text-muted text-end"><em>— MicroMuse</em></p>
            </div>
          )}

          {story && (
            <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-warning text-dark px-4 fw-semibold" onClick={handleDownloadImage}>
                🖼️ Save Image
              </button>
              <button className="btn btn-success text-white px-4 fw-semibold" onClick={handleDownloadPDF}>
                📄 Save PDF
              </button>
              <button className="btn btn-primary text-white px-4 fw-semibold" onClick={handleShare}>
                📤 Share
              </button>
            </div>
          )}

          <WordHistory newPrompt={confirmedPrompt} />

          <button className="btn btn-outline-light mt-4" onClick={goHome}>
            ⬅ Back to Home
          </button>
        </div>
      </div>

      <style jsx>{`
        .btn {
          transition: all 0.2s ease-in-out;
          border-radius: 8px;
        }

        .btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
        }

        .form-select {
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default Generate;
