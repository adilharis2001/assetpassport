export default function Features() {
  return (
    <>
      {/* The Problem Slide */}
      <section id="slide-2" className="slide bg-gradient-secondary">
        <div className="absolute inset-0">
          <div className="absolute top-32 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl float-delay-1"></div>
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-white/15 rounded-full blur-3xl float-delay-3"></div>
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-red-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-orange-500/20 rounded-full blur-3xl float-delay-2"></div>
        </div>

        <div className="slide-content animate-fade-in">
          <div className="text-8xl md:text-9xl mb-12 animate-scale-in drop-shadow-2xl">📉</div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-12 text-shadow-lg animate-slide-up">
            The Problem
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-12 leading-relaxed text-shadow animate-slide-up">
              Most SMBs track assets in spreadsheets, QuickBooks, or Xero.<br />
              These systems weren't built for proof or portability.
            </p>
            
            <div className="flex justify-center items-center gap-12 mb-16 animate-slide-up">
              <div>
                <img src="/logos/quickbooks.png" alt="QuickBooks" className="h-20 w-auto object-contain opacity-90" />
              </div>
              <div>
                <img src="/logos/xero.png" alt="Xero" className="h-20 w-auto object-contain opacity-90" />
              </div>
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl lg:text-3xl text-white/80 animate-slide-up">
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">❌</span>
                <span>No way to verify ownership</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">🔍</span>
                <span>No audit trail</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">🔒</span>
                <span>No portable proof across platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Slide */}
      <section id="slide-3" className="slide bg-gradient-tertiary">
        <div className="absolute inset-0">
          <div className="absolute top-40 left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-40 right-16 w-96 h-96 bg-white/15 rounded-full blur-3xl float-delay-2"></div>
          <div className="absolute top-1/3 right-1/3 w-52 h-52 bg-green-400/20 rounded-full blur-3xl float-delay-1"></div>
          <div className="absolute bottom-1/3 left-1/3 w-44 h-44 bg-blue-400/20 rounded-full blur-3xl float-delay-3"></div>
        </div>

        <div className="slide-content animate-fade-in">
          <div className="text-8xl md:text-9xl mb-12 animate-scale-in drop-shadow-2xl">💡</div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-12 text-shadow-lg animate-slide-up">
            The Solution
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-16 leading-relaxed text-shadow animate-slide-up">
              <strong className="text-yellow-200">Asset Passports</strong> on-chain.<br />
              Issue a tamper-proof record for each asset with just a few clicks.
            </p>
            
            <div className="space-y-8 text-xl md:text-2xl lg:text-3xl text-white/80 animate-slide-up">
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">🔗</span>
                <span>Works with your existing system</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">🚀</span>
                <span>No crypto knowledge needed</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="mr-6 text-4xl">✅</span>
                <span>Portable, verifiable, and queryable</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
