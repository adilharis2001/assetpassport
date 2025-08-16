'use client'

import { useState } from 'react'
import { Bell, Search, User, Wallet, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function DashboardHeader() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleWalletConnect = () => {
    // TODO: Implement wallet connection logic
    setIsWalletConnected(!isWalletConnected)
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets, transactions..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Wallet Connection */}
          <Button
            onClick={handleWalletConnect}
            variant={isWalletConnected ? 'secondary' : 'primary'}
            className="flex items-center space-x-2"
          >
            <Wallet className="w-4 h-4" />
            <span>{isWalletConnected ? 'Connected' : 'Connect Wallet'}</span>
          </Button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">User</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Help
                </a>
                <hr className="my-2" />
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
