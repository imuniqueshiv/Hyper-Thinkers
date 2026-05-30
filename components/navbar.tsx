'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#tutorials', label: 'Tutorials' },
    { href: '#labs', label: 'Labs' },
    { href: '#ecosystem', label: 'Ecosystem' },
    { href: '#about', label: 'About' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/50 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <Link href="/">
            <span className="cursor-pointer text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:opacity-90 transition-opacity">
              Hyper Thinkers
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="group relative text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-accent"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-center scale-x-0 bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>

        {/* Auth Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden sm:flex items-center gap-3"
        >
          <Link href="/sign-in">
            <button
              className="
                px-5 py-2
                rounded-lg
                border border-border
                bg-background/50
                text-sm font-medium
                transition-all duration-300
                hover:border-accent
                hover:text-accent
                hover:bg-background
              "
            >
              Login
            </button>
          </Link>

          <Link href="/sign-up">
            <button
              className="
                px-5 py-2
                rounded-lg
                bg-primary
                text-primary-foreground
                text-sm font-medium
                transition-all duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-primary/25
                active:scale-95
              "
            >
              Sign Up
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  )
}