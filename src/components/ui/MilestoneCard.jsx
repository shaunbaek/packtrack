import * as Icons from 'lucide-react'
import { FileText, Video, ExternalLink } from 'lucide-react'

const statusStyles = {
  completed: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  current: 'bg-amber-100 text-amber-700 border-amber-200',
  upcoming: 'bg-gray-100 text-gray-500 border-gray-200',
}

const statusLabels = {
  completed: 'Completed',
  current: 'In Progress',
  upcoming: 'Upcoming',
}

export default function MilestoneCard({ milestone }) {
  const { phase, title, status, icon, description, takeaways, deliverables } = milestone

  // Dynamically get the icon component
  const IconComponent = Icons[icon] || Icons.Circle

  return (
    <div className={`
      relative bg-white rounded-2xl shadow-md p-6
      border-l-4
      ${status === 'completed' ? 'border-l-emerald-500' :
        status === 'current' ? 'border-l-amber-500' : 'border-l-gray-300'}
      ${status === 'upcoming' ? 'opacity-60' : ''}
    `}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`
            w-12 h-12 rounded-xl flex items-center justify-center
            ${status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
              status === 'current' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400'}
          `}>
            <IconComponent size={24} />
          </div>
          <div>
            <span className="text-sm font-semibold text-coral">{phase}</span>
            <h3 className="font-display font-bold text-xl text-navy">{title}</h3>
          </div>
        </div>
        <span className={`
          px-3 py-1 text-xs font-semibold rounded-full border
          ${statusStyles[status]}
        `}>
          {statusLabels[status]}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate mb-4">{description}</p>

      {/* Takeaways */}
      {takeaways && takeaways.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-navy mb-2">Key Takeaways</h4>
          <ul className="space-y-1">
            {takeaways.map((takeaway, index) => (
              <li key={index} className="text-sm text-slate flex items-start gap-2">
                <span className="text-coral mt-1">•</span>
                {takeaway}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Deliverables */}
      {deliverables && deliverables.length > 0 && deliverables.some(d => d.url) && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          {deliverables.filter(d => d.url).map((deliverable, index) => (
            <a
              key={index}
              href={deliverable.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-coral bg-coral/5 rounded-lg hover:bg-coral/10 transition-colors"
            >
              {deliverable.type === 'video' ? <Video size={16} /> :
               deliverable.type === 'pdf' ? <FileText size={16} /> : <ExternalLink size={16} />}
              {deliverable.name}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
