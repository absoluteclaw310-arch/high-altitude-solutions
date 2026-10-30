import Link from "next/link";

export default function WhyUsPage() {
  const reasons = [
    {
      title: "Insured & Licensed",
      description: "Full liability insurance and proper licensing for your peace of mind. We carry documentation on every job."
    },
    {
      title: "Local & Responsive",
      description: "Based in Schenectady, we serve the entire Capital Region with quick response times and flexible scheduling."
    },
    {
      title: "Experienced Operator",
      description: "Years of bucket truck experience across tree work, signage, and building maintenance. Safety-first approach."
    },
    {
      title: "Competitive Pricing",
      description: "No hidden fees. Straightforward quotes based on job scope. We beat most competitor pricing in the region."
    },
    {
      title: "Equipment Ready",
      description: "Our bucket truck reaches heights that ladders can\'t. Properly maintained equipment means reliable service."
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We don\'t leave until the job is done right. Your property is treated with respect — cleanup included."
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
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-accent">Why Choose Us?</h1>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            When you need work done at height, you need someone you can trust. Here is why businesses and homeowners choose High Altitude Solutions.
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
          <h2 className="text-3xl font-bold mb-4">Let us Work Together</h2>
          <p className="text-gray-300 mb-8">Ready to see the difference? Get in touch for a free consultation.</p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
