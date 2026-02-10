import Section from '../layout/Section'
import TeamMemberCard from '../ui/TeamMemberCard'
import { team } from '../../data/team'

export default function Team() {
  return (
    <Section
      id="team"
      title="Meet the Team"
      subtitle="We're a group of Emory students passionate about improving campus life."
      bgColor="gray"
    >
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {team.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  )
}
