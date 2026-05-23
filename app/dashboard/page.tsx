'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  BookOpen,
  Cpu,
  Users,
  Code2,
  FlaskConical,
  Activity,
  Star,
  TrendingUp,
  ChevronRight,
  Clock,
  Play,
  GitBranch,
  Terminal,
  Layers,
  Sparkles,
  BarChart3,
  MessageSquare,
  Bell,
} from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const stats = [
  { label: 'Members', value: '2,400+', icon: Users, delta: '+12% this month', color: 'from-violet-500 to-indigo-500' },
  { label: 'Projects', value: '580+',  icon: GitBranch, delta: '+34 this week', color: 'from-cyan-500 to-teal-500' },
  { label: 'Tutorials', value: '120+', icon: BookOpen, delta: '8 new this week', color: 'from-fuchsia-500 to-pink-500' },
  { label: 'Labs Active', value: '24',  icon: FlaskConical, delta: '3 launching soon', color: 'from-amber-500 to-orange-500' },
]

const featuredProjects = [
  {
    id: 1,
    title: 'Neural Inference Engine',
    description: 'Production-grade inference pipeline with dynamic batching, quantization, and sub-50ms p99 latency.',
    tags: ['PyTorch', 'CUDA', 'gRPC'],
    stars: 312,
    contributors: 14,
    status: 'Active',
    statusColor: 'text-cyan-400',
  },
  {
    id: 2,
    title: 'HyperGraph RAG',
    description: 'Knowledge graph-augmented retrieval system with multi-hop reasoning across heterogeneous documents.',
    tags: ['LangChain', 'Neo4j', 'FastAPI'],
    stars: 487,
    contributors: 22,
    status: 'Active',
    statusColor: 'text-cyan-400',
  },
  {
    id: 3,
    title: 'StreamForge',
    description: 'Real-time data ingestion and ML feature pipeline. Kafka + Flink + feature store integration.',
    tags: ['Kafka', 'Flink', 'Redis'],
    stars: 198,
    contributors: 9,
    status: 'Beta',
    statusColor: 'text-amber-400',
  },
]

const tutorials = [
  {
    id: 1,
    title: 'Building Agentic Workflows with Tool Use',
    duration: '42 min',
    level: 'Advanced',
    levelColor: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
    category: 'AI Engineering',
    icon: Cpu,
    progress: 65,
  },
  {
    id: 2,
    title: 'Full-Stack AI App with Next.js + LLM APIs',
    duration: '1h 18min',
    level: 'Intermediate',
    levelColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    category: 'Full Stack',
    icon: Code2,
    progress: 0,
  },
  {
    id: 3,
    title: 'Vector Databases & Embedding Strategies',
    duration: '55 min',
    level: 'Intermediate',
    levelColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    category: 'Data Systems',
    icon: Layers,
    progress: 100,
  },
]

const activity = [
  { id: 1, user: 'zerox.dev', action: 'starred', target: 'HyperGraph RAG', time: '2m ago', icon: Star },
  { id: 2, user: 'kai_builds', action: 'submitted PR to', target: 'Neural Inference Engine', time: '11m ago', icon: GitBranch },
  { id: 3, user: 'synthaera', action: 'completed tutorial', target: 'Agentic Workflows', time: '28m ago', icon: BookOpen },
  { id: 4, user: 'nxtvoid', action: 'opened a Lab session in', target: 'StreamForge', time: '1h ago', icon: FlaskConical },
  { id: 5, user: 'devmorphic', action: 'joined the ecosystem', target: '', time: '2h ago', icon: Users },
]

const quickActions = [
  { label: 'New Project', icon: GitBranch, color: 'from-violet-600 to-indigo-600', href: '#' },
  { label: 'Open Lab',    icon: Terminal,  color: 'from-cyan-600 to-teal-600',    href: '#' },
  { label: 'Browse Docs', icon: BookOpen,  color: 'from-fuchsia-600 to-pink-600', href: '#' },
  { label: 'Community',   icon: MessageSquare, color: 'from-amber-600 to-orange-600', href: '#' },
]

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, borderColor: 'rgba(139,92,246,0.35)' } : {}}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-white/30 mb-4">
      {children}
    </p>
  )
}

function StatCard({ stat, index }) {
  const Icon = stat.icon
  return (
    <motion.div
      variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.01 }}
    >
      <GlassCard hover={false} className="p-5 group cursor-default">
        {/* Ambient glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${stat.color} blur-3xl scale-150`} style={{ opacity: 0 }} />
        <div className="relative z-10">
          <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4`}>
            <Icon className="w-4 h-4 text-white" />
          </div>
          <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
          <p className="text-sm text-white/50 mt-0.5">{stat.label}</p>
          <p className="text-[11px] text-white/30 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-cyan-500" />
            {stat.delta}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  )
}

function ProjectCard({ project }) {
  return (
    <GlassCard className="p-5 group cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <span className={`text-[11px] font-semibold ${project.statusColor} tracking-widest uppercase`}>
          ● {project.status}
        </span>
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
      </div>
      <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-violet-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/[0.07] text-white/50 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
        <span className="flex items-center gap-1 text-[12px] text-white/40">
          <Star className="w-3.5 h-3.5" /> {project.stars}
        </span>
        <span className="flex items-center gap-1 text-[12px] text-white/40">
          <Users className="w-3.5 h-3.5" /> {project.contributors} contributors
        </span>
      </div>
    </GlassCard>
  )
}

function TutorialRow({ tutorial, index }) {
  const Icon = tutorial.icon
  return (
    <motion.div
      variants={{ initial: { opacity: 0, x: -12 }, animate: { opacity: 1, x: 0 } }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex items-center gap-4 py-3.5 border-b border-white/[0.05] last:border-0 cursor-pointer"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all">
        <Icon className="w-4 h-4 text-white/50 group-hover:text-violet-400 transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate">
          {tutorial.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px] text-white/30">{tutorial.category}</span>
          <span className="text-white/15">·</span>
          <span className="text-[11px] text-white/30 flex items-center gap-1">
            <Clock className="w-2.5 h-2.5" /> {tutorial.duration}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${tutorial.levelColor}`}>
          {tutorial.level}
        </span>
        {tutorial.progress === 100 ? (
          <span className="text-[11px] text-emerald-400 font-semibold">Done</span>
        ) : tutorial.progress > 0 ? (
          <div className="flex items-center gap-1.5">
            <div className="w-14 h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                style={{ width: `${tutorial.progress}%` }}
              />
            </div>
            <span className="text-[10px] text-white/30">{tutorial.progress}%</span>
          </div>
        ) : (
          <Play className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors" />
        )}
      </div>
    </motion.div>
  )
}

function ActivityItem({ item, index }) {
  const Icon = item.icon
  return (
    <motion.div
      variants={{ initial: { opacity: 0, x: 12 }, animate: { opacity: 1, x: 0 } }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0"
    >
      <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon className="w-3 h-3 text-white/40" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] text-white/60 leading-snug">
          <span className="text-white/90 font-medium">{item.user}</span>{' '}
          {item.action}
          {item.target && (
            <>
              {' '}
              <span className="text-violet-400">{item.target}</span>
            </>
          )}
        </p>
        <p className="text-[11px] text-white/25 mt-0.5">{item.time}</p>
      </div>
    </motion.div>
  )
}

// ─── Background grid texture ─────────────────────────────────────────────────

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial gradient spotlight top-left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl" />
      {/* Radial gradient spotlight bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-3xl" />
      {/* Accent streak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-violet-500/40 to-transparent" />
    </div>
  )
}

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const greeting =
    time.getHours() < 12 ? 'Good morning' : time.getHours() < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <main className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden">
      <GridBackground />

      {/* ── Top Bar ─────────────────────────────────────────────────────── */}
      <motion.header
        {...fadeUp(0)}
        className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 border-b border-white/[0.05] bg-[#050508]/80 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-tighter bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Hyper Thinkers
          </span>
          <span className="hidden sm:block text-white/15">/</span>
          <span className="hidden sm:block text-sm text-white/40 font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:block text-[12px] text-white/25 font-mono tabular-nums">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <button className="relative p-2 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/40 transition-colors">
            <Bell className="w-4 h-4 text-white/50" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-violet-500" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-xs font-bold">
            HT
          </div>
        </div>
      </motion.header>

      {/* ── Page Content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        {/* ── Hero Welcome ─────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.05)}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white/25 mb-2">
                {greeting}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
                  Welcome back,
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Builder.
                </span>
              </h1>
              <p className="mt-3 text-white/40 max-w-md text-sm leading-relaxed">
                Building production-ready systems for the next generation of AI engineering and full-stack development.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <motion.a
                    key={action.label}
                    href={action.href}
                    whileHover={{ scale: 1.04, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${action.color} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {action.label}
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Stat Cards ───────────────────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>

        {/* ── Main 2-col grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">

          {/* Left column */}
          <div className="space-y-6">

            {/* Featured Projects */}
            <motion.div {...fadeUp(0.18)}>
              <div className="flex items-center justify-between mb-4">
                <SectionLabel>Featured Projects</SectionLabel>
                <a href="#" className="flex items-center gap-1 text-[12px] text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  View all <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>

            {/* Tutorials */}
            <motion.div {...fadeUp(0.25)}>
              <div className="flex items-center justify-between mb-4">
                <SectionLabel>Continue Learning</SectionLabel>
                <a href="#" className="flex items-center gap-1 text-[12px] text-violet-400 hover:text-violet-300 transition-colors font-medium">
                  All tutorials <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <GlassCard className="px-5 py-1" hover={false}>
                <motion.div variants={stagger} initial="initial" animate="animate">
                  {tutorials.map((tutorial, i) => (
                    <TutorialRow key={tutorial.id} tutorial={tutorial} index={i} />
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>

            {/* Ecosystem Banner */}
            <motion.div {...fadeUp(0.32)}>
              <GlassCard hover={false} className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-600/10" />
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-violet-500/5 blur-2xl" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="text-[11px] tracking-[0.18em] uppercase font-semibold text-violet-400/80">
                        Ecosystem
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Shape the next generation.
                    </h3>
                    <p className="text-sm text-white/40 max-w-sm leading-relaxed">
                      A futuristic ecosystem focused on innovation, quality, and empowering developers to ship at scale.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <motion.button
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold flex items-center gap-2 whitespace-nowrap"
                    >
                      Explore Ecosystem <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <button className="px-6 py-2.5 rounded-xl border border-white/10 text-white/50 text-sm font-medium hover:border-white/20 hover:text-white/70 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">

            {/* Live Activity */}
            <motion.div {...fadeUp(0.22)}>
              <div className="flex items-center justify-between mb-4">
                <SectionLabel>Live Activity</SectionLabel>
                <span className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Live
                </span>
              </div>
              <GlassCard className="px-4 py-1" hover={false}>
                <motion.div variants={stagger} initial="initial" animate="animate">
                  {activity.map((item, i) => (
                    <ActivityItem key={item.id} item={item} index={i} />
                  ))}
                </motion.div>
              </GlassCard>
            </motion.div>

            {/* System Health */}
            <motion.div {...fadeUp(0.3)}>
              <SectionLabel>Platform Status</SectionLabel>
              <GlassCard className="p-4" hover={false}>
                {[
                  { label: 'API Gateway', pct: 99.98, color: 'from-emerald-500 to-teal-500' },
                  { label: 'Lab Environments', pct: 97.4, color: 'from-cyan-500 to-blue-500' },
                  { label: 'CDN & Assets', pct: 100, color: 'from-emerald-500 to-teal-500' },
                  { label: 'Model Inference', pct: 94.1, color: 'from-amber-500 to-orange-500' },
                ].map((item, i) => (
                  <div key={item.label} className={`py-3 ${i < 3 ? 'border-b border-white/[0.04]' : ''}`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[13px] text-white/60">{item.label}</span>
                      <span className="text-[12px] font-mono text-white/40">{item.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </GlassCard>
            </motion.div>

            {/* Lab CTA */}
            <motion.div {...fadeUp(0.38)}>
              <GlassCard className="p-5 relative overflow-hidden group cursor-pointer" hover={false}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 to-teal-600/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">Open a Lab Session</h4>
                  <p className="text-[12px] text-white/40 leading-relaxed mb-4">
                    Spin up a pre-configured cloud environment and start shipping in seconds.
                  </p>
                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-sm text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors"
                  >
                    Launch Lab <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  )
}