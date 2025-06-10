// pages/story.js
import { useState } from 'react'
import StoryInput from '../components/StoryInput'
import StoryPreview from '../components/StoryPreview'

export default function StoryPage() {
  const [keyword, setKeyword] = useState('')

  const handleGenerate = (value) => {
    setKeyword(value)
  }

  return (
    <div className="container py-5">
      <h1 className="text-center">📝 Create Your MicroStory</h1>
      <StoryInput onGenerate={handleGenerate} />
      <StoryPreview keyword={keyword} />
    </div>
  )
}
