import {
  BarChart3,
  LineChart,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  TrendingUp,
  Map,
  Calendar,
} from 'lucide-react'

const AreaChart = ({ data }: { data: number[] }) => (
  <svg
    className="w-full h-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
      </linearGradient>
    </defs>
    <path
      d={`M0 100 ${data
        .map((d, i) => `L${(i / (data.length - 1)) * 100} ${100 - d}`)
        .join(' ')} V100 H0`}
      fill="url(#areaGradient)"
      stroke="rgb(59, 130, 246)"
      strokeWidth="2"
    />
  </svg>
)

const ScatterPlot = ({ data }: { data: [number, number][] }) => (
  <svg className="w-full h-full" viewBox="0 0 100 100">
    {data.map(([x, y], i) => (
      <circle key={i} cx={x} cy={100 - y} r="2" fill="rgb(59, 130, 246)" />
    ))}
  </svg>
)

const RadarChart = ({ data }: { data: number[] }) => {
  const points = data
    .map((value, i) => {
      const angle = (Math.PI * 2 * i) / data.length
      return `${50 + 40 * Math.cos(angle) * (value / 100)},${
        50 + 40 * Math.sin(angle) * (value / 100)
      }`
    })
    .join(' ')

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <polygon
        points={points}
        fill="rgba(59, 130, 246, 0.5)"
        stroke="rgb(59, 130, 246)"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Users', value: '10,483', icon: Users, change: 12.5 },
          {
            title: 'Total Orders',
            value: '1,240',
            icon: ShoppingCart,
            change: -3.2,
          },
          {
            title: 'Total Revenue',
            value: '$45,200',
            icon: DollarSign,
            change: 8.7,
          },
          {
            title: 'Active Users',
            value: '1,592',
            icon: Activity,
            change: 2.1,
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {metric.title}
              </h2>
              <metric.icon className="text-blue-500" size={24} />
            </div>
            <p className="text-3xl font-bold mb-2">{metric.value}</p>
            <p
              className={`flex items-center ${
                metric.change > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {metric.change > 0 ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              <span className="ml-1">{Math.abs(metric.change)}%</span>
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Line Chart */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <LineChart className="mr-2 text-blue-500" /> User Growth
          </h2>
          <div className="h-64 flex items-end">
            {[30, 40, 35, 50, 49, 60, 70, 91, 125].map((value, index) => (
              <div
                key={index}
                className="bg-blue-500 w-1/9 mr-1"
                style={{ height: `${value}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart3 className="mr-2 text-green-500" /> Revenue by Category
          </h2>
          <div className="h-64 flex items-end">
            {[60, 45, 80, 30, 20].map((value, index) => (
              <div key={index} className="w-1/5 mr-1">
                <div
                  className="bg-green-500"
                  style={{ height: `${value}%` }}
                ></div>
                <p className="text-center mt-2 text-sm">Cat {index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Area Chart */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-purple-500" /> Website Traffic
          </h2>
          <div className="h-64">
            <AreaChart data={[20, 40, 30, 70, 50, 60, 80, 90, 100]} />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Scatter Plot */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Map className="mr-2 text-indigo-500" /> Customer Distribution
          </h2>
          <div className="h-64">
            <ScatterPlot
              data={[
                [10, 20],
                [30, 40],
                [50, 60],
                [70, 80],
                [90, 30],
                [40, 50],
                [60, 70],
                [20, 80],
                [80, 20],
              ]}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Region A</span>
            <span>Region B</span>
            <span>Region C</span>
          </div>
        </div>
      </div>

      {/* Pie Chart and Radar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pie Chart */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <PieChart className="mr-2 text-yellow-500" /> Traffic Sources
          </h2>
          <div className="relative h-64 w-64 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
            <div
              className="absolute inset-0 bg-green-500 rounded-full"
              style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
            ></div>
            <div
              className="absolute inset-0 bg-yellow-500 rounded-full"
              style={{ clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)' }}
            ></div>
            <div
              className="absolute inset-0 bg-red-500 rounded-full"
              style={{ clipPath: 'polygon(50% 50%, 0 100%, 0 0)' }}
            ></div>
          </div>
          <div className="flex justify-around mt-4">
            <span className="text-sm text-blue-500">Direct</span>
            <span className="text-sm text-green-500">Social</span>
            <span className="text-sm text-yellow-500">Referral</span>
            <span className="text-sm text-red-500">Organic</span>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 text-pink-500" /> Weekly Performance
          </h2>
          <div className="h-64">
            <RadarChart data={[80, 90, 60, 70, 85, 75, 65]} />
          </div>
          <div className="flex justify-around mt-4 text-sm text-gray-600">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[var(--modal-background)] p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Top Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-right py-2">Sales</th>
                <th className="text-right py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Product A', sales: 120, revenue: '$12,000' },
                { name: 'Product B', sales: 80, revenue: '$8,000' },
                { name: 'Product C', sales: 60, revenue: '$6,000' },
                { name: 'Product D', sales: 40, revenue: '$4,000' },
                { name: 'Product E', sales: 20, revenue: '$2,000' },
              ].map((product, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-2">{product.name}</td>
                  <td className="text-right py-2">{product.sales}</td>
                  <td className="text-right py-2">{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
