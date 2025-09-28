"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/site.config"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    problem: string
    solution: string
    impact: string
    technologies: readonly string[]
    githubUrl: string
    demoUrl: string
    imageUrl: string
    imageAlt: string
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {project.name}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Problem → Solution → Impact */}
        <div className="space-y-3 mb-4 text-sm">
          <div>
            <span className="font-medium text-destructive">Problem:</span>{" "}
            <span className="text-muted-foreground">{project.problem}</span>
          </div>
          <div>
            <span className="font-medium text-primary">Solution:</span>{" "}
            <span className="text-muted-foreground">{project.solution}</span>
          </div>
          <div>
            <span className="font-medium text-green-600 dark:text-green-400">Impact:</span>{" "}
            <span className="text-muted-foreground">{project.impact}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, "_blank")}
            className="flex-1"
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(project.demoUrl, "_blank")}
            className="flex-1"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on that showcase my skills
            and problem-solving approach. Each project represents a unique challenge
            and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(siteConfig.social.github, "_blank")}
            className="text-lg px-8 py-3 h-auto"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}