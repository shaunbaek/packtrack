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
    deliverables: [
      { name: 'User Research Report', type: 'pdf', url: 'https://drive.google.com/file/d/1X52dWPY6MDAp8AOtaZ4fScbWPPpg9FfH/view?usp=sharing' }
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
    metrics: {
      susScore: 69.0,
      taskCompletionRates: [
        { task: 'Check equipment availability', rate: 100, participants: 5 },
        { task: 'Find least crowded zone', rate: 80, participants: 5 },
        { task: 'Set capacity alert', rate: 60, participants: 5 },
      ]
    },
    deliverables: [
      { name: 'Ideation & Lo-Fi Report', type: 'pdf', url: 'https://drive.google.com/file/d/1mT4IDlsUEqkdIdfanUrl6EkUluZgFglF/view?usp=sharing' }
    ],
    image: null,
  },
  {
    id: 'p4',
    phase: 'P4',
    title: 'Mid-Fi Prototype',
    status: 'completed',
    icon: 'Layout',
    description: 'Developing medium-fidelity prototypes with improved interaction design.',
    takeaways: [
      'Created interactive mid-fidelity prototype with 3 key user flows: equipment tracking, occupancy alerts, and zone checking',
      'Flow 1: Equipment tracking with waitlist functionality, session summaries, and route mapping for gym navigation',
      'Flow 2: Occupancy threshold alerts allowing users to set custom notifications when gym reaches desired capacity',
      'Flow 3: Zone-specific occupancy checking with directional guidance for new gym-goers',
      'Design system: Grayscale base with green/yellow/red status indicators for intuitive decision-making',
    ],
    deliverables: [
      { name: 'Mid-Fi Prototype Report', type: 'pdf', url: 'https://drive.google.com/file/d/1zyNpQV9C_JYGTC2So9g67WWeQw5S9LMD/view?usp=sharing' }
    ],
    image: null,
  },
  {
    id: 'a4',
    phase: 'A4',
    title: 'Heuristic Evaluation',
    status: 'completed',
    icon: 'ClipboardCheck',
    description: 'Synthesized peer heuristic evaluations to identify usability issues in the mid-fi prototype and prioritize fixes for the final build.',
    takeaways: [
      '5 peer evaluators identified ~52 total usability violations across Nielsen heuristics',
      'Consensus critical issue: no exit, pause, or back option on the Active Workout screen (H3, Severity 3–5)',
      '4 of 5 evaluators flagged missing confirmation on "Complete Exercise" and "Add to Workout" (H5, Severity 3)',
      'Red "Complete Exercise" button contradicted real-world color conventions for destructive actions (H2, Severity 2–3)',
      'Navigation gap: workout, route map, and active-workout screens unreachable from the Figma nav bar (H2, Severity 3–5)',
    ],
    deliverables: [
      { name: 'Peer Heuristic Evaluations', type: 'link', url: 'https://drive.google.com/drive/folders/1bbbfRA86g_2W_luj_y5KF2yxuePsXnbi' }
    ],
    image: null,
  },
  {
    id: 'p5',
    phase: 'P5',
    title: 'Final Prototype & Demo',
    status: 'completed',
    icon: 'Smartphone',
    description: 'Shipped a functional React Native prototype addressing key heuristic findings, with demo video and final report.',
    takeaways: [
      'Built React Native + Expo prototype with 3 task flows: gym occupancy check (simple), workout builder (medium), full active workout session (hard)',
      'H3 fix — dedicated "My Workout" tab with add/reorder/remove equipment, plus a confirmation dialog on "Finish Workout" to prevent trapped users',
      'H2 fix — bottom nav bar and consistent back buttons in the coded prototype closed the Figma-only navigation gap; gym-selection screen and machine images ground the experience in real-world context',
      'H5 fix — confirmation dialogs for irreversible actions, toast notifications for routine ones (set completion) to balance prevention with efficiency',
      'Deliberate tradeoff: hardcoded gym data and deferred pinch-to-zoom map (Severity 2) to validate core user flows rather than polish edge cases',
    ],
    deliverables: [
      { name: 'Final Report', type: 'pdf', url: 'https://drive.google.com/file/d/1X2K2hNHsRy5f-tuSrgkO99sGgiDDSG0P/view?usp=sharing' },
      { name: 'GitHub Repository', type: 'link', url: 'https://github.com/DesignStudio-HCI-Spring2026/p5-finalprototype-group3' }
    ],
    image: null,
  },
]
