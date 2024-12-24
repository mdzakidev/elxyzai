import { Metadata } from 'next'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { metadata as siteMetadata } from './metadata'

export const metadata: Metadata = {
  ...siteMetadata,
  title: 'ElxyzAI - Home',
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}

