import { User } from 'lucide-react'

export default function TeamMemberCard({ member }) {
  const { name, role, image, bio } = member

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center card-hover">
      {/* Photo */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-coral to-coral-light">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <User size={40} />
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-display font-bold text-lg text-navy">{name}</h3>
      <p className="text-coral font-medium text-sm mb-2">{role}</p>
      {bio && <p className="text-slate text-sm">{bio}</p>}
    </div>
  )
}
