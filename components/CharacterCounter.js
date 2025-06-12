import { useEffect, useState } from 'react'

export default function CharacterCounter({ text }) {
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    setCharCount(text.length)
    setWordCount(text.trim() === '' ? 0 : text.trim().split(/\s+/).length)
  }, [text])

  return (
    <div className="text-muted small mt-2">
      🧾 {wordCount} word(s), {charCount} character(s)
    </div>
  )
}