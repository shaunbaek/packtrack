import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function MetricsChart({ metrics }) {
  if (!metrics) return null

  const { susScore, taskCompletionRates } = metrics

  // Transform data for Recharts
  const chartData = taskCompletionRates.map(item => ({
    name: item.task,
    rate: item.rate,
  }))

  // Color scale based on completion rate
  const getBarColor = (rate) => {
    if (rate >= 80) return '#10B981' // Emerald for high completion
    if (rate >= 60) return '#FBBF24' // Amber for medium completion
    return '#EF4444' // Red for low completion
  }

  // SUS score rating helper
  const getSUSRating = (score) => {
    if (score >= 80.3) return { label: 'Excellent', color: 'emerald' }
    if (score >= 68) return { label: 'Good', color: 'emerald' }
    if (score >= 51) return { label: 'OK', color: 'amber' }
    return { label: 'Poor', color: 'red' }
  }

  const susRating = getSUSRating(susScore)
  const ratingColors = {
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    red: 'bg-red-50 border-red-200 text-red-700',
  }

  return (
    <div className="space-y-6">
      {/* SUS Score Display */}
      <div className={`rounded-xl p-4 border ${ratingColors[susRating.color]}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate mb-1">System Usability Scale (SUS)</p>
            <p className={`text-4xl font-bold ${susRating.color === 'emerald' ? 'text-emerald-600' : susRating.color === 'amber' ? 'text-amber-600' : 'text-red-600'}`}>
              {susScore}
            </p>
          </div>
          <div className="text-right">
            <p className={`text-sm font-semibold ${susRating.color === 'emerald' ? 'text-emerald-700' : susRating.color === 'amber' ? 'text-amber-700' : 'text-red-700'}`}>
              ✓ {susRating.label}
            </p>
            <p className="text-xs text-slate">Usability Rating</p>
          </div>
        </div>
        <p className="text-xs text-slate mt-3 leading-relaxed">
          Based on industry standards, scores above 68 indicate good usability. This baseline provides a foundation for iterative improvements.
        </p>
      </div>

      {/* Task Completion Chart */}
      <div>
        <p className="text-sm font-semibold text-navy mb-3">
          Task Completion Rates
        </p>
        <div className="bg-gray-50 rounded-xl p-4">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                tickFormatter={(value) => `${value}%`}
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={150}
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Completion Rate']}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="rate" radius={[0, 8, 8, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.rate)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center gap-4 mt-3 text-xs text-slate">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500"></div>
            <span>High (≥80%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-amber-500"></div>
            <span>Medium (60-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500"></div>
            <span>Low (&lt;60%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
