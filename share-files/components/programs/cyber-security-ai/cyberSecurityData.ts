import {
  IconBrain,
  IconBriefcase,
  IconChartBar,
  IconCloudComputing,
  IconCode,
  IconDatabase,
  IconFileCertificate,
  IconLock,
  IconNetwork,
  IconShield,
  IconTarget,
  IconTerminal2,
} from "@tabler/icons-react";

export const modules = [
  {
    number: "01",
    title: "Networking and Linux",
    duration: "Weeks 1â€“3",
    icon: IconNetwork,
    description:
      "Build strong networking fundamentals, understand Linux environments and practice command-line operations used in security.",
    skills: ["TCP/IP", "Ports", "Linux", "Bash"],
    tools: ["Linux", "Wireshark", "Bash", "VirtualBox"],
    project:
      "Build a home security lab and analyze network traffic.",
    outcome:
      "Understand how systems communicate and how security teams investigate network activity.",
  },
  {
    number: "02",
    title: "Cyber Security Fundamentals",
    duration: "Weeks 4â€“5",
    icon: IconShield,
    description:
      "Learn the core principles used to protect systems, identities, applications and sensitive information.",
    skills: ["CIA Triad", "Threats", "Vulnerabilities", "Risk"],
    tools: ["Linux", "Nmap", "Security Documentation"],
    project:
      "Prepare a security assessment for a small business environment.",
    outcome:
      "Identify security risks and recommend practical security controls.",
  },
  {
    number: "03",
    title: "Ethical Hacking",
    duration: "Weeks 6â€“9",
    icon: IconLock,
    description:
      "Practice authorized security testing for networks and web applications in controlled lab environments.",
    skills: ["Recon", "Scanning", "OWASP", "Reporting"],
    tools: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit"],
    project:
      "Perform an authorized web application security assessment.",
    outcome:
      "Document vulnerabilities with evidence, impact and remediation steps.",
  },
  {
    number: "04",
    title: "SOC and SIEM Operations",
    duration: "Weeks 10â€“13",
    icon: IconChartBar,
    description:
      "Learn how Security Operations Center teams monitor systems, investigate alerts and detect suspicious behavior.",
    skills: ["Logs", "Alerts", "SIEM", "Detection"],
    tools: ["Splunk", "Microsoft Sentinel", "Elastic", "Sysmon"],
    project:
      "Investigate suspicious login activity and create an incident report.",
    outcome:
      "Analyze security events and explain an investigation clearly.",
  },
  {
    number: "05",
    title: "Incident Response and Threat Hunting",
    duration: "Weeks 14â€“16",
    icon: IconTarget,
    description:
      "Understand how security teams respond to incidents and search for hidden indicators of compromise.",
    skills: ["Containment", "Evidence", "IOC", "Threat Hunting"],
    tools: ["MITRE ATT&CK", "Kibana", "Velociraptor", "SIEM"],
    project:
      "Complete an incident-response case from alert to final report.",
    outcome:
      "Follow a structured response process during a security incident.",
  },
  {
    number: "06",
    title: "Cloud Security",
    duration: "Weeks 17â€“19",
    icon: IconCloudComputing,
    description:
      "Learn how identities, permissions, cloud resources and logs are protected in modern environments.",
    skills: ["IAM", "Least Privilege", "Cloud Network", "Logging"],
    tools: ["AWS", "Azure", "IAM", "CloudTrail"],
    project:
      "Design a secure cloud environment with identity controls and logging.",
    outcome:
      "Understand the security responsibilities involved in cloud environments.",
  },
  {
    number: "07",
    title: "Application and API Security",
    duration: "Weeks 20â€“21",
    icon: IconCode,
    description:
      "Identify common security issues in modern web applications, backend systems and REST APIs.",
    skills: ["API Auth", "Validation", "Access Control", "Injection"],
    tools: ["Burp Suite", "Postman", "OWASP", "Python"],
    project:
      "Test and secure a vulnerable REST API.",
    outcome:
      "Find application-security weaknesses and recommend fixes.",
  },
  {
    number: "08",
    title: "Security Automation with Python",
    duration: "Weeks 22â€“23",
    icon: IconTerminal2,
    description:
      "Use Python, APIs and automation workflows to make security operations faster and more reliable.",
    skills: ["Python", "APIs", "Log Parsing", "IOC Enrichment"],
    tools: ["Python", "Requests", "Pandas", "REST APIs"],
    project:
      "Build a Python tool that enriches suspicious IP and domain indicators.",
    outcome:
      "Automate repetitive security-analysis tasks.",
  },
  {
    number: "09",
    title: "AI for Cyber Security",
    duration: "Weeks 24â€“25",
    icon: IconBrain,
    description:
      "Understand how AI supports alert prioritization, anomaly detection, threat analysis and security operations.",
    skills: ["Anomaly Detection", "ML", "Alert Triage", "Threat Analysis"],
    tools: ["Python", "Scikit-learn", "Jupyter", "LLM APIs"],
    project:
      "Create an AI-assisted security-alert prioritization prototype.",
    outcome:
      "Explain practical AI use cases in security and identify AI limitations.",
  },
  {
    number: "10",
    title: "Generative AI Security",
    duration: "Weeks 26â€“27",
    icon: IconBrain,
    description:
      "Learn how to test and protect LLM-powered applications, RAG systems and AI workflows.",
    skills: ["LLMs", "RAG", "Prompt Injection", "Data Leakage"],
    tools: ["LLM APIs", "LangChain", "Python", "Vector Databases"],
    project:
      "Perform a security review of an AI knowledge assistant.",
    outcome:
      "Identify common risks in Generative AI applications.",
  },
  {
    number: "11",
    title: "Governance, Risk and Compliance",
    duration: "Weeks 28â€“29",
    icon: IconFileCertificate,
    description:
      "Connect technical security work with organizational risk, policies, controls and compliance.",
    skills: ["NIST", "ISO 27001", "Risk Register", "Controls"],
    tools: ["NIST", "ISO 27001", "GRC Templates", "Risk Registers"],
    project:
      "Create a security-risk register and control-mapping report.",
    outcome:
      "Communicate technical risks to business and compliance stakeholders.",
  },
  {
    number: "12",
    title: "Capstone and Career Launch",
    duration: "Week 30",
    icon: IconBriefcase,
    description:
      "Bring your technical, analytical and communication skills together in one final security project.",
    skills: ["Capstone", "Architecture", "Portfolio", "Interviews"],
    tools: ["GitHub", "Notion", "Markdown", "Security Reports"],
    project:
      "Present an end-to-end Cyber Security and AI capstone.",
    outcome:
      "Finish with a portfolio project you can confidently discuss in interviews.",
  },
];

export const industryTools = [
  "Kali Linux",
  "Wireshark",
  "Burp Suite",
  "Metasploit",
  "Splunk",
  "Microsoft Sentinel",
  "AWS",
  "Azure",
  "Python",
  "MITRE ATT&CK",
  "Nmap",
  "Docker",
  "CrowdStrike",
  "Microsoft Defender",
  "Elastic",
  "Wazuh",
  "GitHub",
  "Terraform",
];

export const projects = [
  {
    title: "Ethical Hacking Assessment",
    description:
      "Perform authorized reconnaissance, vulnerability discovery and professional security reporting.",
    icon: IconShield,
    color: "from-red-500 to-orange-600",
    tags: ["Kali Linux", "Burp Suite", "OWASP"],
  },
  {
    title: "SOC Alert Investigation",
    description:
      "Investigate suspicious login activity, analyze logs and prepare an incident report.",
    icon: IconChartBar,
    color: "from-cyan-500 to-blue-600",
    tags: ["SIEM", "Logs", "Incident Response"],
  },
  {
    title: "Cloud Security Audit",
    description:
      "Review cloud identities, permissions, network boundaries and activity logging.",
    icon: IconCloudComputing,
    color: "from-blue-500 to-indigo-600",
    tags: ["AWS", "IAM", "CloudTrail"],
  },
  {
    title: "AI Threat Detection",
    description:
      "Build an AI-assisted prototype for prioritizing suspicious security events.",
    icon: IconBrain,
    color: "from-violet-500 to-fuchsia-600",
    tags: ["Python", "ML", "Security Analytics"],
  },
  {
    title: "RAG Security Review",
    description:
      "Test an AI knowledge assistant for prompt injection, data leakage and access-control risks.",
    icon: IconDatabase,
    color: "from-emerald-500 to-cyan-600",
    tags: ["LLMs", "RAG", "AI Security"],
  },
  {
    title: "GRC Risk Register",
    description:
      "Map security risks to controls and prepare a business-ready risk report.",
    icon: IconFileCertificate,
    color: "from-amber-500 to-red-600",
    tags: ["NIST", "Risk", "Compliance"],
  },
];

export const faqs = [
  {
    question: "Is Ethical Hacking included?",
    answer:
      "Yes. Ethical Hacking is a dedicated four-week module covering reconnaissance, scanning, web security, OWASP concepts and professional reporting in authorized lab environments.",
  },
  {
    question: "Is this program beginner-friendly?",
    answer:
      "Yes. The program starts with networking, Linux and Cyber Security fundamentals before moving into advanced security and AI topics.",
  },
  {
    question: "Will I learn SOC and SIEM tools?",
    answer:
      "Yes. The program covers logs, alerts, event correlation, detection workflows, investigation and incident documentation.",
  },
  {
    question: "Will I learn AI Security?",
    answer:
      "Yes. You will learn AI-assisted detection, anomaly analysis, LLM security, prompt injection, RAG security and data-leakage risks.",
  },
  {
    question: "Is a job guaranteed?",
    answer:
      "No program can guarantee employment. The program focuses on practical skills, portfolio evidence, resume preparation and interview readiness.",
  },
];
