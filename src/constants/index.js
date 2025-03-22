import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "AI Features",
  },
  {
    id: "solutions",
    title: "Solutions",
  },
  {
    id: "clients",
    title: "Success Stories",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "AI Insights",
    content:
      "Get real-time, AI-driven financial insights tailored to your business needs",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Bank-Grade Security",
    content:
      "Military-grade encryption and multi-factor authentication protect your data",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Smart Automation",
    content:
      "Automate repetitive financial tasks with our intelligent AI algorithms",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Nexify transformed how we manage our finances. The AI insights are game-changing.",
    name: "Alex Johnson",
    title: "CEO, TechNova",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The automation features saved us hundreds of hours in financial operations.",
    name: "Sarah Lee",
    title: "CFO, InnovateX",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Finally, a financial platform that grows with our business needs.",
    name: "Michael Tan",
    title: "COO, FutureTech",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "15K+",
  },
  {
    id: "stats-2",
    title: "Global Partners",
    value: "500+",
  },
  {
    id: "stats-3",
    title: "Transactions",
    value: "$1.2B+",
  },
];

export const footerLinks = [
  {
    title: "Resources",
    links: [
      {
        name: "AI Insights",
        link: "https://www.nexify.com/ai-insights/",
      },
      {
        name: "Case Studies",
        link: "https://www.nexify.com/case-studies/",
      },
      {
        name: "API Docs",
        link: "https://www.nexify.com/api-docs/",
      },
      {
        name: "Security",
        link: "https://www.nexify.com/security/",
      },
      {
        name: "Privacy Policy",
        link: "https://www.nexify.com/privacy/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Developers",
        link: "https://www.nexify.com/developers/",
      },
      {
        name: "Partners",
        link: "https://www.nexify.com/partners/",
      },
      {
        name: "Events",
        link: "https://www.nexify.com/events/",
      },
      {
        name: "Blog",
        link: "https://www.nexify.com/blog/",
      },
      {
        name: "Newsroom",
        link: "https://www.nexify.com/news/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "https://www.nexify.com/about/",
      },
      {
        name: "Careers",
        link: "https://www.nexify.com/careers/",
      },
      {
        name: "Contact",
        link: "https://www.nexify.com/contact/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/nexifyai",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/nexifyai",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/nexifyai",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/nexifyai",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];