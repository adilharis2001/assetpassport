import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import About from '@/components/landing/About'
import CTA from '@/components/landing/CTA'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
