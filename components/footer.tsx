'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Ecosystem', href: '#ecosystem' },
        { label: 'Labs', href: '#labs' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Tutorials', href: '#tutorials' },
        { label: 'Documentation', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Twitter', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-background-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12 pb-12 border-b border-border/50">
          {/* Branding */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hyper Thinkers for AI Engineering
              </span>
            </h3>
            <p className="text-foreground/60 text-sm mb-6">
              Building the future of AI engineering and production-ready systems.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/50 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((column, i) => (
            <motion.div key={i} variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-foreground">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center gap-1 group"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-foreground/50 text-sm">
            <p>&copy; 2026 Hyper Thinkers. All rights reserved.</p>
          </div>

          {/* Bottom links */}
          <div className="flex flex-col md:flex-row gap-6 text-sm text-foreground/50">
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              whileHover={{ x: 2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              whileHover={{ x: 2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-accent transition-colors"
              whileHover={{ x: 2 }}
            >
              Status Page
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center text-primary hover:border-accent/50 transition-all z-40"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ↑
        </motion.button>
      </motion.div>
    </footer>
  )
}
