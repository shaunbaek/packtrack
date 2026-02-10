import Section from '../layout/Section'
import FeatureCard from '../ui/FeatureCard'
import { features } from '../../data/features'

export default function Features() {
  return (
    <Section
      id="features"
      title="Key Features"
      subtitle="PackTrack gives you the information you need to plan your workout."
      bgColor="gray"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </Section>
  )
}
