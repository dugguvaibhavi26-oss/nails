import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  // Use springs for smooth trailing
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorX = useSpring(mousePosition.x, springConfig)
  const cursorY = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  // Listen for custom events to change cursor state
  useEffect(() => {
    const handleCursorChange = (e: CustomEvent) => setCursorVariant(e.detail)
    window.addEventListener('cursorChange', handleCursorChange as EventListener)
    return () => window.removeEventListener('cursorChange', handleCursorChange as EventListener)
  }, [])

  const variants = {
    default: {
      height: 12,
      width: 12,
      x: "-50%",
      y: "-50%",
      backgroundColor: "#111111",
      mixBlendMode: "difference" as const
    },
    discover: {
      height: 80,
      width: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: "transparent",
      border: "1px solid rgba(17, 17, 17, 0.2)",
      backdropFilter: "blur(4px)",
      mixBlendMode: "normal" as const
    }
  }

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      style={{
        left: cursorX,
        top: cursorY,
      }}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center transition-colors"
    >
      {cursorVariant === 'discover' && (
        <span className="text-[10px] uppercase tracking-widest text-luxury-black font-body absolute">View</span>
      )}
    </motion.div>
  )
}
