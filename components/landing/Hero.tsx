import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-peach to-rose py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Your Digital Assets with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-400">
              Web3 Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            AssetPassport provides a decentralized, secure, and user-friendly platform for managing your digital assets. 
            Built on blockchain technology for ultimate transparency and control.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
              <span>Secure by Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
              <span>Decentralized</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
              <span>User Owned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
