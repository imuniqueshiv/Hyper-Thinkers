'use client'

import { motion } from 'framer-motion'

interface Technology {
  name: string
  category: string
}

const technologies: Technology[] = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'LangChain', category: 'AI/ML' },
  { name: 'FastAPI', category: 'Framework' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Redis', category: 'Cache' },
]

export function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 217, 255, 0.5) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Built with the latest and greatest technologies trusted by industry
            leaders.
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-6 rounded-xl border border-cyan-500/15 bg-[#030712]/90 backdrop-blur-md hover:border-accent/50 transition-all duration-300"
              whileHover={{
                y: -10,
                borderColor: 'rgba(0, 217, 255, 0.5)',
              }}
            >
              {/* Dark card background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#020617] via-[#030712] to-[#000000]" />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="font-bold text-lg group-hover:text-accent transition-colors mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                  {tech.category}
                </p>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 mb-6">
            Powered by modern, production-ready tools and frameworks
          </p>
          <motion.button
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Full Stack
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}