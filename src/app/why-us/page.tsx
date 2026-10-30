import Link from "next/link";

export default function WhyUsPage() {
  const reasons = [
    {
      title: "Insured \u0026 Licensed",
      description: "You are trusting us with your property. We carry full liability insurance and proper licensing so you can focus on your work, not worry about risk."
    },
    {
      title: "Local \u0026 Responsive",
      description: "We are based in Schenectady and serve the Capital Region. Quick response times and flexible scheduling mean your project stays on track."
    },
    {
      title: "Experienced Operator",
      description: "Our operator knows bucket trucks inside and out. Years of experience means you get a steady platform to do your work safely and efficiently."
    },
    {
      title: "Straightforward Pricing",
      description: "No hidden fees, no surprises. You tell us what you need to reach, we give you a fair quote. We beat most competitor pricing in the region."
    },
    {
      title: "Equipment Ready",
      description: "Our bucket truck reaches what ladders cannot. Properly maintained and ready to roll. You do not need to rent anything — we bring the lift that lets you do the work."
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We do not leave until you have gotten the reach you needed. Your property is treated with respect and cleanup is included."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="py-6 px-4 border-b border-brand-blue">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand-sky">High Altitude Solutions</Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-brand-sky">Home</Link>
            <Link href="/services" className="hover:text-brand-sky">Services</Link>
            <Link href="/why-us" className="text-brand-accent">Why Us</Link>
            <Link href="/contact" className="hover:text-brand-sky">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-accent">Why Rent Our Bucket Truck?</h1>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            You have got the tools, the time, and the skills. The only thing missing is the reach. Here is why Schenectady homeowners and businesses choose us to get them up there.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-6 rounded-lg bg-brand-blue border border-brand-sky/20">
                <h3 className="text-xl font-bold mb-3 text-brand-sky">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let Us Help You Get It Done</h2>
          <p className="text-gray-300 mb-8">Ready to finally reach that project? Get in touch for a free quote.</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>0026copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
      </footer>
    </div>
  );
}
