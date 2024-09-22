import Link from 'next/link'
import {
  BarChart2,
  LineChart,
  PieChart,
  Users,
  Settings,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features for Data-Driven Decisions
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
              Discover how Nullchemy Analytics empowers your business with
              cutting-edge analytics tools and insights.
            </p>
          </div>
        </section>

        <section className="py-12 bg-light dark:bg-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<BarChart2 className="w-12 h-12 text-primary" />}
                title="Real-time Analytics"
                description="Monitor your website's performance as it happens. Our real-time analytics provide instant insights into user behavior, allowing you to make quick, informed decisions."
              />
              <FeatureCard
                icon={<LineChart className="w-12 h-12 text-primary" />}
                title="Custom Reports"
                description="Create tailored reports that focus on the metrics that matter most to your business. Schedule automated reports to keep your team informed and aligned."
              />
              <FeatureCard
                icon={<PieChart className="w-12 h-12 text-primary" />}
                title="Advanced Data Visualization"
                description="Transform complex data sets into easy-to-understand visual representations. Our intuitive charts and graphs make it simple to spot trends and patterns."
              />
              <FeatureCard
                icon={<Users className="w-12 h-12 text-primary" />}
                title="User Behavior Analysis"
                description="Gain deep insights into how users interact with your platform. Track user journeys, identify pain points, and optimize the user experience to boost engagement and conversions."
              />
              <FeatureCard
                icon={<Settings className="w-12 h-12 text-primary" />}
                title="Customizable Dashboard"
                description="Build a dashboard that reflects your unique business needs. Drag-and-drop widgets, set custom date ranges, and focus on the KPIs that drive your success."
              />
              <FeatureCard
                icon={<Zap className="w-12 h-12 text-primary" />}
                title="Predictive Analytics"
                description="Leverage the power of AI to forecast future trends. Our predictive analytics help you anticipate market changes and make proactive business decisions."
              />
              <FeatureCard
                icon={<Shield className="w-12 h-12 text-primary" />}
                title="Data Security & Privacy"
                description="Rest easy knowing your data is protected. We employ industry-leading security measures and ensure full compliance with data privacy regulations like GDPR."
              />
              <FeatureCard
                icon={<Globe className="w-12 h-12 text-primary" />}
                title="Multi-platform Tracking"
                description="Track user behavior across multiple platforms and devices. Get a holistic view of your audience's interactions with your brand, both online and offline."
              />
              <FeatureCard
                icon={<Smartphone className="w-12 h-12 text-primary" />}
                title="Mobile App Analytics"
                description="Optimize your mobile app performance with dedicated mobile analytics. Track app usage, user retention, and in-app behavior to improve your mobile strategy."
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Harness the Power of Data?
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

        <section className="py-12 bg-light dark:bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FAQItem
                question="How does Nullchemy Analytics differ from other analytics tools?"
                answer="Nullchemy Analytics offers a unique combination of real-time data processing, AI-powered insights, and user-friendly customization. Our platform is designed to be both powerful for data analysts and accessible for business users."
              />
              <FAQItem
                question="Is my data safe with Nullchemy Analytics?"
                answer="Absolutely. We prioritize data security and privacy, employing industry-standard encryption, regular security audits, and strict access controls. We're also fully compliant with GDPR and other data protection regulations."
              />
              <FAQItem
                question="Can I integrate Nullchemy Analytics with my existing tools?"
                answer="Yes, Nullchemy Analytics offers a wide range of integrations with popular business tools and platforms. Our API also allows for custom integrations to fit your specific needs."
              />
              <FAQItem
                question="Do you offer customer support?"
                answer="We provide 24/7 customer support via chat, email, and phone. Our team of analytics experts is always ready to help you make the most of our platform."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
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

function FAQItem({ question, answer }: any) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-2">{question}</h4>
      <p className="text-muted">{answer}</p>
    </div>
  )
}
