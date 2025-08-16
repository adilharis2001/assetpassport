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
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">AssetPassport</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
          </nav>

          {/* Wallet Connection & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleWalletConnect}
              variant={isWalletConnected ? 'secondary' : 'primary'}
              className="hidden sm:flex items-center space-x-2"
            >
              <Wallet className="w-4 h-4" />
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
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/features"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="px-3 py-2">
                <Button
                  onClick={handleWalletConnect}
                  variant={isWalletConnected ? 'secondary' : 'primary'}
                  className="w-full flex items-center justify-center space-x-2"
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
