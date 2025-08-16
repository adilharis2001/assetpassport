export default function Home() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Home</h1>
        <p className="text-gray-600">Welcome to Asset Passport - Your comprehensive asset management dashboard.</p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">🏠</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Home Dashboard</h2>
        <p className="text-gray-600 mb-6">
          This will display general metrics regarding the assets you have uploaded, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Portfolio Overview</h3>
            <p className="text-sm text-gray-600">Total Portfolio Value (calculated NBV of all assets)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Asset Statistics</h3>
            <p className="text-sm text-gray-600">Asset Count by Status: In-Service / Retired / Disposed</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
            <p className="text-sm text-gray-600">Depreciation Performance Graph</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Activity Feed</h3>
            <p className="text-sm text-gray-600">Daily Activity Feed (chronological lifecycle events)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
