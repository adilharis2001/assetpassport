'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Wallet, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleWalletConnect = () => {
    // TODO: Implement wallet connection logic
    setIsWalletConnected(!isWalletConnected)
  }

  return (
    <header className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-rose-400 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-black">AP</span>
            </div>
            <span className="text-2xl font-black text-gray-800">Asset Passport</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-lg">
              Home
            </Link>
            <Link href="#slide-2" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-lg">
              Features
            </Link>
            <Link href="#slide-5" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-lg">
              Tech
            </Link>
            <Link href="/app" className="text-gray-700 hover:text-gray-900 transition-colors font-semibold text-lg">
              Go to App
            </Link>
          </nav>

          {/* Wallet Connection & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleWalletConnect}
              variant={isWalletConnected ? 'secondary' : 'primary'}
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg"
            >
              <Wallet className="w-5 h-5" />
              <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#slide-2"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#slide-5"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tech
              </Link>
              <Link
                href="/app"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Go to App
              </Link>
              <div className="px-3 py-2">
                <Button
                  onClick={handleWalletConnect}
                  variant={isWalletConnected ? 'secondary' : 'primary'}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white border-0"
                >
                  <Wallet className="w-4 h-4" />
                  <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
