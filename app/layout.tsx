import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AssetPassport - Web3 Asset Management',
  description: 'Secure and decentralized asset management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-cream via-peach to-rose">
        {children}
      </body>
    </html>
  )
}
