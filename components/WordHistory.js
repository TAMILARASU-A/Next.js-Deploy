import { useEffect, useState } from 'react'

export default function WordHistory({ newPrompt }) {
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (newPrompt && newPrompt.trim()) {
      setHistory((prev) => {
        const updated = [newPrompt, ...prev.filter((item) => item !== newPrompt)]
        return updated.slice(0, 5) // Limit to last 5 unique prompts
      })
    }
  }, [newPrompt])

  return (
    <div className="mt-4 text-start">
      <h5 className="text-white">🕘 Recent Prompts</h5>
      <ul className="list-group">
        {history.map((item, index) => (
          <li
            key={index}
            className="list-group-item bg-dark text-white border-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}