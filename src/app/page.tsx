import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Bucket truck with operator reaching high up"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-sky drop-shadow-lg">
            High Altitude Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Bucket Truck & Operator for Hire
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            You have got work that needs doing, but it is too high to reach. We bring the bucket truck and operator so you can finally get it done. Your project, your way — with the reach you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors"
            >
              What We Do
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-brand-sky text-brand-sky font-bold rounded-lg hover:bg-brand-sky hover:text-white transition-colors"
            >
              Hire Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-brand-blue">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-accent">Got Heights? We Got You.</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            You have the skills and the motivation. What you do not have is the reach. Hire our bucket truck and operator — we get you to the height so you can do the work yourself.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/tree-trimming.jpg"
                  alt="Tree trimming with bucket truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Tree Trimming</h3>
                <p className="text-gray-300">Branches getting out of hand? We allow you to trim what you cannot reach. We do not cut trees down — we help you trim them up.</p>
              </div>
            </div>

            <div className="rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/signage.jpg"
                  alt="Sign installation with bucket truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Signage Work</h3>
                <p className="text-gray-300">Install, repair, remove, or upgrade signs. We are a sign company with a bucket truck — height is not a problem.</p>
              </div>
            </div>

            <div className="rounded-lg bg-brand-dark border border-brand-sky/20 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/maintenance.jpg"
                  alt="Exterior maintenance with bucket truck"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-sky">Yearly Maintenance</h3>
                <p className="text-gray-300">Gutters, facades, windows, roofs — all the yearly upkeep you have been putting off because it is too high. We give you the reach to finally knock it out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-accent">Serving Schenectady & Capital Region</h2>
          <p className="text-xl text-gray-300 mb-8">
            Homeowner with a to-do list? Business with a sign project? Whatever you need to reach, we are here to make it possible. Truck and operator ready when you are.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-sky text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-colors"
          >
            Schedule Your Job
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>\u0026copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/services" className="hover:text-brand-sky">Services</Link>
          <Link href="/contact" className="hover:text-brand-sky">Contact</Link>
          <Link href="/why-us" className="hover:text-brand-sky">Why Us</Link>
        </div>
      </footer>
    </div>
  );
}
