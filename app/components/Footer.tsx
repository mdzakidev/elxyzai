import Link from 'next/link'
import { PhoneIcon as WhatsApp, Instagram, Github } from 'lucide-react'
import { FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ElxyzAI</h3>
            <p className="text-gray-400">Empowering your WhatsApp experience with cutting-edge AI technology. ElxyzAI brings intelligent responses, smart content analysis, and efficient group management to your fingertips.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <WhatsApp className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTiktok className="h-6 w-6" />
                <span className="sr-only">TikTok</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 ElxyzAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

