import { TrendingUp, TrendingDown, DollarSign, Wallet, Shield, Activity } from 'lucide-react'

const stats = [
  {
    name: 'Total Portfolio Value',
    value: '$124,563.42',
    change: '+12.5%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Active Assets',
    value: '24',
    change: '+2',
    changeType: 'positive',
    icon: Wallet,
  },
  {
    name: 'Security Score',
    value: '98/100',
    change: '+3',
    changeType: 'positive',
    icon: Shield,
  },
  {
    name: 'Daily Volume',
    value: '$8,234.12',
    change: '-2.1%',
    changeType: 'negative',
    icon: Activity,
  },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your assets today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${
                stat.changeType === 'positive' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              {stat.changeType === 'positive' ? (
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - Portfolio performance over time</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Asset Distribution</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart placeholder - Asset allocation breakdown</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
              <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Asset transaction completed</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
              <span className="text-sm font-medium text-green-600">+$1,234.56</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
