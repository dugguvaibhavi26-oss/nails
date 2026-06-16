import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const QUESTIONS = [
  {
    id: 'mood',
    title: "What's your mood today?",
    options: ['Bold & Daring', 'Soft & Romantic', 'Clean & Minimal', 'Dark & Mysterious']
  },
  {
    id: 'occasion',
    title: "Where are you heading?",
    options: ['Everyday Office', 'Night Out', 'Bridal / Wedding', 'Vacation Resort']
  },
  {
    id: 'finish',
    title: "What finish do you desire?",
    options: ['High Gloss Gel', 'Velvet Matte', 'Chrome Metallic', 'Subtle Shimmer']
  }
]

export default function MoodFinder() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [QUESTIONS[step].id]: option })
    
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      setIsAnalyzing(true)
      setTimeout(() => setIsAnalyzing(false), 2500)
    }
  }

  return (
    <main className="w-full bg-luxury-black text-warm-white min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl text-center relative h-[500px]">
        <AnimatePresence mode="wait">
          {!isAnalyzing && step < QUESTIONS.length && (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-subtle-gray mb-6 block">Question {step + 1} of {QUESTIONS.length}</span>
              <h2 className="text-4xl md:text-5xl font-heading tracking-widest mb-12 leading-tight">{QUESTIONS[step].title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {QUESTIONS[step].options.map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="p-6 border border-warm-white/20 text-sm tracking-widest uppercase hover:bg-warm-white hover:text-luxury-black transition-all duration-300 backdrop-blur-sm"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 border-t-2 border-warm-white rounded-full animate-spin mb-8"></div>
              <h2 className="text-2xl font-heading tracking-widest animate-pulse">CURATING YOUR COLLECTION...</h2>
            </motion.div>
          )}

          {!isAnalyzing && step === QUESTIONS.length && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-dusty-rose mb-4 block">Your Perfect Match</span>
              <h2 className="text-5xl md:text-6xl font-heading tracking-widest mb-8">THE MIDNIGHT COLLECTION</h2>
              <p className="text-sm font-body text-warm-white/70 max-w-md mx-auto mb-10 leading-relaxed">
                Based on your desire for a {answers.mood?.toLowerCase()} look with a {answers.finish?.toLowerCase()} finish, we've curated a selection of deep, dimensional shades perfect for your {answers.occasion?.toLowerCase()}.
              </p>
              <Link to="/shop" className="px-10 py-4 bg-warm-white text-luxury-black text-xs uppercase tracking-[0.2em] hover:bg-dusty-rose hover:text-warm-white transition-colors">
                Shop The Collection
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
