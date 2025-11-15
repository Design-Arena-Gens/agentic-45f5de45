export const IDEAS = [
  {
    id: 'micro-saas-notion-data-quality',
    title: 'Notion Data Quality Copilot for Small Teams',
    category: 'B2B SaaS',
    rarityScore: 9,
    moat: 'Workflow embed + domain-specific validators',
    whyNow: 'Notion is becoming the OS for SMBs',
    firstSteps: ['Build chrome extension to flag broken links/refs', 'Integrate Notion API for schema rules', 'Ship a free ?health score? report'],
    monetization: 'Freemium; $12-$49/mo per workspace',
    teenFriendly: true
  },
  {
    id: 'vertical-ai-rfp-drafting',
    title: 'AI RFP Drafter for Local Governments',
    category: 'GovTech niche',
    rarityScore: 9,
    moat: 'Fine-tuned templates + public dataset ingestion',
    whyNow: 'ARPA and digitization waves; tooling is outdated',
    firstSteps: ['Scrape public RFPs', 'Template patterns', 'Human-in-the-loop editor'],
    monetization: 'Annual seat licenses; $1k-$5k/city dept',
    teenFriendly: true
  },
  {
    id: 'ugc-safety-youtube-shorts',
    title: 'UGC Brand Safety Scorer for YouTube Shorts',
    category: 'Creator Economy',
    rarityScore: 8,
    moat: 'Scoring + historical advertiser outcomes',
    whyNow: 'Short-form brand deals growing; safety is hard',
    firstSteps: ['Ingest channel feed', 'Score with vision/language rules', 'Pilot 5 agencies'],
    monetization: 'Per-channel subscription; $39-$199/mo',
    teenFriendly: true
  },
  {
    id: 'privacy-first-k12-attendance',
    title: 'Privacy-First Attendance via On-Device Ultrasound',
    category: 'EdTech',
    rarityScore: 9,
    moat: 'Signal processing and school integrations',
    whyNow: 'Schools need non-invasive, low-cost attendance',
    firstSteps: ['Prototype P2P ultrasound ping', 'Offline-first app', 'Export CSV to SIS'],
    monetization: 'School per-classroom pricing; $5-$15/mo',
    teenFriendly: true
  },
  {
    id: 'latent-space-study-planner',
    title: 'Adaptive Study Planner Using Latent Skill Graphs',
    category: 'EdTech',
    rarityScore: 8,
    moat: 'Proprietary difficulty model + streak mechanics',
    whyNow: 'GenAI tutors need planning layer',
    firstSteps: ['Finite topic graph', 'Ebbinghaus-based reminders', 'Mobile PWA'],
    monetization: 'Premium $5-$12/mo to students',
    teenFriendly: true
  },
  {
    id: 'local-services-routing',
    title: 'Smart Route Planner for Handyman Businesses',
    category: 'SMB SaaS',
    rarityScore: 7,
    moat: 'Optimization + no-code intake forms',
    whyNow: 'Field services growing; logistics remains manual',
    firstSteps: ['Google Calendar sync', 'Travel-time minimization', '1-click quotes'],
    monetization: '$29-$99/mo per business',
    teenFriendly: true
  },
  {
    id: 'k-pop-fandom-commerce',
    title: 'K?Pop Micro-Merch On-Demand with Artist Licenses',
    category: 'Niche Commerce',
    rarityScore: 8,
    moat: 'Licensing relationships + drop mechanics',
    whyNow: 'Fandom spending is high; merch underserved',
    firstSteps: ['On-demand print partner', 'Drop page builder', 'Discord community'],
    monetization: 'Margins on per-item; 20-35%',
    teenFriendly: true
  },
  {
    id: 'ai-data-cleaning-for-resellers',
    title: 'AI Listing Cleaner for Resellers (eBay/Depop)',
    category: 'Prosumer SaaS',
    rarityScore: 8,
    moat: 'Cross-platform heuristics + template packs',
    whyNow: 'Side hustles booming; listings quality matters',
    firstSteps: ['Import via CSV', 'Title normalization', 'Image background cleanup'],
    monetization: '$9-$29/mo or per-listing credits',
    teenFriendly: true
  },
  {
    id: 'indie-game-asset-market-scout',
    title: 'Indie Game Asset Demand Scout',
    category: 'Gaming Tools',
    rarityScore: 9,
    moat: 'Marketplace signals + discord scraping',
    whyNow: 'Indie dev boom; assets fragmented',
    firstSteps: ['Scrape itch.io/unity store', 'Demand gaps', 'Creator alerts'],
    monetization: 'Subscription + affiliate to creators',
    teenFriendly: true
  },
  {
    id: 'localized-job-boards-with-tests',
    title: 'Hyperlocal Job Board with Built-in Skill Tests',
    category: 'Marketplace',
    rarityScore: 7,
    moat: 'Assessment library + local SEO',
    whyNow: 'SMBs struggle to assess entry-level hires',
    firstSteps: ['Assessment templates', 'Stripe + pay-to-post', 'SMS applicant flow'],
    monetization: '$10-$50 per job post',
    teenFriendly: true
  },
  {
    id: 'ai-ops-for-minecraft-servers',
    title: 'Minecraft Server Ops Assistant',
    category: 'Gaming SaaS',
    rarityScore: 8,
    moat: 'Config knowledge base + best-practice playbooks',
    whyNow: 'Thousands of servers run by teens',
    firstSteps: ['Common plugin presets', 'Crash diagnosis', 'Auto backup + rollback'],
    monetization: '$5-$20/mo',
    teenFriendly: true
  },
  {
    id: 'no-code-robotics-sim',
    title: 'No-Code Robotics Simulator for School Teams',
    category: 'STEM Tools',
    rarityScore: 9,
    moat: 'Physics presets + competition rule packs',
    whyNow: 'FIRST/VEX teams need low-cost practice',
    firstSteps: ['WebGL base', 'Challenge editor', 'Preset bots'],
    monetization: 'Team licenses $99-$399/year',
    teenFriendly: true
  },
  {
    id: 'ai-translation-for-fan-subs',
    title: 'Fan-Sub Translation QA Assistant',
    category: 'Media Tools',
    rarityScore: 8,
    moat: 'Terminology memories + subtitle timing tools',
    whyNow: 'Global media fandoms; translation quality varies',
    firstSteps: ['SRT ingest', 'Timing drift detect', 'Style guide lints'],
    monetization: '$7-$19/mo prosumer',
    teenFriendly: true
  },
  {
    id: 'discord-customer-support-widget',
    title: 'Discord-to-Helpdesk Bridge for Indie Apps',
    category: 'Developer Tools',
    rarityScore: 7,
    moat: 'Thread mapping + triage AI',
    whyNow: 'Communities act as support channels',
    firstSteps: ['Discord bot', 'Thread ? ticket sync', 'Macros + deflection'],
    monetization: '$15-$49/mo per workspace',
    teenFriendly: true
  },
  {
    id: 'green-screens-audit',
    title: 'Green Screens: Streaming Scene Safety Auditor',
    category: 'Creator Tools',
    rarityScore: 9,
    moat: 'Realtime OCR/NSFW detection + overlays',
    whyNow: 'Livestreamers leak info accidentally',
    firstSteps: ['OBS plugin', 'Blur rules', '?Safe scene? checklist'],
    monetization: 'Subscription + pro add-ons',
    teenFriendly: true
  },
  {
    id: 'ai-mock-jury',
    title: 'AI Mock Jury for Debate and Moot Court',
    category: 'Education/Coaching',
    rarityScore: 9,
    moat: 'Argument map scoring + dataset',
    whyNow: 'Speech and debate adoption growing',
    firstSteps: ['Argument trees', 'Cross-examination bots', 'Feedback rubrics'],
    monetization: 'Teams/coach subscriptions',
    teenFriendly: true
  },
  {
    id: 'home-lab-energy-optimizer',
    title: 'Home Lab Energy Optimizer',
    category: 'DevOps/IoT',
    rarityScore: 8,
    moat: 'Usage patterns + smart scheduling',
    whyNow: 'Rising power costs for home servers',
    firstSteps: ['Docker agent', 'Sleep schedules', 'Cost dashboard'],
    monetization: '$5-$15/mo prosumer',
    teenFriendly: true
  },
  {
    id: 'sms-rental-screening-lite',
    title: 'SMS-First Tenant Screening Lite for Small Landlords',
    category: 'Fintech/Proptech',
    rarityScore: 7,
    moat: 'Lightweight workflow + compliance guidance',
    whyNow: 'DIY landlords lack tools; SMS conversion higher',
    firstSteps: ['SMS intake', 'Basic checks', 'Landlord portal'],
    monetization: '$9/listing + add-ons',
    teenFriendly: true
  },
  {
    id: 'youth-sports-recruiting-pages',
    title: 'AI Recruiting Pages for Youth Athletes',
    category: 'Sports Tech',
    rarityScore: 8,
    moat: 'Highlight extraction + coach outreach tools',
    whyNow: 'Video + recruiting are mobile-native now',
    firstSteps: ['Auto clip highlights', 'Stat overlays', 'Coach email sequences'],
    monetization: '$8-$20/mo',
    teenFriendly: true
  },
  {
    id: 'micro-vc-db-for-founders','title': 'Micro VC/Scout Database for First Checks',
    category: 'Meta/Founder Tools',
    rarityScore: 7,
    moat: 'Verified intros + signal index',
    whyNow: 'Early checks fragmented; scouts active',
    firstSteps: ['Curate db', 'Signals and filters', 'Pitch email generator'],
    monetization: 'Subscription; $12-$29/mo',
    teenFriendly: true
  },
  {
    id: 'local-language-kids-content','title': 'Local-Language Audio Stories Marketplace',
    category: 'Media/Edutainment',
    rarityScore: 8,
    moat: 'Narrator marketplace + ratings',
    whyNow: 'Parents want screen-free content',
    firstSteps: ['Story scripts', 'Narrator onboarding', 'Mobile web player'],
    monetization: 'Per-story bundles + sub',
    teenFriendly: true
  },
  {
    id: 'teens-finance-coach','title': 'Teens Finance Coach Bot (Parents Dashboard)',
    category: 'Fintech/EdTech',
    rarityScore: 8,
    moat: 'Family accounts + gamified missions',
    whyNow: 'Financial literacy push + debit cards',
    firstSteps: ['Savings missions', 'Allowance tracking', 'Quizzes'],
    monetization: '$5-$12/mo family',
    teenFriendly: true
  },
  {
    id: 'ugc-mod-tools-roblox','title': 'UGC Moderation Toolkit for Roblox Creators',
    category: 'Creator/Platform',
    rarityScore: 8,
    moat: 'Asset rules + auto-fixes',
    whyNow: 'UGC explosion; moderation painful',
    firstSteps: ['Asset scan', 'Rule packs', 'Risk dashboard'],
    monetization: '$9-$29/mo',
    teenFriendly: true
  },
  {
    id: 'ai-book-summary-education','title': 'AI Book Summary Packs for Schools',
    category: 'EdTech',
    rarityScore: 7,
    moat: 'Teacher-aligned rubrics + citations',
    whyNow: 'Teachers lack prep time',
    firstSteps: ['Common books', 'Lesson alignment', 'PDF export'],
    monetization: 'School licenses',
    teenFriendly: true
  },
  {
    id: 'local-repair-marketplace','title': 'Local Repair Marketplace with Pickup Logistics',
    category: 'Marketplace/SMB',
    rarityScore: 7,
    moat: 'Logistics partnerships + ratings',
    whyNow: 'Right-to-repair tailwinds',
    firstSteps: ['SMS scheduling', 'Courier api', 'Repair tracking'],
    monetization: 'Take rate 10-15%',
    teenFriendly: true
  },
  {
    id: 'privacy-saas-for-student-clubs','title': 'Privacy SaaS for Student Clubs',
    category: 'B2B SaaS',
    rarityScore: 8,
    moat: 'Templates + best practices',
    whyNow: 'Clubs handle data without guardrails',
    firstSteps: ['Policy generator', 'Consent forms', 'Access logs'],
    monetization: '$3-$8/mo per club',
    teenFriendly: true
  }
];

export function generateIdeas(profile) {
  const { age, skills = [], hoursPerWeek = 10, interests = [], goal = 'profit' } = profile || {};
  const normalizedSkills = new Set(skills.map(s => s.toLowerCase()));
  const normalizedInterests = new Set(interests.map(s => s.toLowerCase()));
  const base = IDEAS.filter(i => i.teenFriendly);

  function score(idea) {
    let s = idea.rarityScore * 2;
    if (idea.category.toLowerCase().includes('saas')) s += 2;
    const text = `${idea.title} ${idea.category} ${idea.moat} ${idea.firstSteps.join(' ')}`.toLowerCase();
    for (const k of normalizedSkills) if (text.includes(k)) s += 1.5;
    for (const k of normalizedInterests) if (text.includes(k)) s += 1.0;
    if (hoursPerWeek < 8) s -= 1.5; else if (hoursPerWeek > 15) s += 1;
    if (goal === 'profit') s += 1; if (goal === 'learning') s += 0.5;
    if (age && age < 16 && idea.category.toLowerCase().includes('fintech')) s -= 1; // compliance friction
    return s;
  }

  return base
    .map(i => ({ ...i, score: Math.round(score(i) * 10) / 10 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
}
