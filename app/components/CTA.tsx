'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your WhatsApp Experience?
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join thousands of users who are already enjoying the power of AI in their WhatsApp conversations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

