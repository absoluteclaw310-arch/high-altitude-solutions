import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/bucket-truck-hero.jpg"
            alt="High Altitude Solutions bucket truck with extended boom"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(15,27,46,0.95)] via-[rgba(30,58,95,0.75)] to-[rgba(15,27,46,0.95)]" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-sky drop-shadow-lg">
            High Altitude Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Bucket Truck & Operator for Hire
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            You have got work that needs doing, but it is too high to reach. We bring the bucket truck and operator so you can finally get it done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="btn-primary px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg"
            >
              What We Do
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-brand-sky text-brand-sky font-bold rounded-lg hover:bg-brand-sky hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Hire Us
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Preview */}
      <section className="py-20 px-4 bg-brand-blue pattern-overlay">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-brand-sky to-brand-accent mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-accent">Got Heights? We Got You.</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              You have the skills and the motivation. What you do not have is the reach. Hire our bucket truck and operator.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              image="/images/bucket-truck-tree-trimming.jpg"
              title="Tree Trimming"
              description="Branches getting out of hand? We allow you to trim what you cannot reach. We do not cut trees down — we help you trim them up."
            />
            <ServiceCard 
              image="/images/bucket-truck-signage.jpg"
              title="Signage Work"
              description="Install, repair, remove, or upgrade signs. We are a sign company with a bucket truck — height is not a problem."
            />
            <ServiceCard 
              image="/images/bucket-truck-maintenance.jpg"
              title="Yearly Maintenance"
              description="Gutters, facades, windows, roofs — all the yearly upkeep you have been putting off because it is too high. We give you the reach to finally knock it out."
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-24 h-1 bg-gradient-to-r from-brand-sky to-brand-accent mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-accent">Serving Schenectady & Capital Region</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Homeowner with a to-do list? Business with a sign project? Whatever you need to reach, we are here to make it possible.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-sky text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Job
          </Link>
        </div>
      </section>

      <div className="section-divider" />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/services" className="hover:text-brand-sky transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-brand-sky transition-colors">Contact</Link>
          <Link href="/why-us" className="hover:text-brand-sky transition-colors">Why Us</Link>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="service-card rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-brand-sky">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
