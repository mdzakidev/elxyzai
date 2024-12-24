import Header from '../components/Header'
import Documentation from '../components/Documentation'
import Footer from '../components/Footer'
import Metadata from '../components/Metadata'

export default function DocumentationPage() {
  return (
    <>
      <Metadata 
        title="ElxyzAI Documentation - API Integration Guide"
        description="Comprehensive guide for integrating ElxyzAI into your application. Learn about authentication, making requests, and handling responses."
        keywords="ElxyzAI, API documentation, integration guide, WhatsApp AI, chatbot API"
      />
      <main className="min-h-screen flex flex-col">
        <Header />
        <Documentation />
        <Footer />
      </main>
    </>
  )
}

