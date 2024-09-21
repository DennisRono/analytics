'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  BarChart2,
  LineChart,
  PieChart,
  Settings,
  Users,
  Moon,
  Sun,
} from 'lucide-react'

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'light' : 'dark'
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border-color">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Nullchemy Analytics
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/features"
              className="hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-light dark:bg-dark"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <Link
              href="/login"
              className="hidden sm:inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
            >
              Log In
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Analytics for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto">
              Gain valuable insights and make data-driven decisions with
              Nullchemy Analytics.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>

        <section className="py-12 bg-light dark:bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="w-10 h-10 text-primary" />}
                title="Real-time Analytics"
                description="Monitor your website's performance in real-time with our advanced tracking system."
              />
              <FeatureCard
                icon={<LineChart className="w-10 h-10 text-primary" />}
                title="Custom Reports"
                description="Create and schedule custom reports tailored to your specific business needs."
              />
              <FeatureCard
                icon={<PieChart className="w-10 h-10 text-primary" />}
                title="Data Visualization"
                description="Transform complex data into easy-to-understand visual representations."
              />
              <FeatureCard
                icon={<Users className="w-10 h-10 text-primary" />}
                title="User Behavior Analysis"
                description="Understand your users' journey and optimize their experience on your platform."
              />
              <FeatureCard
                icon={<Settings className="w-10 h-10 text-primary" />}
                title="Customizable Dashboard"
                description="Tailor your dashboard to focus on the metrics that matter most to your business."
              />
              <FeatureCard
                icon={<BarChart2 className="w-10 h-10 text-primary" />}
                title="Predictive Analytics"
                description="Leverage AI-powered insights to forecast trends and make proactive decisions."
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Nullchemy Analytics to
              drive growth and success.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-light dark:bg-dark border-t border-border-color py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="hover:text-primary transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="hover:text-primary transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="hover:text-primary transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-primary transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="hover:text-primary transition-colors"
                  >
                    Press
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="hover:text-primary transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    className="hover:text-primary transition-colors"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="hover:text-primary transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gdpr"
                    className="hover:text-primary transition-colors"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border-color text-center text-muted">
            <p>
              &copy; {new Date().getFullYear()} Nullchemy Analytics. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  )
}
