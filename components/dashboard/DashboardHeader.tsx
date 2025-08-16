'use client'

import { useState } from 'react'
import { Bell, Search, Wallet } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function DashboardHeader() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

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
        </div>
      </div>
    </header>
  )
}
