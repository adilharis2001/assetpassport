import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose to-mauve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built for the Future of Finance
            </h2>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              AssetPassport was created by a team of blockchain experts, security professionals, and 
              financial innovators who believe in the power of decentralized technology to democratize 
              access to financial services.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our mission is to provide individuals and institutions with the tools they need to securely 
              manage, trade, and grow their digital assets in a transparent and accessible way.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$50M+</div>
                <div className="text-white/80">Assets Under Management</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white font-medium">Real-time Asset Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-medium">Multi-chain Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-white font-medium">Advanced Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-white font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
