// pages/api/gemini.js
import { GoogleGenerativeAI } from '@google/generative-ai'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' })
  }

  const { prompt } = req.body
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing API key' })
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' })

    const result = await model.generateContent([prompt])
    const response = await result.response
    const text = response.text()

    res.status(200).json({ text })
  } catch (error) {
    console.error('API Error:', error)
    res.status(500).json({ error: 'Gemini API request failed.' })
  }
}
