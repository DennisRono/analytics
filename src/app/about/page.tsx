import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Users, BarChart, Globe, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PlaceHolder from '@/assets/svg/placeholder.svg'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="py-12 md:py-20 bg-light dark:bg-dark">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
              About Nullchemy Analytics
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-12 text-center max-w-3xl mx-auto">
              Empowering businesses with data-driven insights since 2015
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={PlaceHolder}
                  alt="Nullchemy Analytics Team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-6">
                  At Nullchemy Analytics, we believe that data has the power to
                  transform businesses. Our mission is to make advanced
                  analytics accessible to companies of all sizes, empowering
                  them to make informed decisions and drive growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn more about our approach
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Users className="w-12 h-12 text-primary" />}
                title="Customer-Centric"
                description="We put our customers first, always striving to exceed their expectations and deliver exceptional value."
              />
              <ValueCard
                icon={<BarChart className="w-12 h-12 text-primary" />}
                title="Data-Driven"
                description="We believe in the power of data to drive informed decisions and create meaningful impact."
              />
              <ValueCard
                icon={<Globe className="w-12 h-12 text-primary" />}
                title="Innovation"
                description="We continuously push the boundaries of what's possible in analytics, embracing new technologies and methodologies."
              />
              <ValueCard
                icon={<Award className="w-12 h-12 text-primary" />}
                title="Integrity"
                description="We uphold the highest standards of ethics and transparency in all our operations and interactions."
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-light dark:bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              <Timeline />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="Dennis Kibet"
                role="CEO & Co-founder"
                image={PlaceHolder}
                bio="Dennis brings over 15 years of experience in data analytics and business intelligence. He's passionate about helping businesses leverage data to drive growth."
              />
              <TeamMember
                name="John Smith"
                role="CTO & Co-founder"
                image={PlaceHolder}
                bio="With a background in machine learning and AI, John leads our technology initiatives, ensuring Nullchemy stays at the forefront of analytics innovation."
              />
              <TeamMember
                name="Emily Chen"
                role="Chief Data Scientist"
                image={PlaceHolder}
                bio="Emily's expertise in statistical modeling and predictive analytics helps shape our product's advanced features and capabilities."
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-light dark:bg-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate
              about data and analytics. Check out our open positions and help us
              shape the future of business intelligence.
            </p>
            <Link
              href="/careers"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ValueCard({ icon, title, description }: any) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  )
}

function Timeline() {
  const events = [
    {
      year: 2015,
      description: 'Nullchemy Analytics founded by Jane Doe and John Smith',
    },
    {
      year: 2017,
      description: 'Launched our first product, reaching 100 customers',
    },
    {
      year: 2019,
      description: 'Expanded team to 50 employees and opened new office',
    },
    {
      year: 2021,
      description: 'Introduced AI-powered predictive analytics features',
    },
    { year: 2023, description: 'Reached 10,000 customers worldwide' },
  ]

  return (
    <div className="relative">
      {events.map((event, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            {event.year}
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-lg">{event.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-primary"></div>
    </div>
  )
}

function TeamMember({ name, role, image, bio }: any) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-primary mb-2">{role}</p>
      <p className="text-muted">{bio}</p>
    </div>
  )
}
