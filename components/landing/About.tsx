export default function About() {
  return (
    <section id="slide-4" className="slide bg-gradient-quaternary">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/15 rounded-full blur-3xl float-delay-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl float-delay-1"></div>
      </div>
      
      <div className="slide-content animate-fade-in">
        <div className="text-8xl md:text-9xl mb-12 animate-scale-in">🚀</div>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-16 text-shadow-lg animate-slide-up">
          Why This Works
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 text-xl md:text-2xl lg:text-3xl text-white/90 animate-slide-up">
            <div className="flex items-start justify-center">
              <span className="mr-6 mt-2 text-3xl text-white">•</span>
              <span><strong className="text-white">Easy onboarding</strong> — users log in like any app</span>
            </div>
            <div className="flex items-start justify-center">
              <span className="mr-6 mt-2 text-3xl text-white">•</span>
              <span><strong className="text-white">Powerful back-end</strong> — assets live on-chain, not in PDFs</span>
            </div>
            <div className="flex items-start justify-center">
              <span className="mr-6 mt-2 text-3xl text-white">•</span>
              <span><strong className="text-white">Interoperable</strong> — verifiable across systems, chains, and use cases</span>
            </div>
            <div className="flex items-start justify-center">
              <span className="mr-6 mt-2 text-3xl text-white">•</span>
              <span><strong className="text-white">Future-proof</strong> — integrates with tax, insurance, resale, and compliance tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
