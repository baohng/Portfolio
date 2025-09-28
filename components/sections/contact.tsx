"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/site.config"
import { validateEmail } from "@/lib/utils"
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    if (!validateEmail(formData.email)) {
      setSubmitStatus("error")
      setIsSubmitting(false)
      return
    }

    // Since this is client-side only, we'll create a mailto link
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    try {
      window.location.href = mailtoLink
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  const socialLinks = [
    {
      name: "Email",
      url: `mailto:${siteConfig.email}`,
      icon: Mail,
      label: siteConfig.email,
    },
    {
      name: "LinkedIn",
      url: siteConfig.social.linkedin,
      icon: Linkedin,
      label: "LinkedIn Profile",
    },
    {
      name: "GitHub",
      url: siteConfig.social.github,
      icon: Github,
      label: "GitHub Profile",
    },
    ...(siteConfig.social.twitter
      ? [
          {
            name: "Twitter",
            url: siteConfig.social.twitter,
            icon: Twitter,
            label: "Twitter Profile",
          },
        ]
      : []),
  ]

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card rounded-lg border p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Let&apos;s Connect
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <span>{siteConfig.timezone}</span>
                </div>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <link.icon className="mr-3 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.label}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-lg border p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">
                Send Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200">
                    Your default email client should open with the message ready to send!
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200">
                    Please fill in all required fields with valid information.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full text-lg px-6 py-3 h-auto"
                >
                  {isSubmitting ? (
                    "Preparing Message..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  This form will open your default email client with the message ready to send.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}