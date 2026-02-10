import Section from '../layout/Section'
import MilestoneCard from '../ui/MilestoneCard'
import VideoEmbed from '../ui/VideoEmbed'
import { milestones } from '../../data/milestones'

export default function Process() {
  // Find P1 milestone for the pitch video
  const p1 = milestones.find(m => m.id === 'p1')
  const pitchVideoId = p1?.deliverables.find(d => d.type === 'video')?.url

  return (
    <Section
      id="process"
      title="Our Design Journey"
      subtitle="Following a user-centered design process to create a solution that truly serves Emory students."
    >
      {/* Pitch Video */}
      <div className="mb-16">
        <h3 className="heading-3 text-navy text-center mb-6">The Pitch</h3>
        <div className="max-w-3xl mx-auto">
          <VideoEmbed youtubeId={pitchVideoId} title="PackTrack Pitch Video" />
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

        {/* Milestone Cards */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`
                relative md:w-[calc(50%-2rem)]
                ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}
              `}
            >
              {/* Timeline Dot (hidden on mobile) */}
              <div className={`
                hidden md:flex absolute top-8 w-4 h-4 rounded-full border-4 border-white shadow
                ${milestone.status === 'completed' ? 'bg-emerald-500' :
                  milestone.status === 'current' ? 'bg-amber-500' : 'bg-gray-300'}
                ${index % 2 === 0 ? '-right-10' : '-left-10'}
              `}></div>

              <MilestoneCard milestone={milestone} />
            </div>
          ))}
        </div>
      </div>

      {/* Final Demo Placeholder */}
      <div className="mt-16 pt-16 border-t border-gray-200">
        <h3 className="heading-3 text-navy text-center mb-6">Final Demo</h3>
        <div className="max-w-3xl mx-auto">
          <VideoEmbed youtubeId="" title="PackTrack Final Demo" />
          <p className="text-center text-slate mt-4">
            The final demo video will be added upon completion of P6.
          </p>
        </div>
      </div>
    </Section>
  )
}
