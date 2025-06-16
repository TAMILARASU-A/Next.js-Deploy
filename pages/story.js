import Head from 'next/head'

export default function StoryPage() {
  return (
    <>
      <Head>
        <title>Story Page | MicroMuse</title>
      </Head>
      <main className="container py-5">
        <h1 className="text-center mb-4">📚 Your Story</h1>
        <p className="lead text-center">
          This page used to include inputs and previews, but now it’s a placeholder. 🎉
        </p>
      </main>
    </>
  )
}