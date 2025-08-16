import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <>
      {/* Tech Stack Slide */}
      <section id="slide-5" className="slide bg-peach-light">
        <div className="absolute inset-0">
          <div className="absolute top-32 right-16 w-72 h-72 bg-white/20 rounded-full blur-3xl float-delay-1"></div>
          <div className="absolute bottom-32 left-16 w-80 h-80 bg-white/30 rounded-full blur-3xl float-delay-3"></div>
        </div>

        <div className="slide-content animate-fade-in">
          <div className="text-8xl md:text-9xl mb-12 animate-scale-in">🧱</div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-800 mb-20 text-shadow animate-slide-up">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-8xl mx-auto animate-slide-up">
            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/flow.png" alt="Flow" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Flow</h4>
              <p className="text-base text-gray-700 leading-relaxed">to mint and register asset records</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/privy.png" alt="Privy" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Privy</h4>
              <p className="text-base text-gray-700 leading-relaxed">for walletless identity and embedded ownership</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/ens.png" alt="ENS" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">ENS</h4>
              <p className="text-base text-gray-700 leading-relaxed">for human-readable asset namespaces</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/graph.png" alt="The Graph" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">The Graph</h4>
              <p className="text-base text-gray-700 leading-relaxed">for fast asset lookups</p>
            </div>
            
            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/walrus.png" alt="Walrus" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Walrus</h4>
              <p className="text-base text-gray-700 leading-relaxed">for asset linking, QR generation, and secure metadata storage</p>
            </div>

            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/dynamic.png" alt="Dynamic" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dynamic</h4>
              <p className="text-base text-gray-700 leading-relaxed">for seamless Web3 wallet integration</p>
            </div>

            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/hardhat.png" alt="Hardhat" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hardhat</h4>
              <p className="text-base text-gray-700 leading-relaxed">for smart contract development and testing</p>
            </div>

            <div className="text-center p-12 bg-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <div className="flex justify-center mb-8">
                <img src="/logos/nora.png" alt="Nora" className="h-16 w-auto object-contain" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Nora</h4>
              <p className="text-base text-gray-700 leading-relaxed">for decentralized infrastructure management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Slide */}
      <section id="slide-6" className="slide bg-gradient-dark">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl float-delay-2"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl float-delay-1"></div>
        </div>

        <div className="slide-content animate-fade-in">
          <div className="text-8xl md:text-9xl mb-12 animate-scale-in">👉</div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-shadow-lg animate-slide-up">
            Call to Action
          </h2>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-20 leading-relaxed text-shadow max-w-5xl mx-auto animate-slide-up">
            <strong>Create your first passport in seconds</strong><br />
            No wallet setup. No code. No crypto learning curve.
          </p>

          <div className="animate-slide-up">
            <Link href="/app">
              <Button size="lg" className="text-2xl px-16 py-8 bg-white text-gray-900 hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl font-bold">
                Go to App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
