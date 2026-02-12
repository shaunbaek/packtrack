import Section from '../layout/Section'
import { RevealOnScroll } from '../../hooks/useScrollReveal'
import { AlertTriangle, Clock, Users, HelpCircle } from 'lucide-react'

const problemAspects = [
  {
    icon: AlertTriangle,
    title: 'Overcrowding',
    description: 'Peak hours create frustrating wait times for popular equipment and spaces.',
  },
  {
    icon: Clock,
    title: 'Time Pressure',
    description: 'Busy student schedules leave narrow windows for gym visits.',
  },
  {
    icon: HelpCircle,
    title: 'Uncertainty',
    description: 'No way to know how busy the gym is before making the trip.',
  },
  {
    icon: Users,
    title: 'Target Users',
    description: 'Emory students who want to maintain their fitness without sacrificing their packed schedules.',
  },
]

export default function About() {
  return (
    <Section
      id="about"
      title="The Problem Space"
      subtitle="For Emory students, staying fit shouldn't feel like a gamble."
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Problem Statement */}
        <RevealOnScroll>
          <div>
            <div className="bg-coral/5 border-l-4 border-coral rounded-r-xl p-6 mb-6 transition-all duration-300 hover:bg-coral/10">
              <h3 className="font-display font-bold text-lg text-navy mb-2">The Reality</h3>
              <p className="text-slate">
                Students rush to the WoodPEC during their only free window, hoping for an
                available machine. Too often, they're met with packed equipment areas,
                people scrolling on TikTok while "resting," and the frustrating choice:
                wait 15 minutes and be late to class, or skip the workout entirely.
              </p>
            </div>
            <p className="text-lg text-slate">
              <strong className="text-navy">The "Peak Time U-Turn"</strong> is all too
              familiar—arriving at the gym, seeing the crowd, and turning right back around.
              Uncertainty leads to wasted time and missed workouts.
            </p>
          </div>
        </RevealOnScroll>

        {/* Problem Aspects */}
        <div className="space-y-4 reveal-stagger">
          {problemAspects.map((aspect, index) => (
            <RevealOnScroll key={aspect.title} delay={index * 100}>
              <div className="group bg-white rounded-xl shadow-md p-5 flex gap-4 card-hover">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-coral group-hover:scale-110">
                  <aspect.icon className="text-coral transition-colors duration-300 group-hover:text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">{aspect.title}</h4>
                  <p className="text-slate text-sm">{aspect.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Research Question */}
      <RevealOnScroll delay={200}>
        <div className="mt-12 text-center">
          <div className="inline-block bg-navy text-white rounded-2xl px-8 py-6 max-w-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <h3 className="font-display font-bold text-lg mb-2">Our Research Question</h3>
            <p className="text-white/80">
              How might we help Emory students make informed decisions about when to visit
              campus fitness facilities?
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  )
}
