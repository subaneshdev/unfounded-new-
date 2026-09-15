export type DisciplineCategory =
  | "Developer"
  | "Designer"
  | "Marketer"
  | "Digital Marketer"
  | "Influencer"
  | "Generalist";

export interface ProjectWork {
  id: string;
  url: string;
  role: string;
}

export interface FriendsFormData {
  // Step 1: Basics
  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  whatsappConsent: boolean;
  emailConsent: boolean;

  // Step 2: Social
  linkedin: string;
  otherSocial: string;

  // Step 3: Fields & Roles
  selectedCategories: DisciplineCategory[];
  selectedRoles: string[];

  // Step 4: Work
  primaryPortfolio: string;
  secondaryPortfolio: string;
  tertiaryPortfolio: string;
  projects: ProjectWork[];

  // Step 5: About
  videoUrl: string;
  aboutText: string;

  // Step 6: Status
  workingStatus: string;

  // Step 7: Availability
  weeklyAvailability: string;

  // Step 8: Compensation
  pricingModel: string[];
  dayRate: string;
  pricingNotes: string;
}

export const INITIAL_FORM_DATA: FriendsFormData = {
  fullName: "",
  email: "",
  countryCode: "+91",
  phoneNumber: "",
  whatsappConsent: true,
  emailConsent: true,

  linkedin: "",
  otherSocial: "",

  selectedCategories: [],
  selectedRoles: [],

  primaryPortfolio: "",
  secondaryPortfolio: "",
  tertiaryPortfolio: "",
  projects: [{ id: "1", url: "", role: "" }],

  videoUrl: "",
  aboutText: "",

  workingStatus: "",
  weeklyAvailability: "",

  pricingModel: [],
  dayRate: "",
  pricingNotes: "",
};

export const ROLE_TAXONOMY: Record<DisciplineCategory, string[]> = {
  Developer: [
    "Full Stack Engineer (Next.js / Node)",
    "Frontend & UI Engineer (WebGL / Motion)",
    "Backend & Systems Architect (Python / Go)",
    "AI / LLM Agent Engineer",
    "Mobile Engineer (iOS / Android / RN)",
    "DevOps & Cloud Infrastructure",
  ],
  Designer: [
    "Product & UI/UX Designer",
    "Design Engineer (Code + Figma)",
    "Brand & Visual Identity Designer",
    "3D & Motion Graphics Designer",
    "Design Systems Specialist",
  ],
  Marketer: [
    "Product Marketing Manager (PMM)",
    "Go-To-Market (GTM) Strategist",
    "Brand Positioning & Storyteller",
    "Copywriter & Creative Director",
    "Community Architect",
  ],
  "Digital Marketer": [
    "Performance Marketing (Meta / Google Ads)",
    "SEO & Programmatic Search Specialist",
    "Viral Social & Growth Hacker",
    "Lifecycle, Email & CRM Specialist",
    "Funnel CRO & Product Analytics",
  ],
  Influencer: [
    "Tech & SaaS Creator",
    "Video Podcaster / Host",
    "UGC & Demo Specialist",
    "Twitter / LinkedIn Builder-in-Public",
    "Short-Form Video Producer (Reels/TikTok)",
  ],
  Generalist: [
    "Full Builder (Code + Design + Sell)",
    "Entrepreneur in Residence (EIR)",
    "Prototype-in-a-Weekend Builder",
    "Technical Chief of Staff",
  ],
};
