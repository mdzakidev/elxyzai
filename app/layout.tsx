'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-screen"
            >
              <motion.div
                className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  )
}

