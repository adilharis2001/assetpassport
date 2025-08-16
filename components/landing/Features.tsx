import { Shield, Lock, Zap, Users, BarChart3, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'Built with enterprise-grade security protocols and blockchain technology for maximum protection.'
  },
  {
    icon: Lock,
    title: 'Decentralized Control',
    description: 'Your assets, your control. No central authority can freeze or seize your digital property.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on modern blockchain infrastructure for instant transactions and real-time updates.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Governed by the community with transparent decision-making processes.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive insights into your asset performance and portfolio health.'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Access your assets from anywhere in the world, 24/7.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AssetPassport?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most secure and user-friendly platform for managing your digital assets. 
            Here's what makes us different.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-cream to-peach p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
