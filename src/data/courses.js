const courses = [
  {
    title: "Fundraising & Donor Proposal Writing",
    description:
      "Build compelling, fundable proposals and design donor-engagement strategies that strengthen an organisation's resource mobilisation.",
    level: "Intermediate",
    delivery: "Online + Coaching",
    icon: "handshake",
  },
  {
    title: "Financial Management, Bookkeeping & Accountability",
    description:
      "Core bookkeeping, budgeting and financial-reporting skills — including an introduction to Annual Financial Statements and GRAP/GAAP basics — for staff and board members responsible for organisational funds.",
    level: "Beginner",
    delivery: "Online",
    icon: "chart",
  },
  {
    title: "Governance, Leadership & Board Roles",
    description:
      "Understand board fiduciary duties, governance frameworks and leadership practice for non-profit and public-benefit organisations.",
    level: "Intermediate",
    delivery: "Webinar",
    icon: "compass",
  },
  {
    title: "Risk Management & Internal Controls",
    description:
      "Identify organisational risk, design internal controls and build practical mitigation plans that protect institutional integrity.",
    level: "Advanced",
    delivery: "Online",
    icon: "shieldCheck",
  },
  {
    title: "Auditing, Compliance & Reporting",
    description:
      "Prepare for internal audit processes, GRAP/GAAP-related compliance checks, and accurate statutory and donor reporting.",
    level: "Advanced",
    delivery: "Online + Coaching",
    icon: "clipboard",
  },
  {
    title: "Stakeholder Engagement & Communication",
    description:
      "Map stakeholders, design engagement strategies and communicate with clarity across funders, government and communities.",
    level: "Beginner",
    delivery: "Webinar",
    icon: "users",
  },
  {
    title: "Supply Chain & Procurement Management",
    description:
      "Practical procurement, vendor management and logistics principles for efficient, accountable operations.",
    level: "Intermediate",
    delivery: "Online",
    icon: "briefcase",
  },
  {
    title: "ICT & Digital Transformation",
    description:
      "Plan and adopt digital tools and systems that raise organisational efficiency and information governance.",
    level: "Intermediate",
    delivery: "Online",
    icon: "monitor",
  },
  {
    title: "Microsoft 365 Productivity Suite",
    description:
      "Word, Excel, PowerPoint, Teams, Outlook, OneDrive, Power BI, Power Query, Forms, Project, Visio, Access, Sway, Publisher and Power Automate — practical, job-ready skill.",
    level: "Beginner",
    delivery: "Online + Recorded Lessons",
    icon: "monitor",
  },
  {
    title: "Google Workspace Suite",
    description:
      "Gmail, Drive, Docs, Sheets, Slides, Forms, Meet, Classroom, Calendar, Keep and YouTube for everyday collaborative productivity.",
    level: "Beginner",
    delivery: "Online + Recorded Lessons",
    icon: "monitor",
  },
  {
    title: "Project & Programme Management",
    description:
      "Plan, schedule and deliver projects and programmes using practical tools for task tracking, milestones and reporting.",
    level: "Intermediate",
    delivery: "Online",
    icon: "target",
  },
  {
    title: "Human Resource & Performance Management",
    description:
      "People-management fundamentals: recruitment basics, performance management and staff development for growing organisations.",
    level: "Intermediate",
    delivery: "Webinar",
    icon: "users",
  },
  {
    title: "Operations Management & Service Delivery",
    description:
      "Streamline workflows, improve service-delivery quality and build operational dashboards that support decision-making.",
    level: "Intermediate",
    delivery: "Online",
    icon: "chart",
  },
  {
    title: "Monitoring & Evaluation",
    description:
      "Design M&E frameworks, track indicators and report on impact in a way that satisfies funders and improves practice.",
    level: "Advanced",
    delivery: "Online + Coaching",
    icon: "target",
  },
  {
    title: "Marketing, Customer Relations & Public Communication",
    description:
      "Practical marketing and public-communication skills for organisations building visibility, trust and stakeholder relationships.",
    level: "Beginner",
    delivery: "Webinar",
    icon: "sparkles",
  },
  {
    title: "AI Tools for Research, Reports & Productivity",
    description:
      "Apply AI tools responsibly to research, report writing, dashboard preparation and training design.",
    level: "Intermediate",
    delivery: "Online",
    icon: "sparkles",
  },
  {
    title: "Video Editing, Podcasting & Digital Content",
    description:
      "Screen recording, video editing and podcast production using practical tools such as Camtasia, Snagit, Audacity and OBS, for organisations building their own media presence.",
    level: "Beginner",
    delivery: "Recorded Lessons",
    icon: "video",
  },
  {
    title: "Church Administration & Ministry Governance",
    description:
      "Governance, financial stewardship, church/NPO registration and administrative systems — plus newsletter, minute-taking and media-ministry skills for churches and faith-based organisations.",
    level: "Beginner",
    delivery: "Online + Coaching",
    icon: "church",
  },
  {
    title: "Hospital Governance & Management",
    description:
      "Governance structures, quality assurance, patient satisfaction, service-delivery optimisation and strategic-planning skills for hospital and health-facility leadership teams.",
    level: "Advanced",
    delivery: "Webinar + Coaching",
    icon: "hospital",
  },
  {
    title: "Event Management & Coordination",
    description:
      "Plan and coordinate conferences, workshops, summits and webinars — registration, logistics, stakeholder coordination and post-event evaluation.",
    level: "Beginner",
    delivery: "Webinar",
    icon: "target",
  },
];

export default courses;
