'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 z-50 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          ElxyzAI
        </Link>
        <nav className={`hidden md:flex space-x-4`}>
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors">
            Documentation
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">
          Try Now
        </Button>
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 p-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Button variant="outline" className="w-full">
                Try Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

