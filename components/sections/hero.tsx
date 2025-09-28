"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/site.config"
import { scrollToElement } from "@/lib/utils"
import { ArrowDown, Download, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const handleContactClick = () => {
    scrollToElement("contact")
  }

  const handleProjectsClick = () => {
    scrollToElement("projects")
  }

  const handleResumeDownload = () => {
    window.open(siteConfig.resumeUrl, "_blank")
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50"
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent mb-6"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Title & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              {siteConfig.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Based in {siteConfig.location} ({siteConfig.timezone})
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-foreground mb-6"
          >
            {siteConfig.headline}
          </motion.h3>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {siteConfig.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={handleProjectsClick}
              size="lg"
              className="text-lg px-8 py-3 h-auto min-w-[200px]"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button
              onClick={handleContactClick}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 h-auto min-w-[200px]"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <Button
              onClick={handleResumeDownload}
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-3 h-auto min-w-[200px]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}