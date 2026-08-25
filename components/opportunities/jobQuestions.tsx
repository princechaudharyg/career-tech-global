export type JobCategory =
  | "AI & Data"
  | "Cyber Security"
  | "Engineering"
  | "GRC & AI";

export type JobTrack =
  | "data-analytics"
  | "ai-data-science"
  | "cyber-security"
  | "ethical-hacking"
  | "grc-compliance"
  | "cloud-computing"
  | "frontend-development"
  | "full-stack-development";

export type JobQuestion = {
  id: string;
  skill: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type CoursePath = {
  title: string;
  duration: string;
  level: string;
  description: string;
  modules: string[];
  projects: string[];
  careerRoles: string[];
};

const q = (
  id: string,
  skill: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): JobQuestion => ({
  id,
  skill,
  question,
  options,
  correctIndex,
  explanation,
});

export function getJobTrack(
  role: string,
  category: JobCategory,
): JobTrack {
  const text = `${role} ${category}`.toLowerCase();

  if (
    text.includes("data analyst") ||
    text.includes("business analyst") ||
    text.includes("analytics")
  ) {
    return "data-analytics";
  }

  if (
    text.includes("data scientist") ||
    text.includes("machine learning") ||
    text.includes("ai engineer") ||
    text.includes("generative ai") ||
    text.includes("nlp")
  ) {
    return "ai-data-science";
  }

  if (
    text.includes("penetration") ||
    text.includes("ethical hacking") ||
    text.includes("ethical hacker") ||
    text.includes("pentest")
  ) {
    return "ethical-hacking";
  }

  if (
    text.includes("grc") ||
    text.includes("governance") ||
    text.includes("compliance") ||
    text.includes("risk") ||
    text.includes("audit")
  ) {
    return "grc-compliance";
  }

  if (
    text.includes("cloud") ||
    text.includes("devops") ||
    text.includes("aws") ||
    text.includes("azure")
  ) {
    return "cloud-computing";
  }

  if (
    text.includes("frontend") ||
    text.includes("front end") ||
    text.includes("react") ||
    text.includes("ui developer")
  ) {
    return "frontend-development";
  }

  if (
    text.includes("cyber") ||
    text.includes("security") ||
    text.includes("soc") ||
    text.includes("threat")
  ) {
    return "cyber-security";
  }

  return "full-stack-development";
}

export const coursePaths: Record<JobTrack, CoursePath> = {
  "data-analytics": {
    title: "Data Analytics Career Program",
    duration: "12 weeks",
    level: "Beginner to Job Ready",
    description:
      "Learn practical data analysis, dashboards, SQL reporting and portfolio building for analyst roles.",
    modules: [
      "Excel and business reporting",
      "SQL and database querying",
      "Power BI dashboard development",
      "Data cleaning and data visualization",
      "Statistics for business decisions",
    ],
    projects: [
      "Sales performance dashboard",
      "Customer retention analysis",
      "SQL business reporting project",
    ],
    careerRoles: [
      "Data Analyst",
      "Business Analyst",
      "Reporting Analyst",
    ],
  },

  "ai-data-science": {
    title: "AI & Data Science Career Program",
    duration: "16 weeks",
    level: "Intermediate to Job Ready",
    description:
      "Build AI, machine learning and data science skills through practical Python projects.",
    modules: [
      "Python programming and data handling",
      "Statistics and exploratory data analysis",
      "Machine learning algorithms",
      "Deep Learning and Generative AI",
      "Model deployment and MLOps basics",
    ],
    projects: [
      "Machine learning prediction model",
      "Data science dashboard",
      "Generative AI RAG application",
    ],
    careerRoles: [
      "Data Scientist",
      "Machine Learning Engineer",
      "AI Engineer",
    ],
  },

  "cyber-security": {
    title: "Cyber Security Career Program",
    duration: "14 weeks",
    level: "Beginner to Job Ready",
    description:
      "Build practical defensive security skills for SOC, security analyst and threat intelligence roles.",
    modules: [
      "Networking fundamentals",
      "Linux and system security",
      "SOC and SIEM operations",
      "Incident response and threat hunting",
      "Cloud security fundamentals",
    ],
    projects: [
      "SIEM alert investigation",
      "Incident response case study",
      "Threat intelligence report",
    ],
    careerRoles: [
      "Cyber Security Analyst",
      "SOC Analyst",
      "Threat Intelligence Analyst",
    ],
  },

  "ethical-hacking": {
    title: "Ethical Hacking Career Program",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    description:
      "Learn authorized penetration testing, web security testing and vulnerability reporting.",
    modules: [
      "Linux and networking foundations",
      "Reconnaissance and OSINT",
      "Web application security",
      "OWASP Top 10 vulnerabilities",
      "Penetration testing reporting",
    ],
    projects: [
      "Web application vulnerability assessment",
      "Network reconnaissance lab",
      "Professional penetration test report",
    ],
    careerRoles: [
      "Penetration Tester",
      "Ethical Hacker",
      "Vulnerability Analyst",
    ],
  },

  "grc-compliance": {
    title: "GRC & AI Governance Program",
    duration: "10 weeks",
    level: "Beginner to Job Ready",
    description:
      "Learn governance, risk, compliance, audit documentation and responsible AI governance.",
    modules: [
      "GRC foundations",
      "Risk assessment and risk registers",
      "ISO 27001 and NIST frameworks",
      "Policy, controls and audit evidence",
      "AI governance and responsible AI",
    ],
    projects: [
      "Risk register creation",
      "ISO 27001 control mapping",
      "AI governance case study",
    ],
    careerRoles: [
      "GRC Analyst",
      "Risk Analyst",
      "Compliance Analyst",
    ],
  },

  "cloud-computing": {
    title: "Cloud Computing & DevOps Program",
    duration: "14 weeks",
    level: "Beginner to Job Ready",
    description:
      "Learn cloud infrastructure, IAM, containers, CI/CD and deployment skills.",
    modules: [
      "Cloud fundamentals and architecture",
      "AWS or Azure core services",
      "Networking, IAM and cloud security",
      "Docker and Kubernetes basics",
      "Terraform and CI/CD pipelines",
    ],
    projects: [
      "Cloud-hosted application",
      "Docker deployment project",
      "Infrastructure-as-code project",
    ],
    careerRoles: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Cloud Security Engineer",
    ],
  },

  "frontend-development": {
    title: "Frontend Development Program",
    duration: "12 weeks",
    level: "Beginner to Job Ready",
    description:
      "Learn modern frontend development with HTML, CSS, JavaScript, React and Next.js.",
    modules: [
      "HTML, CSS and responsive design",
      "Modern JavaScript",
      "React and component architecture",
      "Next.js and API integration",
      "Testing, Git and deployment",
    ],
    projects: [
      "Responsive portfolio website",
      "React dashboard application",
      "Next.js production website",
    ],
    careerRoles: [
      "Frontend Developer",
      "React Developer",
      "UI Developer",
    ],
  },

  "full-stack-development": {
    title: "Full-Stack Development Program",
    duration: "16 weeks",
    level: "Beginner to Job Ready",
    description:
      "Build full-stack applications using frontend, backend, APIs, databases and deployment tools.",
    modules: [
      "JavaScript and TypeScript",
      "React and Next.js",
      "Node.js and REST APIs",
      "PostgreSQL and database design",
      "Authentication, testing and deployment",
    ],
    projects: [
      "Full-stack job portal",
      "Authentication and dashboard project",
      "Production API and database project",
    ],
    careerRoles: [
      "Full Stack Developer",
      "Backend Developer",
      "Software Engineer",
    ],
  },
};

export const questionBank: Record<JobTrack, JobQuestion[]> = {
  "data-analytics": [
    q(
      "da-1",
      "SQL",
      "Which SQL clause is used to group rows that have the same values?",
      ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
      1,
      "GROUP BY combines rows with the same value so you can calculate totals, counts or averages for each group.",
    ),
    q(
      "da-2",
      "Data Cleaning",
      "What should you do first when a dataset contains missing values?",
      [
        "Delete the complete dataset",
        "Understand why values are missing and assess their impact",
        "Replace every missing value with zero",
        "Ignore the issue completely",
      ],
      1,
      "First inspect missing values and decide whether to remove, fill or flag them based on business context.",
    ),
    q(
      "da-3",
      "Power BI",
      "Why are relationships created between tables in Power BI?",
      [
        "To make the dashboard more colorful",
        "To connect related data for accurate analysis",
        "To delete duplicate tables automatically",
        "To avoid using measures",
      ],
      1,
      "Relationships let Power BI combine data from connected tables correctly in reports and measures.",
    ),
    q(
      "da-4",
      "Statistics",
      "Which measure is generally less affected by extreme outliers?",
      ["Mean", "Median", "Range", "Variance"],
      1,
      "The median is the middle value, so extreme high or low values affect it less than the mean.",
    ),
    q(
      "da-5",
      "Business Analysis",
      "A dashboard KPI should primarily help a stakeholder do what?",
      [
        "Add more charts",
        "Make a business decision using a measurable outcome",
        "Increase the number of tables",
        "Hide negative performance",
      ],
      1,
      "A KPI should communicate an important measurable outcome that supports decisions.",
    ),
  ],

  "ai-data-science": [
    q(
      "ai-1",
      "Machine Learning",
      "Why do we use a test dataset in machine learning?",
      [
        "To train the model faster",
        "To evaluate how well the model works on unseen data",
        "To remove all features",
        "To increase the training dataset size",
      ],
      1,
      "A test set measures whether a trained model can generalize to new, unseen examples.",
    ),
    q(
      "ai-2",
      "Model Evaluation",
      "Which issue happens when a model performs very well on training data but poorly on new data?",
      [
        "Underfitting",
        "Overfitting",
        "Normalization",
        "Clustering",
      ],
      1,
      "Overfitting means a model memorizes training patterns instead of learning general patterns.",
    ),
    q(
      "ai-3",
      "Python",
      "Which Python library is commonly used for working with tabular data?",
      ["Pandas", "Flask", "PyGame", "Selenium"],
      0,
      "Pandas provides DataFrames and tools for cleaning, filtering and analyzing tabular data.",
    ),
    q(
      "ai-4",
      "Generative AI",
      "What is the main purpose of RAG in a Generative AI application?",
      [
        "To make the model smaller",
        "To retrieve relevant knowledge before generating an answer",
        "To remove user questions",
        "To replace all databases",
      ],
      1,
      "Retrieval-Augmented Generation retrieves relevant documents and uses them as context for answers.",
    ),
    q(
      "ai-5",
      "Statistics",
      "What does a feature mean in a machine learning dataset?",
      [
        "The value the model must predict",
        "An input variable used by the model",
        "A deployment server",
        "A chart title",
      ],
      1,
      "Features are input variables such as age, price or category that help a model predict an output.",
    ),
  ],

  "cyber-security": [
    q(
      "cs-1",
      "Cyber Security Fundamentals",
      "Which three principles make up the CIA triad?",
      [
        "Control, Investigation, Access",
        "Confidentiality, Integrity, Availability",
        "Cloud, Identity, Authentication",
        "Code, Internet, Analysis",
      ],
      1,
      "The CIA triad is Confidentiality, Integrity and Availability.",
    ),
    q(
      "cs-2",
      "SIEM",
      "What is the main purpose of a SIEM platform?",
      [
        "To design websites",
        "To collect, correlate and investigate security logs",
        "To replace all firewalls",
        "To create user passwords",
      ],
      1,
      "SIEM tools centralize logs and help analysts detect and investigate suspicious activity.",
    ),
    q(
      "cs-3",
      "Incident Response",
      "What is an important early action after confirming a malware incident?",
      [
        "Publicly share all passwords",
        "Contain the affected system to limit spread",
        "Delete every company log",
        "Ignore the alert",
      ],
      1,
      "Containment limits damage while the security team investigates and removes the threat.",
    ),
    q(
      "cs-4",
      "Access Control",
      "What does the principle of least privilege mean?",
      [
        "Everyone receives admin access",
        "Users receive only the access needed for their work",
        "No one can access systems",
        "Passwords are optional",
      ],
      1,
      "Least privilege reduces risk by limiting access to what each user actually needs.",
    ),
    q(
      "cs-5",
      "Phishing",
      "Which sign most strongly suggests a phishing email?",
      [
        "A known sender using the normal company domain",
        "An urgent request with a suspicious look-alike link",
        "A scheduled internal meeting invite",
        "A password manager notification",
      ],
      1,
      "Urgency, unexpected requests and suspicious domains or links are common phishing indicators.",
    ),
  ],

  "ethical-hacking": [
    q(
      "eh-1",
      "Ethics & Authorization",
      "Before beginning a penetration test, what is required?",
      [
        "A public social media post",
        "Written authorization and a defined scope",
        "An anonymous email",
        "A new antivirus tool",
      ],
      1,
      "Ethical hacking must always have written permission and a clearly defined testing scope.",
    ),
    q(
      "eh-2",
      "Reconnaissance",
      "What is Nmap commonly used for during an authorized assessment?",
      [
        "Creating office documents",
        "Discovering hosts, ports and running services",
        "Encrypting all files",
        "Designing databases",
      ],
      1,
      "Nmap helps identify live systems, open ports and services during authorized reconnaissance.",
    ),
    q(
      "eh-3",
      "Web Security",
      "What is a strong defense against SQL injection?",
      [
        "Using prepared statements or parameterized queries",
        "Putting SQL in HTML comments",
        "Using longer page titles",
        "Removing all user accounts",
      ],
      0,
      "Parameterized queries separate user input from SQL commands and greatly reduce SQL injection risk.",
    ),
    q(
      "eh-4",
      "OWASP",
      "Which issue occurs when a user can access another user's data by changing an ID in a URL?",
      [
        "Broken Access Control",
        "Physical security",
        "Email forwarding",
        "Load balancing",
      ],
      0,
      "Broken Access Control can expose data when authorization checks are missing or weak.",
    ),
    q(
      "eh-5",
      "Reporting",
      "What makes a vulnerability report useful to an organization?",
      [
        "Only listing tool names",
        "Clear evidence, impact, severity and remediation advice",
        "Using complex words without proof",
        "Avoiding recommendations",
      ],
      1,
      "A useful report explains the finding, proves it, shows the business impact and gives remediation steps.",
    ),
  ],

  "grc-compliance": [
    q(
      "grc-1",
      "Risk Management",
      "A common way to evaluate risk is by considering which two factors?",
      [
        "Likelihood and impact",
        "Color and font size",
        "Office location and salary",
        "Browser and keyboard",
      ],
      0,
      "Risk is commonly assessed using the likelihood of an event and its potential impact.",
    ),
    q(
      "grc-2",
      "ISO 27001",
      "What is the main focus of ISO 27001?",
      [
        "Website visual design",
        "Information Security Management Systems",
        "Social media marketing",
        "Mobile app development",
      ],
      1,
      "ISO 27001 defines requirements for an Information Security Management System, also called an ISMS.",
    ),
    q(
      "grc-3",
      "Compliance Controls",
      "What is a security control?",
      [
        "A measure that reduces risk",
        "A programming language",
        "A job title",
        "A database table",
      ],
      0,
      "Controls are safeguards such as policies, encryption, reviews or technical tools that reduce risk.",
    ),
    q(
      "grc-4",
      "Risk Register",
      "What information should a risk register include?",
      [
        "Only employee names",
        "Risk description, owner, impact, likelihood and treatment plan",
        "Only the company logo",
        "Only the date it was created",
      ],
      1,
      "A risk register tracks each risk, who owns it, its severity and the plan to manage it.",
    ),
    q(
      "grc-5",
      "AI Governance",
      "Why is AI governance important?",
      [
        "To prevent all AI use",
        "To manage AI risks, accountability and responsible use",
        "To remove all data protection rules",
        "To avoid documenting AI systems",
      ],
      1,
      "AI governance helps organizations manage fairness, privacy, transparency, safety and accountability risks.",
    ),
  ],

  "cloud-computing": [
    q(
      "cloud-1",
      "IAM",
      "What is the best practice when assigning cloud permissions?",
      [
        "Give every user administrator access",
        "Apply least privilege access",
        "Share one root password with everyone",
        "Disable authentication",
      ],
      1,
      "Least privilege limits users and services to only the permissions required for their tasks.",
    ),
    q(
      "cloud-2",
      "Cloud Networking",
      "What is a VPC in cloud computing?",
      [
        "A private virtual network environment",
        "A type of spreadsheet",
        "An antivirus product",
        "A frontend framework",
      ],
      0,
      "A Virtual Private Cloud is an isolated virtual network where cloud resources can run securely.",
    ),
    q(
      "cloud-3",
      "Containers",
      "What is Docker mainly used for?",
      [
        "Creating email accounts",
        "Packaging applications and dependencies into containers",
        "Replacing all databases",
        "Designing UI mockups",
      ],
      1,
      "Docker packages an application with its dependencies so it can run consistently across environments.",
    ),
    q(
      "cloud-4",
      "DevOps",
      "What does CI/CD help teams do?",
      [
        "Avoid writing tests",
        "Automate building, testing and deploying software",
        "Manually copy every file to production",
        "Remove version control",
      ],
      1,
      "CI/CD automates build, test and deployment workflows to deliver software more reliably.",
    ),
    q(
      "cloud-5",
      "Infrastructure as Code",
      "What is Terraform commonly used for?",
      [
        "Writing mobile games",
        "Provisioning infrastructure through code",
        "Creating spreadsheets",
        "Editing images",
      ],
      1,
      "Terraform lets teams define and provision cloud infrastructure using version-controlled configuration files.",
    ),
  ],

  "frontend-development": [
    q(
      "fe-1",
      "React",
      "What is React state used for?",
      [
        "Storing data that can change and update the UI",
        "Changing a website domain",
        "Creating SQL tables only",
        "Replacing CSS",
      ],
      0,
      "React state stores changing data and triggers a UI update when that data changes.",
    ),
    q(
      "fe-2",
      "HTML",
      "Why should semantic HTML elements be used?",
      [
        "They make every site slower",
        "They improve structure, accessibility and meaning",
        "They remove the need for CSS",
        "They prevent all bugs",
      ],
      1,
      "Semantic elements such as header, main, nav and button improve accessibility and document structure.",
    ),
    q(
      "fe-3",
      "JavaScript",
      "What does the array method map() return?",
      [
        "One boolean value",
        "A new array created from each original item",
        "Only the first item",
        "A database connection",
      ],
      1,
      "map() transforms each element and returns a new array, which is common when rendering React lists.",
    ),
    q(
      "fe-4",
      "Responsive Design",
      "Which CSS approach is commonly used to adapt layouts for smaller screens?",
      [
        "Media queries",
        "SQL joins",
        "Git branches",
        "API routes",
      ],
      0,
      "Media queries apply CSS rules according to screen size, helping layouts work across devices.",
    ),
    q(
      "fe-5",
      "Next.js",
      "Why is Next.js useful for React applications?",
      [
        "It removes the need for components",
        "It provides routing, rendering options and production tooling",
        "It only works without JavaScript",
        "It replaces all APIs",
      ],
      1,
      "Next.js adds routing, server rendering, optimization and other production features around React.",
    ),
  ],

  "full-stack-development": [
    q(
      "fs-1",
      "APIs",
      "Which HTTP method is typically used to create a new resource?",
      ["GET", "POST", "DELETE", "HEAD"],
      1,
      "POST is commonly used to create a new resource through a REST API.",
    ),
    q(
      "fs-2",
      "Databases",
      "Why should parameterized database queries be used?",
      [
        "To make SQL injection harder",
        "To remove all tables",
        "To avoid authentication",
        "To stop using APIs",
      ],
      0,
      "Parameterized queries separate values from SQL commands, protecting against SQL injection.",
    ),
    q(
      "fs-3",
      "Authentication",
      "What is the purpose of an access token or JWT?",
      [
        "To style a webpage",
        "To identify and authorize a user request",
        "To replace a database",
        "To create a CSS animation",
      ],
      1,
      "A token carries verified identity or authorization information so an application can protect routes and APIs.",
    ),
    q(
      "fs-4",
      "Git",
      "Why is Git important in a software development team?",
      [
        "It tracks changes and supports collaboration",
        "It automatically writes all application code",
        "It removes the need for testing",
        "It hosts every database by default",
      ],
      0,
      "Git tracks code history, supports branches and makes collaboration safer.",
    ),
    q(
      "fs-5",
      "Testing",
      "What is the goal of automated testing?",
      [
        "To make bugs invisible",
        "To verify expected behavior and catch regressions",
        "To avoid deploying software",
        "To remove documentation",
      ],
      1,
      "Tests verify important behavior and help prevent old features from breaking after changes.",
    ),
  ],
};