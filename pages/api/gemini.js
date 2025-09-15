import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  // Check for the correct request method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed.' });
  }

  // Extract the prompt from the request body
  const { prompt } = req.body;
  
  // Get the API key from environment variables
  const apiKey = process.env.GEMINI_API_KEY;

  // Check if the API key is missing
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY environment variable is not set.');
    return res.status(500).json({ error: 'Missing API key. Please configure the environment variable.' });
  }

  try {
    // Initialize the Google Generative AI client with the API key
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Get the specified Gemini model
    const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

    // Make the API call to generate content
    const result = await model.generateContent([prompt]);
    const response = await result.response;
    const text = response.text();
    
    // Send the generated text back to the client
    res.status(200).json({ text });
  } catch (error) {
    // This is the crucial part: log the specific error details.
    console.error('API request failed. Detailed error:', error);
    
    // Send a generic error message to the client, but the detailed error is now in Vercel logs.
    res.status(500).json({ error: 'Story not generated. Check Vercel logs for more details.' });
  }
}
