import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import WelcomeScreen from './components/WelcomeScreen'
import Confirmation from './components/Confirmation'

type Section = 'welcome' | 'confirmation'| 'quiz' | 'end'

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('welcome')

  const renderSection = () => {
    switch (currentSection) {
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentSection('confirmation')} />
      case 'confirmation':
        return <Confirmation onYes={() => setCurrentSection('quiz')} />
      case 'quiz':
        return <Quiz onComplete={() => setCurrentSection('end')} />
      case 'end':
        return (
          <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 flex items-center justify-center p-6">
            <div className="text-center">

              <p className="text-2xl text-gray-700 mb-8">
                Dankje voor de geweldige afgelopen 2 jaren pookie! 🥰
              </p>
            </div>
          </div>
        )
      default:
        return <WelcomeScreen onNext={() => setCurrentSection('quiz')} />
    }
  }

  return (
    <div className="min-h-screen">
      {renderSection()}
    </div>
  )
}

export default App
