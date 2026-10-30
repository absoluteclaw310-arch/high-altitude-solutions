import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      image: "/images/tree-trimming.jpg",
      title: "Tree Trimming",
      description: "Overgrown branches blocking your view or threatening your roof? We allow you to trim what you cannot reach. We do not cut trees down; we assist you to clean them up.",
      features: ["High branch trimming", "Deadwood removal", "Canopy shaping", "Storm damage cleanup"]
    },
    {
      image: "/images/signage.jpg",
      title: "Signage Install, Repair \u0026 Removal",
      description: "We are a sign company with a bucket truck. Whether you need a new storefront sign, a pole sign repaired, or an old sign taken down, we handle the height so you do not have to.",
      features: ["New sign installation", "Pole sign repair", "Banner hanging", "Sign removal \u0026 upgrades"]
    },
    {
      image: "/images/maintenance.jpg",
      title: "Yearly Exterior Maintenance",
      description: "Those gutters and facades are not going to clean themselves. We help homeowners and businesses knock out the yearly maintenance that is just too high to reach.",
      features: ["Gutter cleaning", "Facade washing", "Window cleaning", "Roofline inspection"]
    },
    {
      image: "/images/hero.jpg",
      title: "Custom Jobs",
      description: "Got something weird? Holiday lights, aerial photography, event rigging — if you need height and a steady hand, our truck and operator are ready. You rent the lift, we bring the reach.",
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-accent">Hire the Truck, Get the Height</h1>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            You have the skills and the motivation — you just lack the reach. Our bucket truck and operator come to you so you can finally get your high-up work done.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to get up there?</h2>
          <p className="text-gray-300 mb-8">Tell us what you need done. We will tell you when we can be there with the truck.</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors"
          >
            Request the Truck
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>0026copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
      </footer>
    </div>
  );
}
