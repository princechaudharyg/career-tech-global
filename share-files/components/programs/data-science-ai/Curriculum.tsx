"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconBrain,
  IconBriefcase,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCloudComputing,
  IconCode,
  IconDatabase,
  IconRocket,
  IconSparkles,
} from "@tabler/icons-react";

const modules = [
  {
    number: "01",
    title: "Python Programming",
    duration: "Weeks 1–2",
    level: "Beginner",
    category: "Foundation",
    icon: IconCode,
    color: "from-cyan-500 to-blue-600",
    description:
      "Build a strong programming foundation for data analysis and machine learning.",
    topics: [
      "Python syntax and data types",
      "Functions and modules",
      "Lists, dictionaries and sets",
      "Object-oriented programming",
      "File handling and APIs",
      "Jupyter notebooks and Git",
    ],
    tools: ["Python", "Jupyter", "VS Code", "GitHub"],
    assignment: "Create a reusable Python data-processing script.",
    project: "Build a command-line expense tracker and analysis tool.",
    outcome:
      "You can write clean Python programs and work comfortably with notebooks.",
  },
  {
    number: "02",
    title: "SQL and Databases",
    duration: "Weeks 3–4",
    level: "Beginner",
    category: "Data Skills",
    icon: IconDatabase,
    color: "from-blue-500 to-indigo-600",
    description:
      "Learn how to retrieve, transform and analyze data stored in relational databases.",
    topics: [
      "SELECT and filtering",
      "Joins and subqueries",
      "Aggregations and grouping",
      "Window functions",
      "CTEs and data modeling",
      "Query optimization basics",
    ],
    tools: ["PostgreSQL", "MySQL", "SQL", "DBeaver"],
    assignment: "Write analytical queries for a retail business dataset.",
    project: "Create a sales performance report using SQL.",
    outcome:
      "You can answer business questions using production-style SQL queries.",
  },
  {
    number: "03",
    title: "Mathematics and Statistics",
    duration: "Weeks 5–7",
    level: "Beginner",
    category: "Foundation",
    icon: IconChartBar,
    color: "from-indigo-500 to-violet-600",
    description:
      "Understand the mathematics and statistics needed to interpret data and ML results.",
    topics: [
      "Descriptive statistics",
      "Probability fundamentals",
      "Distributions",
      "Correlation and covariance",
      "Hypothesis testing",
      "Linear algebra for ML",
    ],
    tools: ["Python", "NumPy", "SciPy", "Matplotlib"],
    assignment:
      "Analyze the relationship between customer behavior and revenue.",
    project: "Create a statistical report from a real-world dataset.",
    outcome:
      "You can explain statistical results instead of treating models like black boxes.",
  },
  {
    number: "04",
    title: "Data Wrangling",
    duration: "Weeks 8–9",
    level: "Beginner",
    category: "Data Skills",
    icon: IconDatabase,
    color: "from-violet-500 to-fuchsia-600",
    description:
      "Transform messy, incomplete and inconsistent datasets into reliable analysis-ready data.",
    topics: [
      "Missing values",
      "Duplicate records",
      "Outlier detection",
      "Data type conversion",
      "Merging datasets",
      "Data quality checks",
    ],
    tools: ["Pandas", "NumPy", "OpenRefine", "Jupyter"],
    assignment: "Clean and document a messy customer dataset.",
    project: "Build a reusable data-cleaning pipeline.",
    outcome: "You can prepare real-world data for analysis and modeling.",
  },
  {
    number: "05",
    title: "Exploratory Data Analysis",
    duration: "Weeks 10–11",
    level: "Beginner",
    category: "Analytics",
    icon: IconChartBar,
    color: "from-cyan-500 to-teal-600",
    description:
      "Discover patterns, trends and problems in data through structured analysis.",
    topics: [
      "Univariate analysis",
      "Bivariate analysis",
      "Feature relationships",
      "Business metrics",
      "Data storytelling",
      "Dashboard design",
    ],
    tools: ["Pandas", "Seaborn", "Matplotlib", "Power BI"],
    assignment: "Find five business insights from a public dataset.",
    project: "Build an interactive business intelligence dashboard.",
    outcome:
      "You can communicate data insights clearly to technical and non-technical teams.",
  },
  {
    number: "06",
    title: "Machine Learning Foundations",
    duration: "Weeks 12–15",
    level: "Intermediate",
    category: "Machine Learning",
    icon: IconBrain,
    color: "from-blue-500 to-cyan-600",
    description:
      "Learn the core supervised and unsupervised machine learning algorithms.",
    topics: [
      "Machine learning workflow",
      "Linear and logistic regression",
      "Decision trees",
      "Random forests",
      "K-means clustering",
      "Train-test splitting",
    ],
    tools: ["Scikit-learn", "Pandas", "NumPy", "MLflow"],
    assignment: "Train and compare multiple classification models.",
    project: "Build a customer churn prediction system.",
    outcome:
      "You can train baseline ML models and explain their predictions.",
  },
  {
    number: "07",
    title: "Advanced Machine Learning",
    duration: "Weeks 16–18",
    level: "Intermediate",
    category: "Machine Learning",
    icon: IconBrain,
    color: "from-indigo-500 to-blue-700",
    description:
      "Improve model performance using feature engineering, tuning and ensemble methods.",
    topics: [
      "Feature engineering",
      "Cross-validation",
      "Hyperparameter tuning",
      "Gradient boosting",
      "XGBoost basics",
      "Model interpretability",
    ],
    tools: ["Scikit-learn", "XGBoost", "SHAP", "Optuna"],
    assignment: "Improve a baseline model using feature engineering.",
    project: "Create a loan-risk or fraud-detection model.",
    outcome:
      "You can improve models systematically and defend your modeling decisions.",
  },
  {
    number: "08",
    title: "Deep Learning",
    duration: "Weeks 19–21",
    level: "Intermediate",
    category: "Deep Learning",
    icon: IconBrain,
    color: "from-fuchsia-500 to-violet-700",
    description:
      "Understand neural networks and apply deep learning to real data problems.",
    topics: [
      "Neural network fundamentals",
      "Activation functions",
      "Loss functions",
      "Backpropagation",
      "CNN fundamentals",
      "Transfer learning",
    ],
    tools: ["PyTorch", "TensorFlow", "Keras", "Google Colab"],
    assignment: "Train a neural network on a structured dataset.",
    project: "Build an image classification application.",
    outcome:
      "You can build, train and evaluate basic deep learning models.",
  },
  {
    number: "09",
    title: "NLP and Computer Vision",
    duration: "Weeks 22–23",
    level: "Intermediate",
    category: "Applied AI",
    icon: IconSparkles,
    color: "from-orange-500 to-rose-600",
    description:
      "Explore how AI systems understand text, documents and visual information.",
    topics: [
      "Text preprocessing",
      "Sentiment analysis",
      "Text classification",
      "Embeddings basics",
      "Image preprocessing",
      "Computer vision workflows",
    ],
    tools: ["NLTK", "spaCy", "OpenCV", "Transformers"],
    assignment:
      "Classify customer feedback into sentiment categories.",
    project:
      "Build a document or image classification application.",
    outcome:
      "You understand common NLP and computer vision project workflows.",
  },
  {
    number: "10",
    title: "Generative AI and LLM Applications",
    duration: "Weeks 24–26",
    level: "Advanced",
    category: "Generative AI",
    icon: IconSparkles,
    color: "from-violet-500 to-blue-700",
    description:
      "Build practical applications powered by large language models.",
    topics: [
      "LLM fundamentals",
      "Prompt engineering",
      "Embeddings",
      "Vector databases",
      "RAG pipelines",
      "Evaluation and guardrails",
    ],
    tools: ["OpenAI API", "LangChain", "FAISS", "FastAPI"],
    assignment:
      "Design and test prompts for a business assistant.",
    project:
      "Build a document-based RAG knowledge assistant.",
    outcome:
      "You can create grounded LLM applications instead of simple chatbot demos.",
  },
  {
    number: "11",
    title: "MLOps and Cloud Deployment",
    duration: "Weeks 27–28",
    level: "Advanced",
    category: "Production AI",
    icon: IconCloudComputing,
    color: "from-cyan-500 to-emerald-600",
    description:
      "Package, deploy and monitor machine learning and AI applications.",
    topics: [
      "FastAPI model serving",
      "Docker containers",
      "Cloud deployment",
      "CI/CD basics",
      "Experiment tracking",
      "Monitoring and versioning",
    ],
    tools: ["Docker", "AWS", "FastAPI", "MLflow", "GitHub Actions"],
    assignment: "Deploy a trained model behind a REST API.",
    project:
      "Deploy an AI application with a working web API.",
    outcome:
      "You can move a model from a notebook toward a usable application.",
  },
  {
    number: "12",
    title: "Capstone and Career Launch",
    duration: "Weeks 29–30",
    level: "Career",
    category: "Portfolio",
    icon: IconBriefcase,
    color: "from-emerald-500 to-cyan-600",
    description:
      "Bring your learning together into one strong portfolio project and career plan.",
    topics: [
      "Capstone planning",
      "System documentation",
      "GitHub portfolio",
      "ATS resume",
      "Technical storytelling",
      "Mock interviews",
    ],
    tools: ["GitHub", "Notion", "LinkedIn", "Resume tools"],
    assignment:
      "Present your project architecture and business impact.",
    project:
      "Complete and deploy one end-to-end Data Science or AI capstone.",
    outcome:
      "You leave with a project you can explain in interviews and showcase online.",
  },
];

const phases = [
  "Foundation",
  "Data Skills",
  "Machine Learning",
  "Applied AI",
  "Production AI",
  "Portfolio",
];

const stats: any[] = [
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState("01");

  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-[#030712] py-24 text-white sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-18%] top-[-12%] h-150 w-150 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute right-[-18%] top-[12%] h-150 w-150 rounded-full bg-blue-600/10 blur-[170px]" />
        <div className="absolute bottom-[-15%] left-[22%] h-150 w-150 rounded-full bg-violet-600/10 blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            The learning architecture
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-7xl">
            The world doesn't hire people who simply finish courses ,
            <span className="block bg-linear-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              It hires people who solve real problems.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Every stage is designed to help you understand the concept, apply it
            to a real problem and build proof of work for your portfolio.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-center backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
            >
              <p className="text-3xl font-black tracking-[-0.05em] text-white">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 transition group-hover:text-cyan-300">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.32fr_1fr]">
          {/* Side panel */}
          <div className="lg:sticky lg:top-10 lg:h-fit">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-7">
              <div className="absolute right-[-60px] top-[-60px] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Your progression
                </p>

                <h3 className="mt-5 text-2xl font-black leading-tight text-white">
                  Learn the skill.
                  <span className="block text-slate-400">Build the evidence.</span>
                </h3>

                <div className="mt-8 space-y-4">
                  {phases.map((phase, index) => (
                    <div key={phase} className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                          index < 2
                            ? "bg-cyan-300 text-slate-950"
                            : "border border-white/15 bg-white/[0.05] text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="text-sm font-semibold text-slate-300">
                        {phase}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.06] p-4">
                  <div className="flex items-start gap-3">
                    <IconCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />

                    <p className="text-xs leading-5 text-emerald-100/75">
                      Each module ends with something tangible you can
                      demonstrate, explain or add to your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modules */}
          <div className="relative">
            <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-cyan-300/60 via-blue-400/30 to-violet-400/10 lg:block" />

            <div className="space-y-5">
              {modules.map((module, index) => {
                const ModuleIcon = module.icon;
                const isOpen = openModule === module.number;

                return (
                  <motion.article
                    key={module.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.55, delay: index * 0.04 }}
                    className={`group relative overflow-hidden rounded-[30px] border backdrop-blur-xl transition duration-500 ${
                      isOpen
                        ? "border-cyan-300/30 bg-white/[0.085] shadow-[0_20px_80px_rgba(34,211,238,.08)]"
                        : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    {isOpen && (
                      <div
                        className={`pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-gradient-to-br ${module.color} opacity-10 blur-3xl`}
                      />
                    )}

                    {/* Header */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenModule(isOpen ? "" : module.number)
                      }
                      className="relative flex w-full items-center gap-4 p-5 text-left sm:gap-6 sm:p-7"
                    >
                      <div
                        className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${module.color} text-white shadow-lg transition duration-500 group-hover:scale-105`}
                      >
                        <ModuleIcon size={25} />

                        <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#07101e] bg-slate-900 text-[9px] font-black text-cyan-300">
                          {module.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                            Module {module.number}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-slate-400">
                            {module.level}
                          </span>

                          <span className="rounded-full border border-amber-300/15 bg-amber-300/[0.08] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-amber-200">
                            {module.duration}
                          </span>
                        </div>

                        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                          {module.title}
                        </h3>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {module.category}
                        </p>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
                          isOpen
                            ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-300"
                            : "border-white/10 bg-white/[0.04] text-slate-500"
                        }`}
                      >
                        <IconChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Content */}
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.35 }}
                        className="relative border-t border-white/10 px-5 pb-6 sm:px-7 sm:pb-7"
                      >
                        <div className="grid gap-7 pt-6 lg:grid-cols-[0.8fr_1.2fr]">
                          <div>
                            <p className="text-sm leading-7 text-slate-400">
                              {module.description}
                            </p>

                            <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#101d35] to-[#070d19]">
                              <div className="border-b border-white/10 p-5">
                                <div className="flex items-center justify-between gap-4">
                                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                                    Module project
                                  </p>

                                  <IconRocket
                                    size={18}
                                    className="text-cyan-300"
                                  />
                                </div>

                                <p className="mt-3 text-lg font-black leading-7 text-white">
                                  {module.project}
                                </p>
                              </div>

                              <div className="p-5">
                                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-300">
                                  By the end of this module
                                </p>

                                <div className="mt-3 flex items-start gap-2">
                                  <IconCheck
                                    size={17}
                                    className="mt-1 shrink-0 text-emerald-300"
                                  />

                                  <p className="text-sm leading-6 text-slate-300">
                                    {module.outcome}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                              What you will learn
                            </p>

                            <div className="mt-4 grid gap-2 sm:grid-cols-2">
                              {module.topics.map((topic) => (
                                <div
                                  key={topic}
                                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/20 hover:bg-cyan-300/[0.06]"
                                >
                                  <IconCheck
                                    size={16}
                                    className="shrink-0 text-emerald-300"
                                  />

                                  <span>{topic}</span>
                                </div>
                              ))}
                            </div>

                            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                              Tools and technologies
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {module.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-bold text-cyan-200"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[0.06] p-4">
                              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-amber-200">
                                Practical assignment
                              </p>

                              <p className="mt-2 text-sm font-semibold leading-6 text-amber-100/80">
                                {module.assignment}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-16 overflow-hidden rounded-[34px] border border-cyan-300/20 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 p-[1px] shadow-[0_20px_80px_rgba(34,211,238,.12)]"
        >
          <div className="relative overflow-hidden rounded-[33px] bg-[#07101e]/90 p-7 sm:p-10">
            <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Your final outcome
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                  Learn. Build. Deploy.
                  <span className="block text-slate-400">
                    Become career-ready.
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  Complete the roadmap with a portfolio, capstone project and
                  the confidence to explain your technical decisions.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 text-center backdrop-blur-xl">
                <p className="text-4xl font-black text-white">30</p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  weeks to transform
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}