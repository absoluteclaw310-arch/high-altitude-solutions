import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="High Altitude Solutions bucket truck with extended boom"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(15,27,46,0.95)] via-[rgba(30,58,95,0.75)] to-[rgba(15,27,46,0.95)]" />
        
        {/* Floating accent elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-accent rounded-full opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-sky rounded-full opacity-40 animate-float" style={{'animationDelay': '1s'} as React.CSSProperties} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-brand-accent rounded-full opacity-50 animate-float" style={{'animationDelay': '2s'} as React.CSSProperties} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-sky rounded-full opacity-70 animate-float" style={{'animationDelay': '0.5s'} as React.CSSProperties} />
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-brand-accent rounded-full opacity-40 animate-float" style={{'animationDelay': '1.5s'} as React.CSSProperties} />
        
        {/* Hero content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-sky drop-shadow-lg">
            High Altitude Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200 font-light">
            Bucket Truck & Operator for Hire
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            You have got work that needs doing, but it is too high to reach. We bring the bucket truck and operator so you can finally get it done. Your project, your way — with the reach you need.
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-sky/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-brand-sky rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Services Preview */}
      <section className="py-20 px-4 bg-brand-blue pattern-overlay">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-1 bg-gradient-to-r from-brand-sky to-brand-accent mx-auto mb-6 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-accent">Got Heights? We Got You.</h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              You have the skills and the motivation. What you do not have is the reach. Hire our bucket truck and operator — we get you to the height so you can do the work yourself.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/tree-trimming.jpg"
                  alt="Tree trimming with bucket truck"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Tree Trimming</h3>
                <p className="text-gray-300 leading-relaxed">Branches getting out of hand? We allow you to trim what you cannot reach. We do not cut trees down — we help you trim them up.</p>
              </div>
            </div>

            <div className="service-card rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/signage.jpg"
                  alt="Sign installation with bucket truck"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Signage Work</h3>
                <p className="text-gray-300 leading-relaxed">Install, repair, remove, or upgrade signs. We are a sign company with a bucket truck — height is not a problem.</p>
              </div>
            </div>

            <div className="service-card rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/maintenance.jpg"
                  alt="Exterior maintenance with bucket truck"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Yearly Maintenance</h3>
                <p className="text-gray-300 leading-relaxed">Gutters, facades, windows, roofs — all the yearly upkeep you have been putting off because it is too high. We give you the reach to finally knock it out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-20 px-4 text-center relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="w-24 h-1 bg-gradient-to-r from-brand-sky to-brand-accent mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-accent">Serving Schenectady & Capital Region</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Homeowner with a to-do list? Business with a sign project? Whatever you need to reach, we are here to make it possible. Truck and operator ready when you are.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-sky text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Job
          </Link>
        </div>
      </section>

      {/* Section Divider */}
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
