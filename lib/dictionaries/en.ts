export type ServiceFlow = { name: string; scope: string; estimate: string }
export type ServicePricing = {
  price: string
  unit: string
  duration: string
  note: string
}
export type ServiceSection = { title: string; body: string[] }
export type ServiceFaq = { q: string; a: string }
export type Service = {
  slug: string
  no: string
  icon: string
  name: string
  tagline: string
  summary: string
  why: string
  highlights: string[]
  deliverables: string[]
  flows?: ServiceFlow[]
  pricing?: ServicePricing
  sections?: ServiceSection[]
  faq?: ServiceFaq[]
}
export type CaseStudy = {
  slug: string
  client: string
  monogram: string
  sector: string
  year: string
  summary: string
  challenge: string
  solution: string
  services: string[]
  results: { metric: string; label: string }[]
}
export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: number
  author: string
  body: string[]
}
export type PricingTier = {
  name: string
  startingAt: string
  forWho: string
  includes: string[]
  featured?: boolean
}

export const en = {
  locale: "en",
  brand: {
    name: "AILABS",
    tagline: "AI-native growth studio",
  },
  nav: {
    home: "Home",
    services: "Services",
    caseStudies: "Case Studies",
    pricing: "Pricing",
    about: "About",
    blog: "Blog",
    contact: "Contact",
  },
  cta: {
    contact: "Contact us",
    audit: "Get a free website audit",
    bookCall: "Book a call",
    getStarted: "Get started",
    viewWork: "View case studies",
    learnMore: "Learn more",
    readMore: "Read more",
    explore: "Explore service",
    allPosts: "All articles",
    viewAll: "View all",
    backHome: "Back to home",
    sendMessage: "Send message",
    getProposal: "Get a proposal",
  },
  // ── Shared service catalogue ───────────────────────────────
  servicesList: ([
    {
      slug: "ai-website-development",
      no: "01",
      icon: "layout",
      name: "AI Website Development",
      tagline: "Websites Built for Search, Speed, and Growth",
      summary:
        "We design websites that attract qualified traffic, convert visitors into leads, and grow with your business. AI-powered production means faster launches without sacrificing quality.",
      why: "Most websites are brochures. We build websites as growth systems: fast, semantic, and structured so both people and AI search engines understand and recommend you.",
      highlights: [
        "AI-assisted copy & content modeling tuned to your funnel",
        "Headless, Core-Web-Vitals-perfect builds (Next.js)",
        "Schema & structured data ready for AI answer engines",
        "Built-in A/B testing and conversion tracking",
      ],
      deliverables: [
        "UX & information architecture",
        "Design system + component library",
        "Production build & CMS handover",
        "Analytics, tracking & growth dashboard",
      ],
      sections: [
        {
          title: "Faster Launches Without Sacrificing Quality",
          body: [
            "Most web projects drag on for months. Content, design, development, and SEO are handled separately, each causing delays.",
            "We run these in parallel. With an AI-assisted workflow and a single integrated team, most websites launch in 7 days. No bottlenecks, no missed handoffs.",
          ],
        },
        {
          title: "Built Around Your Customers",
          body: [
            "We do not design for trends. We design for how your specific customers think, search, and decide.",
            "Every project starts with your audience. We map their journey, build a structure that guides them naturally to action, and test everything against real conversion goals.",
          ],
        },
        {
          title: "Global Experience, Local Understanding",
          body: [
            "We have built for businesses in the US, Australia, Sweden, Thailand, and Vietnam. Different markets, different buyer expectations, different trust signals.",
            "That exposure shapes how we approach positioning and messaging for every new project, wherever your customers are.",
          ],
        },
        {
          title: "Built for Modern Search",
          body: [
            "Customers now find businesses through ChatGPT, Gemini, and Perplexity, not just Google. Visibility requires more than traditional SEO.",
            "Every site we build is structured for SEO, AEO, and GEO from day one. Content architecture, schema, metadata, and technical performance are built in, not bolted on.",
          ],
        },
        {
          title: "Technology That Supports Growth",
          body: [
            "We build on Next.js with structured design systems and clean architecture. Sites load fast, perform across devices, and stay easy to update.",
            "Every technology choice is made to support your growth, not to show off our stack.",
          ],
        },
        {
          title: "Analytics From Day One",
          body: [
            "Every project ships with GA4, Google Search Console, conversion tracking, and sitemap submission already configured.",
            "From day one, you have data. No setup lag, no guessing.",
          ],
        },
        {
          title: "A Long-Term Digital Asset",
          body: [
            "Most sites become a maintenance burden within a year. Ours do not.",
            "We structure every website for content expansion, campaign support, and future development. Clean code, scalable design systems, and clear documentation keep your site working for you long after launch.",
          ],
        },
      ],
      faq: [
        {
          q: "How long does it take to build a website?",
          a: "Most business websites are delivered in 7 to 14 business days from kickoff to launch. Timeline depends on scope, content readiness, and the number of pages. We will give you a clear delivery estimate before the project begins.",
        },
        {
          q: "What makes your websites different from a standard web agency?",
          a: "AI is built into every stage: content strategy, copywriting, design systems, and SEO. That means faster delivery without quality tradeoffs. Every site is also optimized for AI search engines like ChatGPT, Gemini, and Perplexity, not just Google.",
        },
        {
          q: "Do you work with clients outside of Vietnam?",
          a: "Yes. We have delivered websites for businesses in the US, Australia, Sweden, Thailand, and Vietnam. We work remotely and collaborate comfortably across time zones.",
        },
        {
          q: "What is GEO and why does it matter for my business?",
          a: "GEO (Generative Engine Optimization) is how your website gets cited by AI tools like ChatGPT and Perplexity. As more buyers use AI to find services, showing up in those answers matters as much as ranking on Google. We build for both.",
        },
        {
          q: "How much does a website cost?",
          a: "It depends on scope and number of pages. See our Pricing page for starting rates, or request a free audit and we will send a custom proposal.",
        },
        {
          q: "Can you redesign my existing website?",
          a: "Yes. We handle both new builds and redesigns. For existing sites, we audit first to identify what to keep, fix, or replace.",
        },
        {
          q: "Will I be able to update the website myself after launch?",
          a: "Yes. Every project includes CMS handover with a walkthrough and written documentation so your team can manage content without a developer.",
        },
        {
          q: "Do you write the content for the website?",
          a: "Yes. We handle copywriting for all core pages, written to match your brand voice, target audience, and SEO requirements.",
        },
        {
          q: "What happens after the website goes live?",
          a: "GA4, Search Console, conversion tracking, and sitemap are configured before launch. You have full data access from day one. Ongoing SEO and content retainers are available if you want to keep growing.",
        },
        {
          q: "How do I get started?",
          a: "The easiest first step is to request a free website audit. We will review your current site (or brief, if you are starting fresh), identify opportunities, and send you a clear proposal. No commitment required.",
        },
      ],
    },
    {
      slug: "seo-ai-search",
      no: "02",
      icon: "search",
      name: "SEO & AI Search Visibility",
      tagline: "Get found by Google, and by AI.",
      summary:
        "Rank in classic search and become the cited source inside ChatGPT, Perplexity, Gemini and AI Overviews (GEO/AEO).",
      why: "Search is splitting in two: blue links and AI answers. We optimise for both, technical SEO plus Generative Engine Optimization so your brand is the answer, not a footnote.",
      highlights: [
        "Technical SEO audit & Core Web Vitals fixes",
        "Generative Engine Optimization (GEO/AEO)",
        "Topical authority & entity-based content maps",
        "Programmatic & internal-link architecture",
      ],
      deliverables: [
        "Full technical & content audit",
        "Keyword + AI-prompt opportunity map",
        "Monthly content & link roadmap",
        "Rank, traffic & AI-citation reporting",
      ],
    },
    {
      slug: "ai-content-marketing",
      no: "03",
      icon: "sparkles",
      name: "Content & Automation",
      tagline: "A content engine that runs itself.",
      summary:
        "Automated, on-brand content pipelines, research, drafting, repurposing and distribution, with a human editor at the helm.",
      why: "Publishing consistently is an operations problem. We design AI workflows that turn one idea into a month of channel-ready content, reviewed by people, shipped on schedule.",
      highlights: [
        "Custom AI workflows (n8n, Make, GPT pipelines)",
        "Brand-voice tuning & editorial guardrails",
        "Multi-channel repurposing (blog to social to email)",
        "Performance loops feeding the next sprint",
      ],
      deliverables: [
        "Content strategy & brand-voice kit",
        "Automated production pipeline",
        "Editorial calendar & approval flow",
        "Monthly analytics & optimization",
      ],
    },
    {
      slug: "shopify-development",
      no: "04",
      icon: "shopping-bag",
      name: "Shopify Store Development & Growth",
      tagline: "Stores built to sell, scoped by flow.",
      summary:
        "Custom Shopify themes, apps and conversion flows, each workstream scoped and estimated transparently before we start.",
      why: "We break Shopify projects into clear flows so you know exactly what each piece costs and delivers, no surprise invoices, no scope creep.",
      highlights: [
        "Custom theme & headless storefronts",
        "Checkout, subscription & upsell flows",
        "App integrations & custom Shopify apps",
        "CRO, speed and analytics tuning",
      ],
      deliverables: [
        "Per-flow scope & estimate document",
        "Design + build for each flow",
        "QA, launch & merchant training",
        "Post-launch optimization sprint",
      ],
      flows: [
        {
          name: "Storefront & theme",
          scope: "Custom theme, PDP/PLP, brand system",
          estimate: "2-4 weeks",
        },
        {
          name: "Checkout & conversion",
          scope: "Upsells, bundles, cart & checkout UX",
          estimate: "1-2 weeks",
        },
        {
          name: "Subscriptions & retention",
          scope: "Recharge / subscription flow + emails",
          estimate: "1-3 weeks",
        },
        {
          name: "Custom app / integration",
          scope: "ERP, 3PL, or bespoke Shopify app",
          estimate: "Scoped per project",
        },
      ],
    },
    {
      slug: "ai-training",
      no: "05",
      icon: "graduation-cap",
      name: "AI Consulting & Training",
      tagline: "Upskill your team to ship with AI.",
      summary:
        "Hands-on, practical AI workshops for in-house marketing teams, built around your real tools, channels and workflows.",
      why: "Tools don't transform teams, habits do. In two focused hours we get your marketers building real prompts, workflows and assets they use the next morning.",
      highlights: [
        "Live, hands-on 2-hour sessions",
        "Tailored to your channels & stack",
        "Reusable prompt & workflow library",
        "Available in Vietnam only",
      ],
      deliverables: [
        "Custom workshop curriculum",
        "Prompt & automation playbook",
        "Recording & resource pack",
        "Follow-up Q&A support",
      ],
      pricing: {
        price: "700,000₫",
        unit: "per person",
        duration: "2-hour session",
        note: "On-site AI training available in Vietnam only.",
      },
    },
  ] as Service[]),

  // ── Shared case studies ────────────────────────────────────
  caseStudiesList: ([
    {
      slug: "fishbone",
      client: "Fishbone",
      monogram: "FB",
      sector: "F&B / Hospitality",
      year: "2024",
      summary:
        "Rebuilt the digital presence and content engine for a fast-growing hospitality brand.",
      challenge:
        "Fishbone had strong demand but a slow, hard-to-update site and inconsistent content output.",
      solution:
        "A headless website plus an AI content pipeline that keeps menus, stories and promotions fresh across channels.",
      services: ["AI Website Development", "AI Content Marketing"],
      results: [
        { metric: "2.4×", label: "Organic traffic" },
        { metric: "-58%", label: "Page load time" },
        { metric: "4×", label: "Content output" },
      ],
    },
    {
      slug: "cbl",
      client: "CBL",
      monogram: "CB",
      sector: "B2B Services",
      year: "2024",
      summary:
        "Turned a static corporate site into a lead-generating, search-optimised platform.",
      challenge:
        "CBL ranked for almost nothing and relied entirely on referrals for new business.",
      solution:
        "Technical SEO overhaul, topical content map and an AI-assisted publishing cadence.",
      services: ["SEO & AI Search", "AI Website Development"],
      results: [
        { metric: "Top 3", label: "For core keywords" },
        { metric: "3.1×", label: "Qualified leads" },
        { metric: "+180%", label: "Search impressions" },
      ],
    },
    {
      slug: "beauty-by-hien",
      client: "Beauty by Hien",
      monogram: "BH",
      sector: "Beauty / E-commerce",
      year: "2023",
      summary:
        "Designed and built a Shopify storefront with conversion flows that scale.",
      challenge:
        "A growing beauty brand stuck on a generic template with a leaky checkout.",
      solution:
        "Custom Shopify theme, optimised checkout and upsell flows, plus retention email automation.",
      services: ["Shopify Development", "AI Content Marketing"],
      results: [
        { metric: "+46%", label: "Conversion rate" },
        { metric: "+32%", label: "Average order value" },
        { metric: "2.2×", label: "Returning customers" },
      ],
    },
  ] as CaseStudy[]),

  // ── HOME ───────────────────────────────────────────────────
  home: {
    hero: {
      eyebrow: "AI · SEO · Web · Automation",
      titleLead: "We build the",
      titleEmphasis: "growth engine",
      titleTail: "for AI-first brands.",
      subtitle:
        "AILABS designs websites, search strategies and content systems that win in the age of AI, engineered to be found by people and recommended by machines.",
      markets: "Serving clients across the US, Australia, Thailand, Vietnam and Sweden.",
      primaryCta: "Start a project",
      secondaryCta: "See our work",
    },
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "50+", label: "Projects shipped" },
      { value: "3.2×", label: "Avg. traffic lift" },
      { value: "5", label: "Core services" },
    ],
    marquee: [
      "AI Search Optimization",
      "Conversion Websites",
      "Content Automation",
      "Shopify Commerce",
      "Generative Engine Optimization",
      "Team Training",
    ],
    servicesSection: {
      eyebrow: "What we do",
      title: "Services engineered for the AI era",
      desc: "Five focused offerings that take you from invisible to inevitable.",
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path from idea to impact",
      steps: [
        {
          no: "01",
          title: "Discover",
          desc: "We audit your funnel, search presence and content, and find the fastest wins.",
        },
        {
          no: "02",
          title: "Design",
          desc: "We architect the website, search strategy and AI workflows around real goals.",
        },
        {
          no: "03",
          title: "Build",
          desc: "We ship fast, accessible, search-ready assets with tracking baked in.",
        },
        {
          no: "04",
          title: "Grow",
          desc: "We measure, optimise and compound results month after month.",
        },
      ],
    },
    caseStudiesSection: {
      eyebrow: "Selected work",
      title: "Brands we've helped grow",
      desc: "From hospitality to AI SaaS, measurable results, not vanity metrics.",
    },
    trustedBy: "Trusted by teams that ship",
    testimonials: {
      title: "What clients say",
      desc: "Real results, in their words.",
      items: [
        {
          quote:
            "AILABS rebuilt our site and content engine. Organic traffic more than doubled and we finally publish on schedule, every week.",
          name: "Linh Tran",
          role: "Founder, Fishbone",
        },
        {
          quote:
            "They made us the answer inside the AI tools our buyers actually use. Demo requests jumped within the first few weeks.",
          name: "David Pham",
          role: "Head of Growth, capq.ai",
        },
        {
          quote:
            "Our Shopify store converts far better and customers keep coming back. The team simply understands commerce.",
          name: "Sam Jones",
          role: "Founder, Beauty by Hien",
        },
      ],
    },
    ctaBand: {
      title: "Let's build something worth finding.",
      desc: "Tell us where you want to grow. We'll send back a clear, no-pressure plan.",
      button: "Contact us",
    },
  },

  // ── SERVICES (index) ───────────────────────────────────────
  services: {
    eyebrow: "Services",
    title: "Everything you need to grow in the AI era",
    desc: "From your website to your search visibility to your content engine, and the training to run it all in-house.",
    whyTitle: "Why",
    deliverablesTitle: "What you get",
    flowsTitle: "Flows & estimates",
    pricingTitle: "Pricing",
    relatedTitle: "Other services",
  },

  // ── CASE STUDIES (index) ───────────────────────────────────
  caseStudies: {
    eyebrow: "Case studies",
    title: "Work that earns its keep",
    desc: "A look at how we turn AI, search and design into measurable growth.",
    challengeTitle: "The challenge",
    solutionTitle: "What we did",
    resultsTitle: "Results",
    servicesTitle: "Services",
    nextLabel: "Next case study",
  },

  // ── PRICING ────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent scope. Custom proposals.",
    desc: "Every brand is different, so we don't sell fixed packages off the shelf. Here's where engagements typically start, book a call for a tailored proposal.",
    note: "Prices shown are starting points. Final scope and investment are confirmed in a proposal.",
    startingAt: "Starting at",
    tiers: ([
      {
        name: "Website",
        startingAt: "Contact us",
        forWho: "Brands that need a fast, conversion-first, AI-ready site.",
        includes: [
          "UX, design system & build",
          "AI-assisted content",
          "Search & schema ready",
          "Analytics & tracking setup",
        ],
      },
      {
        name: "Search & Content",
        startingAt: "Contact us",
        forWho: "Teams who want to rank on Google and get cited by AI.",
        includes: [
          "Technical SEO + GEO/AEO",
          "Content roadmap & production",
          "Automation workflows",
          "Monthly reporting",
        ],
        featured: true,
      },
      {
        name: "Commerce",
        startingAt: "Contact us",
        forWho: "Shopify brands scaling revenue and retention.",
        includes: [
          "Per-flow scope & estimate",
          "Custom theme & checkout",
          "Upsell & subscription flows",
          "CRO & speed tuning",
        ],
      },
    ] as PricingTier[]),
    training: {
      eyebrow: "Team enablement",
      title: "AI training for your marketing team",
      desc: "A hands-on, 2-hour session built around your real tools, so your team ships with AI the next day.",
      price: "700,000₫",
      unit: "per person",
      duration: "2-hour session",
      note: "On-site AI training available in Vietnam only.",
      cta: "Book a session",
    },
    demo: {
      eyebrow: "See it live",
      title: "Demo & tracking, before you commit",
      desc: "We'll show you a working demo and set up transparent performance tracking, so you can see the impact before scaling spend.",
      points: [
        "Live demo tailored to your brand",
        "Conversion & search tracking dashboard",
        "Clear, milestone-based scope",
      ],
    },
    faq: {
      title: "Common questions",
      items: [
        {
          q: "Why don't you list fixed prices?",
          a: "Because honest pricing depends on scope. We scope every engagement and send a clear proposal, no padded packages.",
        },
        {
          q: "How do estimates work?",
          a: "For Shopify and web work we break the project into flows, each with its own scope and estimate, so you only pay for what you need.",
        },
        {
          q: "Do you offer ongoing retainers?",
          a: "Yes. SEO, content and automation work best as monthly engagements that compound over time.",
        },
        {
          q: "Is training really Vietnam-only?",
          a: "On-site team training is currently offered in Vietnam at 700,000₫ per person for a 2-hour session.",
        },
      ],
    },
  },

  // ── ABOUT ──────────────────────────────────────────────────
  about: {
    eyebrow: "About AILABS",
    title: "A decade of building things that get found.",
    lead: "AILABS is a small, senior team that has spent 10+ years at the intersection of design, search and automation, now pointed squarely at the AI era.",
    story: [
      "We started building websites long before \"AI\" was on every slide. That decade taught us what actually moves the needle: speed, clarity, structure, and content people (and now machines) trust.",
      "Today we combine that craft with AI, not as a gimmick, but as leverage. We help brands get discovered in Google and inside AI answer engines, and we build the systems that keep them there.",
      "We work lean and senior. No account-manager telephone game, you talk to the people doing the work.",
    ],
    statsTitle: "By the numbers",
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "50+", label: "Projects delivered" },
      { value: "5", label: "Core services" },
      { value: "100%", label: "Senior team" },
    ],
    valuesTitle: "How we operate",
    values: [
      {
        title: "Outcomes over output",
        desc: "We measure success in traffic, leads and revenue, not deliverables shipped.",
      },
      {
        title: "AI as leverage",
        desc: "We use AI to do more, faster, always with a human editor accountable for quality.",
      },
      {
        title: "Radical clarity",
        desc: "Clear scope, clear estimates, clear reporting. You always know where things stand.",
      },
      {
        title: "Built to be found",
        desc: "Everything we make is engineered for discovery, by people and by AI.",
      },
    ],
    ctaTitle: "Want the senior team on your project?",
    ctaDesc: "Tell us what you're building. We'll tell you how we'd grow it.",
  },

  // ── BLOG ───────────────────────────────────────────────────
  blog: {
    eyebrow: "Blog",
    title: "Notes on AI, search & the modern web",
    desc: "Practical thinking on getting found and growing in the AI era.",
    allCategory: "All",
    categories: [
      { slug: "ai", name: "AI" },
      { slug: "seo", name: "SEO" },
      { slug: "website", name: "Website" },
    ],
    readTimeSuffix: "min read",
    byLabel: "By",
    relatedTitle: "Keep reading",
    posts: [
      {
        slug: "geo-vs-seo",
        category: "seo",
        title: "GEO vs SEO: optimizing for AI answer engines",
        excerpt:
          "Search is splitting into blue links and AI answers. Here's how to win both without doubling your work.",
        date: "2024-11-18",
        readTime: 7,
        author: "AILABS",
        body: [
          "For twenty years, SEO meant one thing: rank a page in Google's blue links. That world isn't gone, but it now shares the stage with AI answer engines like ChatGPT, Perplexity, Gemini and Google's AI Overviews.",
          "Generative Engine Optimization (GEO), sometimes called Answer Engine Optimization (AEO), is the practice of becoming the source an AI cites when it answers a question. The good news: most of the foundations overlap with strong technical SEO.",
          "Start with clarity and structure. AI models reward content that states answers plainly, uses clean headings, and backs claims with specifics. Add structured data, build topical authority, and make your brand a recognisable entity across the web.",
          "The brands winning today aren't choosing between SEO and GEO. They're building one content system that serves both, and compounding the advantage every month.",
        ],
      },
      {
        slug: "ai-content-pipeline",
        category: "ai",
        title: "Building a content pipeline that runs itself",
        excerpt:
          "How to turn one idea into a month of channel-ready content with AI, and keep quality high.",
        date: "2024-10-29",
        readTime: 6,
        author: "AILABS",
        body: [
          "Consistency is the hardest part of content. Most teams don't have a creativity problem, they have an operations problem. AI fixes the operations, if you design the workflow right.",
          "A good pipeline has four stages: research, draft, review, distribute. AI accelerates research and drafting; a human editor owns review; automation handles distribution and repurposing across channels.",
          "The trick is guardrails. A tuned brand voice, a clear editorial checklist, and approval gates keep the output on-brand. Without them, automation just scales mediocrity.",
          "Done well, one strong idea becomes a blog post, five social posts, an email and a short video, reviewed by a person, shipped on schedule, every week.",
        ],
      },
      {
        slug: "core-web-vitals-2025",
        category: "website",
        title: "Core Web Vitals in 2025: what still matters",
        excerpt:
          "A pragmatic guide to performance that actually affects rankings and conversions.",
        date: "2024-09-12",
        readTime: 5,
        author: "AILABS",
        body: [
          "Performance is no longer a nice-to-have. Slow sites lose rankings and revenue, and AI crawlers, like users, favour pages that load fast and render cleanly.",
          "Focus on the metrics that move: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Most real-world wins come from images, fonts and third-party scripts.",
          "A headless, modern stack (we build on Next.js) makes hitting these targets far easier, but architecture alone isn't enough. Discipline around assets and scripts is what keeps scores green over time.",
          "Treat performance as an ongoing budget, not a one-time fix, and it quietly improves everything downstream: SEO, conversions, and user trust.",
        ],
      },
      {
        slug: "shopify-conversion-flows",
        category: "website",
        title: "The Shopify flows that actually lift revenue",
        excerpt:
          "Where to focus on a Shopify build to get the highest return per hour.",
        date: "2024-08-20",
        readTime: 6,
        author: "AILABS",
        body: [
          "Not every Shopify project needs everything. The highest-ROI work usually lives in a handful of flows: the product page, the cart, the checkout, and post-purchase retention.",
          "We scope each flow separately so you can prioritise. A faster, clearer PDP and a frictionless checkout often pay for the whole project before the fancier features are even built.",
          "Upsells and subscriptions raise average order value and lifetime value, but only once the core buying flow is clean. Sequence matters.",
          "Scoping by flow keeps budgets honest and lets us ship value in weeks, not quarters.",
        ],
      },
      {
        slug: "prompting-for-marketers",
        category: "ai",
        title: "Prompting for marketers: from prompts to systems",
        excerpt:
          "Stop writing one-off prompts. Build reusable systems your whole team can run.",
        date: "2024-07-08",
        readTime: 5,
        author: "AILABS",
        body: [
          "Most marketers use AI like a vending machine: type a request, grab the output, move on. That works for one task, but it doesn't scale across a team.",
          "The leap is from prompts to systems: documented, reusable workflows with clear inputs, brand context and quality checks. That's what we teach in our training sessions.",
          "When a process is captured as a system, anyone on the team can run it consistently, and the output gets better every time you refine the template.",
          "Two focused hours is usually enough to take a marketing team from curious to genuinely productive with AI.",
        ],
      },
    ],
  },

  // ── CONTACT ────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about growth.",
    desc: "Tell us about your brand and your goals. We'll get back within one business day with a clear next step.",
    email: "contact@gmail.com",
    emailLabel: "Email us",
    form: {
      name: "Your name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Company name",
      service: "What do you need?",
      servicePlaceholder: "Select a service",
      message: "Project details",
      messagePlaceholder: "Tell us about your goals, timeline and budget…",
      submit: "Send message",
      success: "Thanks! We'll be in touch within one business day.",
    },
    infoTitle: "Other ways to reach us",
    responseNote: "We typically respond within one business day.",
  },

  // ── AUDIT POPUP ────────────────────────────────────────────
  audit: {
    title: "Get a free website audit",
    desc: "Share a few details and we'll send back a tailored audit within two business days.",
    name: "Full name",
    namePlaceholder: "Jane Doe",
    phone: "Phone",
    phonePlaceholder: "+84 ...",
    email: "Email",
    emailPlaceholder: "you@company.com",
    company: "Company",
    companyPlaceholder: "Company name",
    jobTitle: "Job title",
    jobTitlePlaceholder: "Head of Marketing",
    linkedin: "LinkedIn",
    linkedinPlaceholder: "https://linkedin.com/in/...",
    url: "Website URL",
    urlPlaceholder: "https://yoursite.com",
    service: "Service you're interested in",
    servicePlaceholder: "Select a service",
    note: "Note",
    notePlaceholder: "Anything you'd like us to look at?",
    submit: "Request my audit",
    success: "Thanks! Your audit request is in. We'll be in touch within two business days.",
  },

  // ── BOOK A CALL POPUP ──────────────────────────────────────
  booking: {
    title: "Book a call",
    desc: "Pick a day that works for you. We'll confirm the exact time by email.",
    dateLabel: "Choose a date",
    timeLabel: "Preferred time",
    selectedLabel: "Selected",
    confirm: "Request this slot",
    noDate: "Please pick a date first.",
    detailsDesc: "Almost there. Tell us who you are and we'll confirm by email.",
    name: "Full name",
    namePlaceholder: "Jane Doe",
    email: "Email",
    emailPlaceholder: "you@company.com",
    phone: "Phone",
    phonePlaceholder: "+84 ...",
    company: "Company",
    companyPlaceholder: "Company name",
    jobTitle: "Job title",
    jobTitlePlaceholder: "Head of Marketing",
    linkedin: "LinkedIn profile",
    linkedinPlaceholder: "https://linkedin.com/in/...",
    service: "Service of interest",
    servicePlaceholder: "Select a service",
    note: "Note",
    notePlaceholder: "What would you like to discuss?",
    back: "Back",
    book: "Confirm booking",
    success: "Thanks! We'll email you to confirm your call shortly.",
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    tagline:
      "An AI-native growth studio. We design websites, search strategies and content systems for brands that want to be found.",
    servicesTitle: "Services",
    companyTitle: "Company",
    getInTouch: "Get in touch",
    rights: "All rights reserved.",
    builtWith: "Designed & built by AILABS.",
  },
}

export type Dictionary = typeof en
