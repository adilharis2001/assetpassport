export default function RegisterAsset() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Register New Asset</h1>
        <p className="text-gray-600">Register new assets manually or via bulk upload.</p>
      </div>

      {/* Placeholder Content */}
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <div className="text-6xl mb-4">➕</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Register New Asset</h2>
        <p className="text-gray-600 mb-6">
          This will provide asset registration functionality, including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Manual Entry</h3>
            <p className="text-sm text-gray-600">Asset registration form with fields: Name, Type, Purchase Date/Cost, Depreciation params</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Document Upload</h3>
            <p className="text-sm text-gray-600">Upload docs (image/PDF for receipts, certs, photos)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Bulk Upload</h3>
            <p className="text-sm text-gray-600">Upload CSV template, preview parsed assets, flag invalid rows</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900">Blockchain Integration</h3>
            <p className="text-sm text-gray-600">Mint new entry on Asset Registry contract with IPFS file storage</p>
          </div>
        </div>
      </div>
    </div>
  )
}