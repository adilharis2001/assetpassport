import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="slide-1" className="slide bg-gradient-primary">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl float-delay-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl float-delay-1"></div>
      </div>

      <div className="slide-content animate-fade-in">
        {/* Emoji */}
        <div className="text-8xl md:text-9xl mb-12 animate-scale-in">🎯</div>
        
        {/* Tagline */}
        <div className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-8 font-medium text-shadow animate-slide-up">
          Bringing Web3 into Fixed Asset Accounting
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-8 text-white text-shadow-lg animate-slide-up">
          Real-World Asset Passports
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-16 max-w-5xl mx-auto leading-relaxed text-shadow animate-slide-up">
          No tokens. No wallets. Just verified proof that your asset exists.
        </p>

        {/* CTA button */}
        <div className="animate-slide-up">
          <Link href="/app">
            <Button size="lg" className="text-2xl px-16 py-8 bg-white text-gray-800 hover:bg-gray-100 hover:text-gray-900 transform hover:scale-110 transition-all duration-300 shadow-2xl font-bold">
              Go to App
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
