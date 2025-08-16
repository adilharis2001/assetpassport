export default function AssetManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Asset Management</h1>
        <p className="text-gray-600">List of all assets and take action on them.</p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">📁</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Asset Management</h2>
        <p className="text-gray-600 mb-6">
          This will provide comprehensive asset management functionality, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Tabular View</h3>
            <p className="text-sm text-gray-600">All registered assets with filters by Location, Category, Status, Age, Depreciation Remaining</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Asset Details</h3>
            <p className="text-sm text-gray-600">Basic columns: Asset Name, Type, NBV, Status, Last Updated</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Actions</h3>
            <p className="text-sm text-gray-600">Click into Asset Detail, Trigger Lifecycle Event, Export asset data (CSV)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Data Source</h3>
            <p className="text-sm text-gray-600">Read from Asset Registry smart contract</p>
          </div>
        </div>
      </div>
    </div>
  )
}
