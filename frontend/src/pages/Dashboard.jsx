import {PieChart,Pie,Cell,Tooltip,Legend} from 'recharts'
export default function Dashboard({ predictions }) {
  const total = predictions.length
  const disasterCount = predictions.filter(p => p.label === 'Disaster').length
  const notDisasterCount = total - disasterCount
  const avgConfidence = total > 0 ? (predictions.reduce((sum, p) => sum + p.confidence, 0) / total*100).toFixed(1) : 0  
  const pieData = [
  { name: "Disaster", value: disasterCount },
  { name: "Not Disaster", value: notDisasterCount }
]
  return (
  <div className="min-h-screen bg-gray-900 p-8">
    <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Dashboard
    </h1>

    {/* Stats cards */}
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
        <p className="text-4xl font-bold text-white">{total}</p>
        <p className="text-gray-400 mt-1">Total Predictions</p>
      </div>
      <div className="bg-gray-800 border border-red-500/50 rounded-2xl p-6 text-center">
        <p className="text-4xl font-bold text-red-400">{disasterCount}</p>
        <p className="text-gray-400 mt-1">Disasters</p>
      </div>
      <div className="bg-gray-800 border border-green-500/50 rounded-2xl p-6 text-center">
        <p className="text-4xl font-bold text-green-400">{avgConfidence}%</p>
        <p className="text-gray-400 mt-1">Avg Confidence</p>
      </div>
    </div>

    {/* Pie chart + Recent predictions side by side */}
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Prediction Distribution</h2>
        <PieChart width={350} height={300}>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            <Cell fill="#ef4444" />
            <Cell fill="#22c55e" />
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }} />
          <Legend />
        </PieChart>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Predictions</h2>
        {predictions.length === 0 ? (
          <p className="text-gray-500">No predictions yet. Go classify some tweets!</p>
        ) : (
          <div className="flex flex-col gap-3 overflow-y-auto max-h-64">
            {predictions.slice(-10).reverse().map((p, index) => (
              <div key={index} className={`rounded-xl p-3 border ${
                p.label === "Disaster" 
                  ? "bg-red-900/20 border-red-500/40" 
                  : "bg-green-900/20 border-green-500/40"
              }`}>
                <div className="flex justify-between items-center">
                  <p className="text-gray-300 text-sm flex-1 mr-3 truncate">{p.tweet}</p>
                  <div className="text-right shrink-0">
                    <p className={`font-semibold text-sm ${p.label === "Disaster" ? "text-red-400" : "text-green-400"}`}>
                      {p.label === "Disaster" ? "🚨" : "✅"} {p.label}
                    </p>
                    <p className="text-gray-500 text-xs">{(p.confidence * 100).toFixed(1)}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
)
}