'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, Moon, Sun } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTheme } from '@/store/slices/themeSlice'

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true)
  const theme: any = useAppSelector((state: any) => state.theme).theme

  const dispatch = useAppDispatch()

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
            <Link href="/pricing" className="text-primary font-semibold">
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
              onClick={() => {
                dispatch(
                  setTheme({ theme: theme === 'light' ? 'dark' : 'light' })
                )
              }}
              className="p-2 rounded-full bg-light dark:bg-dark"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
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

      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-12 text-center max-w-3xl mx-auto">
            Choose the plan that best fits your needs. All plans include our
            core features, 24/7 support, and a 30-day money-back guarantee.
          </p>

          <div className="flex justify-center items-center mb-12">
            <span
              className={`mr-3 ${isAnnual ? 'text-muted' : 'font-semibold'}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`ml-3 ${isAnnual ? 'font-semibold' : 'text-muted'}`}
            >
              Annual <span className="text-success">(Save 20%)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price={isAnnual ? 29 : 39}
              period={isAnnual ? '/month billed annually' : '/month'}
              description="Perfect for small businesses and startups"
              features={[
                '100,000 monthly page views',
                'Real-time analytics',
                'Custom dashboard',
                'Basic reporting',
                'Email support',
              ]}
              ctaText="Start Free Trial"
              ctaLink="/signup?plan=starter"
            />
            <PricingCard
              title="Pro"
              price={isAnnual ? 79 : 99}
              period={isAnnual ? '/month billed annually' : '/month'}
              description="Ideal for growing companies"
              features={[
                '500,000 monthly page views',
                'Advanced data visualization',
                'Custom reports',
                'User behavior analysis',
                'Priority email & chat support',
              ]}
              ctaText="Start Free Trial"
              ctaLink="/signup?plan=pro"
              highlighted={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period="tailored to your needs"
              description="For large-scale applications"
              features={[
                'Unlimited page views',
                'Predictive analytics',
                'Dedicated account manager',
                'Custom integrations',
                '24/7 phone & email support',
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
            />
          </div>
        </div>
      </main>

      <section className="py-12 bg-light dark:bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FAQItem
              question="Can I change my plan later?"
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
            />
            <FAQItem
              question="What happens after my free trial?"
              answer="After your 30-day free trial, you'll be automatically subscribed to the plan you chose. You can cancel anytime before the trial ends."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, contact our support team for a full refund."
            />
            <FAQItem
              question="Is there a long-term contract?"
              answer="No, all our plans are month-to-month or annual subscriptions. You can cancel at any time without penalty."
            />
          </div>
        </div>
      </section>

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

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaLink,
  highlighted = false,
}: any) {
  return (
    <div
      className={`bg-background rounded-lg shadow-md p-8 flex flex-col ${
        highlighted ? 'border-2 border-primary' : ''
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">
        {typeof price === 'number' ? `$${price}` : price}
        <span className="text-lg font-normal text-muted"> {period}</span>
      </div>
      <p className="text-muted mb-6">{description}</p>
      <ul className="mb-8 flex-grow">
        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="w-5 h-5 text-success mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaLink}
        className={`w-full text-center py-2 rounded-md transition-colors ${
          highlighted
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'bg-muted hover:bg-muted/80'
        }`}
      >
        {ctaText}
      </Link>
    </div>
  )
}

function FAQItem({ question, answer }: any) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-2">{question}</h4>
      <p className="text-muted">{answer}</p>
    </div>
  )
}
