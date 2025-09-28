"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/site.config"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { scrollToElement } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const elementId = href.slice(1)
      scrollToElement(elementId)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold hover:text-primary transition-colors"
          onClick={() => handleNavClick("#home")}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-2 p-4">
            {siteConfig.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium transition-colors hover:text-primary py-2"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}