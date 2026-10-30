import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      image: "/images/tree-trimming.jpg",
      title: "Tree Trimming & Pruning",
      description: "Professional arborist services at height. We handle overgrown branches, deadwood removal, and precision pruning that keeps your trees healthy and your property safe.",
      features: ["Dead branch removal", "Canopy shaping", "Storm damage cleanup", "Seasonal maintenance"]
    },
    {
      image: "/images/signage.jpg",
      title: "Signage Installation",
      description: "From storefront awnings to tall pole signs, we install and repair signage safely at any height. We work with businesses, property managers, and sign shops.",
      features: ["Storefront signs", "Pole/pylon signs", "Banner installation", "Sign repair & removal"]
    },
    {
      image: "/images/maintenance.jpg",
      title: "Exterior Building Maintenance",
      description: "Gutter cleaning, facade washing, window cleaning, and other hard-to-reach exterior upkeep for commercial and residential properties.",
      features: ["Gutter cleaning", "Facade/power washing", "Window cleaning", "Roof inspection"]
    },
    {
      image: "/images/hero.jpg",
      title: "Custom Projects",
      description: "Have something unique? Holiday lighting installation, aerial photography platforms, event rigging — if it needs height, we can help.",
      features: ["Holiday lighting", "Aerial access", "Event support", "Consultation"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 border-b border-brand-blue">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand-sky">High Altitude Solutions</Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-brand-sky">Home</Link>
            <Link href="/services" className="text-brand-accent">Services</Link>
            <Link href="/why-us" className="hover:text-brand-sky">Why Us</Link>
            <Link href="/contact" className="hover:text-brand-sky">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-accent">Our Services</h1>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Professional bucket truck services for residential, commercial, and industrial needs throughout the Capital Region.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg bg-brand-blue border border-brand-sky/20 hover:border-brand-accent transition-colors overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-3 text-brand-sky">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-brand-accent">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-blue text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
          <p className="text-gray-300 mb-8">Contact us for a free estimate on your next project.</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
      </footer>
    </div>
  );
}
