import {
  IconBrain,
  IconBriefcase,
  IconDatabase,
  IconLock,
  IconRocket,
  IconShieldCheck,
  IconSparkles,
  IconTargetArrow,
} from "@tabler/icons-react";

export const modules = [
  {
    number: "01",
    title: "GRC Foundations",
    description:
      "Understand governance, risk, compliance, controls, policies, standards and the role of GRC in modern organizations.",
    icon: IconShieldCheck,
    color: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    title: "Risk Management",
    description:
      "Learn risk identification, risk scoring, treatment planning, risk registers and enterprise risk reporting.",
    icon: IconTargetArrow,
    color: "from-blue-400 to-indigo-500",
  },
  {
    number: "03",
    title: "Cybersecurity Governance",
    description:
      "Connect business goals with cybersecurity controls, security policies, governance models and executive reporting.",
    icon: IconLock,
    color: "from-violet-400 to-purple-600",
  },
  {
    number: "04",
    title: "Compliance Frameworks",
    description:
      "Work with practical control mapping across ISO 27001, NIST CSF, SOC 2, GDPR concepts and internal audit workflows.",
    icon: IconDatabase,
    color: "from-indigo-400 to-blue-600",
  },
  {
    number: "05",
    title: "AI Governance",
    description:
      "Understand AI risks, model accountability, privacy, bias, explainability, human oversight and responsible AI controls.",
    icon: IconBrain,
    color: "from-fuchsia-400 to-violet-600",
  },
  {
    number: "06",
    title: "AI Risk Assessment",
    description:
      "Build AI risk registers, control matrices, assessment workflows and monitoring processes for AI-powered systems.",
    icon: IconSparkles,
    color: "from-cyan-400 to-teal-500",
  },
  {
    number: "07",
    title: "Audit and Evidence",
    description:
      "Prepare evidence collections, audit trails, compliance dashboards, remediation plans and management reports.",
    icon: IconBriefcase,
    color: "from-amber-400 to-orange-600",
  },
  {
    number: "08",
    title: "Career Execution",
    description:
      "Build your portfolio, improve your resume, practice interviews and learn how to communicate GRC and AI projects.",
    icon: IconRocket,
    color: "from-emerald-400 to-cyan-600",
  },
];

export const handsOnProjects = [
  {
    title: "Enterprise Risk Register",
    description:
      "Create a complete risk register with likelihood, impact, risk owners, controls and treatment plans.",
    tools: "Excel, Risk Matrix, GRC Templates",
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "ISO Control Mapping",
    description:
      "Map business controls against ISO 27001 and NIST-style security requirements.",
    tools: "ISO Concepts, NIST CSF, Control Matrix",
    color: "from-violet-400 to-indigo-600",
  },
  {
    title: "AI Governance Assessment",
    description:
      "Assess an AI use case for privacy, bias, explainability, security and accountability risks.",
    tools: "AI Risk Register, Governance Framework",
    color: "from-fuchsia-400 to-purple-600",
  },
  {
    title: "Compliance Evidence Room",
    description:
      "Build an evidence collection system with audit trails, owners, deadlines and remediation status.",
    tools: "Documentation, Audit Workflow, Dashboard",
    color: "from-emerald-400 to-cyan-600",
  },
  {
    title: "Third-Party Risk Review",
    description:
      "Evaluate vendors and suppliers using security questionnaires, risk scoring and review workflows.",
    tools: "Vendor Assessment, Risk Scoring, Reporting",
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "AI Policy Pack",
    description:
      "Create a practical AI acceptable-use policy, data policy and responsible AI governance checklist.",
    tools: "AI Policy, Privacy, Governance",
    color: "from-blue-400 to-cyan-600",
  },
];

export const certifications = [
  {
    title: "Career Tech Global GRC Certificate",
    type: "Program Certificate",
    description:
      "Awarded after completing the program requirements, assignments, portfolio work and capstone assessment.",
    icon: IconSparkles,
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "Microsoft SC-900 Preparation",
    type: "Microsoft Fundamentals Track",
    description:
      "Preparation for Microsoft Security, Compliance and Identity fundamentals. Official exam certification is earned separately by passing Microsoftâ€™s exam.",
    icon: IconShieldCheck,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Microsoft SC-300 Preparation",
    type: "Identity and Access Track",
    description:
      "Preparation for identity, access management, authentication and access governance concepts.",
    icon: IconLock,
    color: "from-violet-400 to-fuchsia-600",
  },
  {
    title: "Microsoft SC-401 Preparation",
    type: "Information Protection Track",
    description:
      "Preparation for information protection, compliance controls, sensitive data and Microsoft Purview concepts.",
    icon: IconDatabase,
    color: "from-emerald-400 to-cyan-600",
  },
];

export const careerRoles = [
  "GRC Analyst",
  "Risk Analyst",
  "Compliance Analyst",
  "Cybersecurity Governance Analyst",
  "AI Governance Associate",
  "Third-Party Risk Analyst",
  "Security Compliance Coordinator",
  "Technology Risk Consultant",
];

export const faqs = [
  {
    question: "Is this a one-to-one program?",
    answer:
      "Yes. The program is designed around personalized guidance, mentor feedback, practical reviews and an individual learning roadmap.",
  },
  {
    question: "What is the total program fee?",
    answer:
      "The total program investment is $6,999. A $999 registration fee is required to begin the onboarding and seat-reservation process.",
  },
  {
    question: "Will I receive Microsoft certification directly?",
    answer:
      "The program includes preparation tracks and practical learning aligned with selected Microsoft security and compliance pathways. Official Microsoft certification requires passing the relevant Microsoft exam separately.",
  },
  {
    question: "What will I build during the program?",
    answer:
      "You will build risk registers, control matrices, AI governance assessments, compliance evidence systems, vendor risk reviews, policies and a final capstone portfolio.",
  },
];
