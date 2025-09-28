"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/site.config"
import { Download, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCategoryProps {
  category: {
    name: string
    skills: readonly string[]
  }
  index: number
}

function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-card-foreground mb-4">
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function About() {
  const handleResumeDownload = () => {
    window.open(siteConfig.resumeUrl, "_blank")
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg border p-8 mb-8 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Professional Background
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {siteConfig.summary} I&apos;m passionate about creating efficient,
                  scalable solutions that make a real impact. With expertise across
                  the full development stack, I enjoy tackling complex problems and
                  turning ideas into reality.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I believe in writing clean, maintainable code and staying up-to-date
                  with the latest technologies and best practices. Whether working solo
                  or as part of a team, I&apos;m committed to delivering high-quality solutions
                  that exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    {siteConfig.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    {siteConfig.timezone}
                  </div>
                </div>
                <Button
                  onClick={handleResumeDownload}
                  size="lg"
                  className="text-lg px-6 py-3 h-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Placeholder for profile image */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/20"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-sm text-muted-foreground">
                      Profile Photo
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Skills Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.skills.categories.map((category, index) => (
                <SkillCategory key={category.name} category={category} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Additional Skills Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-muted/50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              All Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                ...siteConfig.skills.languages,
                ...siteConfig.skills.frameworks,
                ...siteConfig.skills.tools,
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}