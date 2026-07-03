// ============================================================
// portfolioData.js — Centralized configuration for Tamizharasi's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Tamizharasi",
  firstName: "Tamizharasi Ramesh",
  brandName: "Tamizharasi",
  title: "Senior Graphic Designer & Brand Specialist",
  location: "Bengaluru, India",
  phone: "+91 9894984752",
  emails: {
    primary: "tamizh9800@gmail.com",
    secondary: "",
  },
  summary:
    "Senior Graphic Designer with 7+ years of experience across advertising, fashion, healthcare, and digital brands. Specializes in brand storytelling, campaign creatives, presentations, and editorial design, with hands-on experience in video editing, motion graphics, and AI-assisted workflows. Known for delivering clean, impactful visuals while collaborating closely with cross-functional teams in fast-paced environments.",
  resumeUrl: "/Tamizharasi_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/tamizh1831",
  behance: "https://www.behance.net/tamizhramesh31",
  portfolio: "https://tamizhramesh2015.wixsite.com/mysite",
  email: "tamizh9800@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Tamizharasi",
  titleHighlight: "Senior Graphic Designer & Brand Designer",
  subtitle:
    "Crafting brand stories, campaign visuals, motion experiences, and high-impact communication across digital, print, and video.",
  ctaPrimary: { text: "View Selected Work", href: "#projects" },
  ctaSecondary: {
    text: "Discuss a Campaign",
    href: "mailto:tamizh9800@gmail.com?subject=Inquiry – Creative Partnership&body=Hello Tamizharasi,%0D%0A%0D%0AI came across your portfolio and would like to discuss a visual design campaign / project opportunity.%0D%0A%0D%0ALooking forward to connecting.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download CV", href: "/Tamizharasi_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Tamizharasi</span>. I'm a Senior Graphic Designer & Visual Communication Specialist based in Bengaluru with over 7 years of experience across advertising, fashion, retail, healthcare, and fintech domains. I specialize in brand storytelling, digital and print campaigns, client presentation design, editorial booklets, and motion graphics. With a strong foundation in visual communication and hands-on experience in video production and AI-assisted design tools, I collaborate closely with writers and cross-functional teams to build impactful assets that accelerate business growth and visual consistency.`,
  techStack: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma", "After Effects"],
};

// Process Data (Creative Design Process)
export const skillsContent = {
  badge: "My Process",
  heading: "Crafting Brand Identities & Visual Experiences",
  description:
    "I follow a structured, concept-driven pipeline to take campaign graphics from initial strategy and design concepts to final media adaptation and delivery.",
  cards: [
    {
      number: "01",
      title: "Discover & Understand",
      text: "Analyzing brand tone, business goals, and target audiences alongside strategists, writers, and account executives."
    },
    {
      number: "02",
      title: "Define Visual Direction",
      text: "Curating moodboards, establishing color directions, typography systems, layout structures, and cross-platform consistency grids."
    },
    {
      number: "03",
      title: "Design & Explore",
      text: "Crafting core visual identities, logos, print editorial templates, social advertisements, or catalog assets in vector grids."
    },
    {
      number: "04",
      title: "Refine, Motion & Adapt",
      text: "Polishing layouts in InDesign, animating short-form video reels, and integrating AI workflows to optimize iteration speeds."
    },
    {
      number: "05",
      title: "Deliver & Evolve",
      text: "Exporting high-resolution assets for press prints, web interfaces, and digital ads, ensuring pixel-perfect quality control."
    }
  ],
  endText: "Ready for launch!"
};

// Technical Skills (No percentage bars)
export const technicalSkills = {
  categories: [
    {
      title: "Core Design Software",
      skills: ["Adobe Creative Suite", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma"]
    },
    {
      title: "Visual and Motion Software",
      skills: ["After Effects", "Premiere Pro", "Adobe Dimension", "Final Cut Pro", "DaVinci Resolve"]
    },
    {
      title: "Office Suite & Presentations",
      skills: ["Microsoft PowerPoint", "Microsoft Word", "Google Sheets", "Google Docs"]
    },
    {
      title: "Data & Collaboration",
      skills: ["Microsoft Excel", "IBM SPSS", "Microsoft Teams", "Slack", "Zoom"]
    }
  ]
};

// Projects Data (Editorial campaign selections using verified resume information)
export const projects = [
  {
    id: "ssu-advertising-campaigns",
    number: "01",
    badge: "📢 Integrated Advertising",
    title: "Advertising Campaigns & Short-Form Motion Video",
    description:
      "Designed branding guidelines, print advertisements, and digital creatives for diverse clients at Sunny Side Up. Created and edited short-form video reels and motion graphics, utilizing modern AI-assisted tools to accelerate layout prototyping and expand creative exploration.",
    techTags: ["Campaign Creatives", "Short-Form Video", "Motion Assets", "Social Media", "AI Workflows"],
    links: {
      behance: "https://www.behance.net/tamizhramesh31",
      portfolio: "https://tamizhramesh2015.wixsite.com/mysite",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "indegene-healthcare-editorial",
    number: "02",
    badge: "🏥 Healthcare & Editorial Design",
    title: "Medical Communications, Layouts & Presentations",
    description:
      "Engineered layout designs for confidential healthcare communication products, including brochures, newsletters, flyers, and booklets. Designed clinical study presentations and visual illustrations inside PowerPoint and InDesign, ensuring corporate compliance and accessibility.",
    techTags: ["Editorial Layout", "Confidential Materials", "Booklets", "Presentations", "Adobe InDesign", "PowerPoint"],
    links: {
      behance: "https://www.behance.net/tamizhramesh31",
      portfolio: "https://tamizhramesh2015.wixsite.com/mysite",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "cloudtailor-brand-consistency",
    number: "03",
    badge: "👗 Fashion & Retail Marketing",
    title: "Fashion Brand Visual Direction & Design Mentorship",
    description:
      "Executed end-to-end design layout checks across print and digital mediums for CloudTailor. Led visual campaign ideation, oversaw motion graphics content, and mentored junior designers in high-velocity branding campaigns.",
    techTags: ["Brand Consistency", "Campaign Design", "Video Assembly", "Design Mentoring", "Retail Graphics"],
    links: {
      behance: "https://www.behance.net/tamizhramesh31",
      portfolio: "https://tamizhramesh2015.wixsite.com/mysite",
      demo: null,
    },
    isFlagship: false,
  },
];

// Award Spotlight Data
export const awardSpotlight = {
  title: "Employee of the Month",
  date: "July 2019",
  organization: "StuCred® — Real-Time Student Credit",
  location: "Chennai, India",
  description:
    "Awarded for outstanding contributions to brand and campaign creatives, delivering rapid-response advertising posters, visual reports, and motion graphics inside the in-house marketing division."
};

// Education Data
export const educationList = [
  {
    institution: "Loyola College",
    degree: "B.Sc. Visual Communication",
    duration: "2015 – 2018",
    location: "Chennai, India",
    gpa: "Core: Media Studies, Graphic Design, Drawing, Copywriting"
  },
  {
    institution: "Mary Immaculate Girls Higher Secondary School",
    degree: "Higher Secondary School (HSC)",
    duration: "2013 – 2015",
    location: "Tirupattur, India",
    gpa: "Grade Completed"
  },
  {
    institution: "Government High School",
    degree: "High School (SSLC)",
    duration: "2012 – 2013",
    location: "Tirupattur, India",
    gpa: "Grade Completed"
  }
];

// Experience Data
export const experienceList = [
  {
    organization: "Sunny Side Up Advertising Company",
    role: "Senior Graphic Designer",
    duration: "July 2025 – June 2026",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed branding assets, social media creative packs, and advertising content for corporate client accounts.",
      "Created and edited short-form video reels, promotional movies, and motion-based campaign creatives.",
      "Leveraged AI-assisted design workflows to enhance iteration speeds, production output, and layout exploration.",
      "Collaborated with brand strategists, copywriters, and client accounts to execute visual storytelling assets."
    ],
    tech: ["Branding", "Campaign Creatives", "Motion Graphics", "Video Reels", "AI Tools"]
  },
  {
    organization: "Indegene",
    role: "Senior Graphic Designer",
    duration: "December 2024 – June 2025",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed healthcare and medical communications layouts, flyers, booklets, and sustainability designs.",
      "Created structured presentations and clinical study materials using PowerPoint and InDesign.",
      "Developed educational illustrations and optimized web graphics to support medical marketing teams."
    ],
    tech: ["Adobe InDesign", "PowerPoint", "Editorial Design", "Medical Illustrating", "Presentations"]
  },
  {
    organization: "CloudTailor",
    role: "Senior Graphic Designer",
    duration: "April 2024 – November 2024",
    location: "Bengaluru, India",
    responsibilities: [
      "Managed end-to-end design consistency across corporate digital platforms and retail print materials.",
      "Mentored junior graphic designers in campaign visual assembly and layout optimization.",
      "Oversaw animated creative content, retail campaign visuals, and promotional video content."
    ],
    tech: ["Brand Consistency", "Mentorship", "Campaign Ideation", "Video Assembly", "Retail Marketing"]
  },
  {
    organization: "Nalli Silks Pvt. Ltd.",
    role: "Graphic Designer",
    duration: "December 2022 – March 2024",
    location: "Bengaluru, India",
    responsibilities: [
      "Designed cross-platform creatives for Google and Meta Ads, print collaterals, and website branding.",
      "Supported product photoshoots, retail packaging, catalog layouts, and retail store displays."
    ],
    tech: ["Meta Ads", "Google Ads", "Web Creatives", "Photoshoots", "Retail Branding"]
  },
  {
    organization: "Eon8 — The Digital Infinity",
    role: "Graphic Designer",
    duration: "January 2022 – November 2022",
    location: "Chennai, India",
    responsibilities: [
      "Delivered static, animated, and event-based creatives for digital and social media marketing campaigns.",
      "Collaborated with content writers to execute layouts that align with brand messaging guidelines."
    ],
    tech: ["Static Creatives", "Animations", "Digital Marketing", "Campaign Assets", "Social Media"]
  },
  {
    organization: "StuCred® — Real-Time Student Credit",
    role: "Graphic Designer",
    duration: "August 2018 – October 2021",
    location: "Chennai, India",
    responsibilities: [
      "Created brand visual templates, posters, marketing reports, and motion graphics for mobile platforms.",
      "Collaborated with app engineers and support teams to adapt brand aesthetics across customer portals.",
      "Awarded Employee of the Month in July 2019 for campaign execution excellence and in-house team contributions."
    ],
    tech: ["Marketing Collaterals", "Ad Posters", "Motion Graphics", "App Visual Assets", "Employee of the Month"]
  }
];

export const footerContent = {
  taglines: [
    "Senior Graphic Designer & Brand Specialist",
    "Visual Communication & Motion Graphics",
    "Creative Direction, Print, Digital & Video Ads",
  ],
  credential: "B.Sc. Visual Communication · Loyola College",
  copyright: `© ${new Date().getFullYear()} Tamizharasi | Crafted with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
