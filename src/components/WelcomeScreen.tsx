import { useState, useEffect } from 'react'

interface WelcomeScreenProps {
  onNext: () => void
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center p-6">
      <div className={`text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <h1 className="text-7xl mb-4 animate-pulse">💕</h1>
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            2 jaartjes samen
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            {"een kleine collage van leuke momentjes samen :)"}
          </p>
        </div>
        

        <button
          onClick={onNext}
          className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce"
        >
          Go Go Go Gooo 🚀
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen
