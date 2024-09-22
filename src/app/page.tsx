import Link from 'next/link'
import { BarChart2, LineChart, PieChart, Settings, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
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
