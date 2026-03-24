// Project milestones data
export const milestones = [
  {
    id: 'p1',
    phase: 'P1',
    title: 'The Pitch',
    status: 'completed',
    icon: 'Megaphone',
    description: 'Identified the problem of overcrowded campus gyms and proposed PackTrack as a solution for Emory students.',
    takeaways: [
      'Validated that students experience significant gym crowding frustration',
      'Defined core value proposition: real-time crowd visibility',
      'Established team roles and project scope',
    ],
    deliverables: [
      { name: 'Pitch Video', type: 'video', url: 'Za4KqsrTLUA' },
      { name: 'Pitch Deck', type: 'pdf', url: '' }, // Add link to pitch deck
    ],
    image: null,
  },
  {
    id: 'p2',
    phase: 'P2',
    title: 'User Research',
    status: 'completed',
    icon: 'Users',
    description: 'Conducted interviews and observations to understand student gym behaviors and pain points at the WoodPEC.',
    takeaways: [
      'Conducted 6 user interviews: 2 frequent, 2 moderate, 2 aspiring gym-goers',
      'Identified information gap as core barrier: students need to know gym status before committing to the trip',
      'Peak hour paradox: users structurally locked into crowded windows by academic schedules',
      'Key user needs: real-time info, specific equipment visibility, reduced decision anxiety',
    ],
    visuals: [
      {
        id: 'empathy-gym',
        type: 'image',
        url: '/packtrack/assets/p2/empathy-map-gym-goers.png',
        caption: 'Empathy Map: Regular Gym Goers',
        alt: 'Empathy map showing feelings, behaviors, and pain points of frequent gym users'
      },
      {
        id: 'empathy-aspiring',
        type: 'image',
        url: '/packtrack/assets/p2/empathy-map-aspiring.png',
        caption: 'Empathy Map: Aspiring Gym Goers',
        alt: 'Empathy map for students wanting to establish gym routines'
      }
    ],
    deliverables: [
      { name: 'User Research Report', type: 'pdf', url: '/packtrack/documents/p2-user-research.pdf' }
    ],
    image: null,
  },
  {
    id: 'p3',
    phase: 'P3',
    title: 'Ideation & Lo-Fi Prototype',
    status: 'completed',
    icon: 'Lightbulb',
    description: 'Brainstormed solutions and created low-fidelity prototypes for usability testing.',
    takeaways: [
      'Brainstorming session generated 45+ ideas, consolidated via affinity mapping into 4 key themes',
      'Created lo-fi prototypes for Equipment Tracking and Gym Occupancy features',
      'Usability testing with 5 participants revealed strong equipment list UX but navigation issues in occupancy flow',
      'Achieved SUS score of 69.0 ("Good" baseline) - identified key improvements for next iteration',
    ],
    visuals: [
      {
        id: 'affinity',
        type: 'image',
        url: '/packtrack/assets/p3/affinity-diagram.png',
        caption: 'Affinity Diagram: Clustered by UX/Usability, Data Collection, Collaboration, Enablement',
        alt: 'Affinity diagram showing grouped brainstorming ideas'
      },
      {
        id: 'lofi-home',
        type: 'image',
        url: '/packtrack/assets/p3/lofi-home.png',
        caption: 'Lo-Fi Prototype: Equipment List View',
        alt: 'Paper prototype showing equipment availability screen'
      },
      {
        id: 'lofi-occupancy',
        type: 'image',
        url: '/packtrack/assets/p3/lofi-occupancy.png',
        caption: 'Lo-Fi Prototype: Gym Occupancy Dashboard',
        alt: 'Paper prototype of occupancy gauge and zone breakdown'
      },
    ],
    metrics: {
      susScore: 69.0,
      taskCompletionRates: [
        { task: 'Check equipment availability', rate: 100, participants: 5 },
        { task: 'Find least crowded zone', rate: 80, participants: 5 },
        { task: 'Set capacity alert', rate: 60, participants: 5 },
      ]
    },
    deliverables: [
      { name: 'Ideation & Lo-Fi Report', type: 'pdf', url: '/packtrack/documents/p3-ideation-lofi.pdf' }
    ],
    image: null,
  },
  {
    id: 'p4',
    phase: 'P4',
    title: 'Mid-Fi Prototype',
    status: 'current',
    icon: 'Layout',
    description: 'Developing medium-fidelity prototypes with improved interaction design.',
    takeaways: [],
    deliverables: [],
    image: null,
  },
  {
    id: 'a4',
    phase: 'A4',
    title: 'Heuristic Evaluation',
    status: 'upcoming',
    icon: 'ClipboardCheck',
    description: 'Evaluating the prototype against usability heuristics to identify issues.',
    takeaways: [],
    deliverables: [],
    image: null,
  },
  {
    id: 'p5',
    phase: 'P5',
    title: 'Hi-Fi Prototype',
    status: 'upcoming',
    icon: 'Smartphone',
    description: 'Creating the final high-fidelity prototype with polished visual design.',
    takeaways: [],
    deliverables: [],
    image: null,
  },
  {
    id: 'p6',
    phase: 'P6',
    title: 'Final Demo & Report',
    status: 'upcoming',
    icon: 'Presentation',
    description: 'Presenting the final product with video demonstration and comprehensive report.',
    takeaways: [],
    deliverables: [],
    image: null,
  },
]
