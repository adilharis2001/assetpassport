import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-rose-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-black">AP</span>
              </div>
              <span className="text-2xl font-black text-white">Asset Passport</span>
            </div>
            <p className="text-gray-300 max-w-md text-lg leading-relaxed">
              Bringing Web3 into Fixed Asset Accounting. The world's first decentralized asset registry that makes blockchain-powered tracking feel like magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#slide-2" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Go to App
                </Link>
              </li>
              <li>
                <Link href="#slide-5" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Tech Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#slide-4" className="text-gray-300 hover:text-white transition-colors text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Go to App
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg">
              © 2024 Asset Passport. Built for hackathon glory. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-300 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
