import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-mauve to-charcoal">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Secure Your Digital Future?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of users who trust AssetPassport with their digital assets. 
          Start your journey today and experience the future of asset management.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/dashboard">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-charcoal hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-charcoal">
              Contact Sales
            </Button>
          </Link>
        </div>
        
        <p className="text-white/70 text-sm mt-6">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
