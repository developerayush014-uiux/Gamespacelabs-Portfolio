// data/content.ts
// Central content config — swap out any field to update the site

export const siteConfig = {
  name: "GameSpace Lab",
  tagline: "Engineering Experiences at Scale",
  description:
    "Built by engineers from Netflix and Google, GameSpace Lab delivers world-class Android & web solutions to businesses across 200+ countries.",
  email: "hello@gamespacelab.com",
  phone: "+91 98765 43210",
  socials: {
    twitter: "https://twitter.com/gamespacelab",
    linkedin: "https://linkedin.com/company/gamespacelab",
    github: "https://github.com/gamespacelab",
    instagram: "https://instagram.com/gamespacelab",
    youtube: "https://youtube.com/@gamespacelab",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  { label: "Follow", href: "/social" },
  { label: "FAQ", href: "/faq" },
  { label: "Help", href: "/help" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Countries Reached" },
  { value: 100, suffix: "+", label: "Partner Firms" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

export const services = [
  {
    id: "android",
    icon: "Smartphone",
    title: "Android Development",
    subtitle: "Native & Kotlin-first",
    description:
      "End-to-end native Android apps built with Kotlin. Performance-optimized, security-hardened, and crafted for scale — from MVPs to enterprise-grade systems.",
    features: [
      "Kotlin & Java ecosystems",
      "Performance & security audits",
      "Full lifecycle support",
      "Play Store deployment",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#00d4ff",
  },
  {
    id: "webapp",
    icon: "Globe",
    title: "Web App Development",
    subtitle: "Full-stack & Scalable",
    description:
      "Modern, fast, scalable web applications using Next.js, React, and cloud-native architectures. From landing pages to complex SaaS platforms.",
    features: [
      "Next.js & React expertise",
      "API design & integration",
      "Cloud-native deployments",
      "SEO & Core Web Vitals",
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "#00ff88",
  },
  {
    id: "user-service",
    icon: "Users",
    title: "User Experience Services",
    subtitle: "Design-led Engineering",
    description:
      "We embed UX strategy into every sprint. From discovery workshops to pixel-perfect interfaces, we close the gap between design and engineering.",
    features: [
      "UX research & wireframing",
      "Design systems",
      "Accessibility compliance",
      "Usability testing",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "#a855f7",
  },
  {
    id: "client-projects",
    icon: "Briefcase",
    title: "Client Project Management",
    subtitle: "White-glove Delivery",
    description:
      "Dedicated project management for your digital initiatives. We handle scope, timeline, and stakeholder communication so you can focus on your business.",
    features: [
      "Agile project delivery",
      "Dedicated POC",
      "Weekly reporting",
      "Post-launch support",
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    accentColor: "#f97316",
  },
];

export const founders = [
  {
    id: "founder-1",
    name: "Founder",
    role: "Co-Founder & CEO",
    experience: "Ex-Netflix Engineer",
    bio: "Former senior engineer at Netflix with deep expertise in building large-scale distributed systems serving millions of users globally. Passionate about bringing world-class engineering standards to every client project.",
    skills: ["System Design", "Android Architecture", "Product Strategy"],
    avatar: null, // Replace with actual image path
  },
  {
    id: "founder-2",
    name: "Co-Founder",
    role: "Co-Founder & CTO",
    experience: "Ex-Google Ecosystem",
    bio: "Veteran of the Google ecosystem with experience across mobile, cloud, and developer tooling. Drives the technical vision and ensures GameSpace Lab stays ahead of the engineering curve.",
    skills: ["Cloud Infrastructure", "Web Performance", "Developer Experience"],
    avatar: null,
  },
];

export const niches = [
  "HR Tech",
  "FinTech",
  "Fitness",
  "Influencer Platforms",
  "Management Tools",
  "CRM Systems",
  "E-commerce",
  "EdTech",
];

export const regions = [
  { name: "Middle East", description: "Established presence with enterprise clients" },
  { name: "Russia & CIS", description: "Active partnerships and deployment" },
  { name: "Europe", description: "Serving startups and scale-ups" },
  {
    name: "South Asia",
    description: "New HQ — expanding aggressively into India & Southeast Asia",
    isNew: true,
  },
];

export const partners = [
  {
    id: "partner-1",
    name: "TechBridge Solutions",
    category: "Technology",
    region: "Middle East",
    description: "Strategic technology partner for enterprise Android deployments.",
  },
  {
    id: "partner-2",
    name: "FinEdge Capital",
    category: "FinTech",
    region: "Europe",
    description: "Collaborative partner for fintech app development and compliance.",
  },
  {
    id: "partner-3",
    name: "FitPro Networks",
    category: "Fitness",
    region: "Global",
    description: "Integration partner for health and fitness platform development.",
  },
  {
    id: "partner-4",
    name: "HRFlow Systems",
    category: "HR Tech",
    region: "Russia & CIS",
    description: "Joint delivery of HR SaaS applications across CIS markets.",
  },
  {
    id: "partner-5",
    name: "Influ Media Group",
    category: "Creator Economy",
    region: "Global",
    description: "Platform engineering for next-gen influencer management tools.",
  },
  {
    id: "partner-6",
    name: "CRM Nexus",
    category: "CRM",
    region: "South Asia",
    description: "New partnership focused on CRM solutions for the Indian market.",
    isNew: true,
  },
];

export const faqs = [
  {
    question: "What types of projects does GameSpace Lab take on?",
    answer:
      "We specialize in Android app development, web applications, and full-stack digital products across niches including fintech, HR tech, fitness, CRM, and creator economy platforms. We work with startups, scale-ups, and enterprises.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our founding team includes engineers with direct experience at Netflix and the Google ecosystem. Combined, we have 8+ years of experience and have delivered 100+ projects globally.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes — our business spans 200+ countries. We have established client relationships across the Middle East, Russia, Europe, and are now expanding aggressively in South and Southeast Asia.",
  },
  {
    question: "What is your typical engagement model?",
    answer:
      "We offer project-based engagements, dedicated team augmentation, and long-term retainers. Each project begins with a discovery call to understand your requirements and define scope.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out our Contact form with your project details, budget range, and preferred services. We'll respond within 24 hours to schedule a discovery call.",
  },
  {
    question: "What is the minimum budget for a project?",
    answer:
      "We work with budgets starting from $5,000. For enterprise-scale engagements, our typical project range is $15k–$50k+. Use our contact form to specify your budget and we'll tailor a proposal accordingly.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, all projects include a 30-day post-launch support period. We also offer ongoing maintenance and support retainer packages.",
  },
  {
    question: "Can you handle UI/UX design as well?",
    answer:
      "Absolutely. We have in-house UX research, wireframing, and design capabilities. We deliver fully designed and engineered solutions — you don't need a separate design agency.",
  },
];

export const socialLinks = [
  {
    platform: "Twitter / X",
    handle: "@gamespacelab",
    href: "https://twitter.com/gamespacelab",
    icon: "Twitter",
    followers: "2.4K",
    description: "Product updates, tech insights, and company news.",
    color: "#1DA1F2",
  },
  {
    platform: "LinkedIn",
    handle: "GameSpace Lab",
    href: "https://linkedin.com/company/gamespacelab",
    icon: "Linkedin",
    followers: "1.8K",
    description: "Professional updates, case studies, and hiring.",
    color: "#0A66C2",
  },
  {
    platform: "GitHub",
    handle: "gamespacelab",
    href: "https://github.com/gamespacelab",
    icon: "Github",
    followers: "340",
    description: "Open-source tools, boilerplates, and side projects.",
    color: "#ffffff",
  },
  {
    platform: "Instagram",
    handle: "@gamespacelab",
    href: "https://instagram.com/gamespacelab",
    icon: "Instagram",
    followers: "5.1K",
    description: "Behind-the-scenes, team culture, and visual updates.",
    color: "#E1306C",
  },
  {
    platform: "YouTube",
    handle: "GameSpace Lab",
    href: "https://youtube.com/@gamespacelab",
    icon: "Youtube",
    followers: "920",
    description: "Technical walkthroughs, demos, and founder videos.",
    color: "#FF0000",
  },
];
