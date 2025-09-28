"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="text-9xl md:text-[12rem] font-bold text-primary/20 mb-4">
            404
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let me help you get back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <Button size="lg" className="text-lg px-8 py-3 h-auto">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 h-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              You might be looking for:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#projects"
                className="text-sm text-primary hover:underline"
              >
                My Projects
              </Link>
              <Link
                href="/#about"
                className="text-sm text-primary hover:underline"
              >
                About Me
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-primary hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}