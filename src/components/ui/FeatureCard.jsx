import * as Icons from 'lucide-react'

export default function FeatureCard({ feature }) {
  const { icon, title, description } = feature

  // Dynamically get the icon component
  const IconComponent = Icons[icon] || Icons.Circle

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 card-hover">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center mb-4">
        <IconComponent size={28} className="text-white" />
      </div>
      <h3 className="font-display font-bold text-lg text-navy mb-2">{title}</h3>
      <p className="text-slate">{description}</p>
    </div>
  )
}
