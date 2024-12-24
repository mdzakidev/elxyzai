'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    features: [
      "1,000 messages per month",
      "Basic AI responses",
      "Group management",
      "24/7 support"
    ]
  },
  {
    name: "Pro",
    price: "$19.99",
    features: [
      "5,000 messages per month",
      "Advanced AI responses",
      "Photo analysis",
      "Anti-porn protection",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited messages",
      "Custom AI model training",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom integrations"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ plan, index }) {
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
          <CardTitle className="text-2xl font-bold text-blue-400">{plan.name}</CardTitle>
          <CardDescription className="text-3xl font-bold text-white">{plan.price}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Choose {plan.name}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

