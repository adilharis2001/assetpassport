export default function Reporting() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reporting</h1>
        <p className="text-gray-600">Analytics and reports for your asset portfolio.</p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Reporting & Analytics</h2>
        <p className="text-gray-600 mb-6">
          This will provide comprehensive reporting capabilities, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Asset Distribution</h3>
            <p className="text-sm text-gray-600">By category, location, and status</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Depreciation Analysis</h3>
            <p className="text-sm text-gray-600">Performance graphs and trends</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Timeline Simulation</h3>
            <p className="text-sm text-gray-600">Simulated date scrubber with NBV projections</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Export Capabilities</h3>
            <p className="text-sm text-gray-600">Generate reports and export data in various formats</p>
          </div>
        </div>
      </div>
    </div>
  )
}