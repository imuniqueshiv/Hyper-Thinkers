"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Code2,
  Cpu,
  Star,
  TrendingUp,
  ChevronRight,
  Clock,
  Play,
  GitBranch,
  Terminal,
  Layers,
  Zap,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredProjects = [
  {
    id: 1,
    title: "Neural Inference Engine",
    description:
      "Production-grade inference pipeline with dynamic batching and sub-50ms latency.",
    tags: ["PyTorch", "CUDA", "gRPC"],
    stars: 312,
    contributors: 14,
    status: "Active",
  },
  {
    id: 2,
    title: "HyperGraph RAG",
    description:
      "Knowledge graph-augmented retrieval system with multi-hop reasoning.",
    tags: ["LangChain", "Neo4j", "FastAPI"],
    stars: 487,
    contributors: 22,
    status: "Active",
  },
  {
    id: 3,
    title: "StreamForge API",
    description:
      "Real-time data ingestion and ML feature pipeline using Kafka & Flink.",
    tags: ["Kafka", "Flink", "Redis"],
    stars: 198,
    contributors: 9,
    status: "Beta",
  },
  {
    id: 4,
    title: "Quantum Compute Core",
    description:
      "Experimental integration wrapper for Qiskit and cloud-based quantum processors.",
    tags: ["Qiskit", "Python", "Rust"],
    stars: 145,
    contributors: 6,
    status: "Experimental",
  },
  {
    id: 5,
    title: "Edge Node Orchestrator",
    description:
      "Lightweight Kubernetes alternative optimized for decentralized IoT edge nodes.",
    tags: ["Go", "Docker", "Raft"],
    stars: 276,
    contributors: 18,
    status: "Active",
  },
  {
    id: 6,
    title: "SynthData Generator",
    description:
      "High-throughput synthetic data generation using fine-tuned LLama-3 and Ray.",
    tags: ["LLama3", "Ray", "vLLM"],
    stars: 402,
    contributors: 31,
    status: "Beta",
  },
];

const tutorials = [
  {
    id: 1,
    title: "Building Agentic Workflows",
    duration: "42 min",
    level: "Advanced",
    category: "AI Engineering",
    icon: Cpu,
    progress: 65,
  },
  {
    id: 2,
    title: "Full-Stack Next.js + LLMs",
    duration: "1h 18min",
    level: "Intermediate",
    category: "Full Stack",
    icon: Code2,
    progress: 0,
  },
  {
    id: 3,
    title: "Vector DBs & Embeddings",
    duration: "55 min",
    level: "Intermediate",
    category: "Data Systems",
    icon: Layers,
    progress: 100,
  },
];

const quickActions = [
  {
    label: "New Project With Hyper Hub AI",
    icon: GitBranch,
    primary: true,
    href: "#",
  },
  { label: "Open Lab Environment", icon: Terminal, primary: false, href: "#" },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function CyberCard({ children, className = "", hover = true, glow = false }) {
  return (
    <motion.div
      whileHover={
        hover ? { y: -2, borderColor: "rgba(34, 211, 238, 0.4)" } : {}
      }
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl border border-cyan-500/10 bg-[#070b14]/80 backdrop-blur-md overflow-hidden ${
        glow
          ? "shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
          : ""
      } ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-cyan-400/70 mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-cyan-500/50 animate-pulse flex-shrink-0" />
      {children}
    </p>
  );
}

function ProjectCard({ project }) {
  return (
    <CyberCard
      className="p-5 group cursor-pointer flex flex-col h-full"
      glow={true}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee] flex-shrink-0" />
          {project.status}
        </span>
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
      </div>
      <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors drop-shadow-sm">
        {project.title}
      </h3>
      <p className="text-xs text-white/40 leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-1 rounded border border-cyan-500/10 bg-cyan-500/5 text-cyan-100/60 font-medium uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04]">
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/40">
          <Star className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />{" "}
          {project.stars}
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-white/40">
          <Users className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />{" "}
          {project.contributors}
        </span>
      </div>
    </CyberCard>
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function ConstellationBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030509]">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute top-[20%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-indigo-600/5 blur-[100px]" />
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const greeting =
    time.getHours() < 12
      ? "SYS.INIT // MORNING"
      : time.getHours() < 18
        ? "SYS.ACTIVE // AFTERNOON"
        : "SYS.STANDBY // EVENING";

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden selection:bg-cyan-500/30 font-sans">
      <ConstellationBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12">
        {/* ── Hero Header ──────────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.05)}
          className="flex flex-col gap-6 pb-6 border-b border-cyan-500/10 md:flex-row md:items-end md:justify-between"
        >
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-sm bg-cyan-500/5 border border-cyan-500/20">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <p className="text-[10px] tracking-[0.2em] uppercase font-mono font-semibold text-cyan-400 truncate">
                {greeting}
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white drop-shadow-md">Welcome to the</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                Hyper Ecosystem.
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    action.primary
                      ? "bg-cyan-400 text-[#030509] shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                      : "bg-[#0a0f1c]/80 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400/60 backdrop-blur-md"
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {action.label}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* ── Learning Modules ─────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.3)}>
          <div className="flex items-center justify-between mb-4">
            <SectionLabel>Learning Modules</SectionLabel>
            <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 flex-shrink-0">
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <div
                  key={tutorial.id}
                  className="min-w-[280px] sm:min-w-[320px] flex-shrink-0"
                >
                  <CyberCard className="p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white leading-snug">
                          {tutorial.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-medium uppercase tracking-widest text-cyan-400/50">
                            {tutorial.category}
                          </span>
                          <span className="text-white/10">|</span>
                          <span className="text-[11px] text-white/30 flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3 flex-shrink-0" />{" "}
                            {tutorial.duration}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0a0f1c] border border-cyan-500/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-400/70">
                        Progress
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/70">
                        {tutorial.progress}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        style={{ width: `${tutorial.progress}%` }}
                      />
                    </div>

                    <button className="mt-auto w-full py-2 text-xs font-semibold text-cyan-400 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2">
                      {tutorial.progress === 100 ? (
                        "Completed"
                      ) : tutorial.progress > 0 ? (
                        <>
                          <Play className="w-3 h-3 ml-0.5" /> Continue Learning
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 ml-0.5" /> Start Learning
                        </>
                      )}
                    </button>
                  </CyberCard>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Projects + Labs ──────────────────────────────────────────── */}
        <div className="space-y-8">
          {/* Featured Projects */}
          <motion.div {...fadeUp(0.15)}>
            <SectionLabel>Active Engineering Projects</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

              {/* Explore Card */}
              <CyberCard className="p-5 flex flex-col items-center justify-center text-center min-h-[200px] border-dashed border-cyan-500/20 hover:bg-cyan-500/5 cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  Explore Ecosystem
                </h4>
                <p className="text-xs text-white/40 px-4">
                  Browse all open-source projects, tools, and platforms.
                </p>
              </CyberCard>
            </div>
          </motion.div>

          {/* Hyper Labs */}
          <motion.div {...fadeUp(0.2)}>
            <SectionLabel>
              Hyper Labs Initiatives{" "}
              <span className="text-red-300 normal-case tracking-normal font-semibold">
                Coming Soon
              </span>
            </SectionLabel>
            <CyberCard hover={false} className="overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-white/[0.04] bg-gradient-to-r from-cyan-500/5 to-transparent">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 drop-shadow-md">
                  Cutting-edge R&amp;D
                </h3>
                <p className="text-sm text-white/50 max-w-xl">
                  Experiments and initiatives pushing the boundaries of AI
                  infrastructure and applied architectures.
                </p>
              </div>
              <div className="p-2">
                <motion.div
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col gap-1"
                >
                  {[
                    {
                      title: "Neural Networks at Scale",
                      status: "Active",
                      prog: 75,
                      desc: "Distributed training across multiple GPUs.",
                    },
                    {
                      title: "Real-time AI Inference",
                      status: "Beta",
                      prog: 60,
                      desc: "Ultra-low latency model serving.",
                    },
                    {
                      title: "Autonomous Systems",
                      status: "Upcoming",
                      prog: 40,
                      desc: "Self-healing infrastructure.",
                    },
                  ].map((lab, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.05] transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0a0f1c] border border-cyan-500/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                          <Zap className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <h4 className="text-sm font-bold text-white/90 group-hover:text-cyan-300 transition-colors">
                              {lab.title}
                            </h4>
                            <span
                              className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded flex-shrink-0 ${
                                lab.status === "Active"
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : lab.status === "Beta"
                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                              }`}
                            >
                              {lab.status}
                            </span>
                          </div>
                          <p className="text-xs text-white/40 truncate">
                            {lab.desc}
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex flex-col items-end gap-2 w-32 flex-shrink-0">
                        <span className="text-[10px] font-mono text-cyan-400/70">
                          Progress {lab.prog}%
                        </span>
                        <div className="w-full h-1.5 rounded-full bg-[#0a0f1c] border border-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                            style={{ width: `${lab.prog}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </CyberCard>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
