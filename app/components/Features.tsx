'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Image, Users, Shield, Camera, Clock } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Replies",
    description: "ElxyzAI can understand and respond to your WhatsApp messages intelligently, saving you time and effort.",
    link: "#ai-replies"
  },
  {
    icon: Camera,
    title: "Photo Analysis",
    description: "Send photos to ElxyzAI for instant analysis and get detailed information about the image content.",
    link: "#photo-analysis"
  },
  {
    icon: Shield,
    title: "Anti-Porn Protection",
    description: "Automatically detect and filter out inappropriate content in group chats to maintain a safe environment.",
    link: "#content-protection"
  },
  {
    icon: Users,
    title: "Group Management",
    description: "Automatically open and close WhatsApp groups based on your preferences and schedules.",
    link: "#group-management"
  },
  {
    icon: Image,
    title: "Image Generation",
    description: "Generate custom images based on text descriptions for creative and engaging conversations.",
    link: "#image-generation"
  },
  {
    icon: Clock,
    title: "Real-Time Information",
    description: "Access up-to-date information and stay informed with our AI's ability to provide real-time data and current events.",
    link: "#real-time-info"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-400">
            <feature.icon className="mr-2 h-6 w-6" />
            <a href={feature.link} className="hover:underline">{feature.title}</a>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

