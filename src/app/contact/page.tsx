'use client';

import Link from "next/link";
import { useState } from "react";

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrCyb4A2mhVkhf1rP94IIJ8yHSDhJx49vEdhsB99yNY8geYIJexLG2ZwiZn7iJK0g/exec';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      });

      setStatus('success');
      setStatusMessage('Thank you! We will contact you shortly to discuss your job.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setStatus('error');
      setStatusMessage('Something went wrong. Please call 518-400-2009 directly.');
    }
  };

  return (
    <div className="min-h-screen">
      <header className="py-6 px-4 border-b border-brand-blue">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-brand-sky">High Altitude Solutions</Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-brand-sky">Home</Link>
            <Link href="/services" className="hover:text-brand-sky">Services</Link>
            <Link href="/why-us" className="hover:text-brand-sky">Why Us</Link>
            <Link href="/contact" className="text-brand-accent">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-brand-accent">Hire the Truck</h1>
          <p className="text-center text-gray-300 mb-12">
            Tell us what you need done. We will bring the bucket truck and operator.
          </p>

          {status === 'success' && (
            <div className="mb-8 p-4 bg-green-900/30 border border-green-500/30 rounded-lg text-center">
              <p className="text-green-400 font-bold">{statusMessage}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-center">
              <p className="text-red-400 font-bold">{statusMessage}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-brand-sky">Get In Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">518-400-2009</p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1">Business</h3>
                  <p className="text-gray-300">Sign Bandits</p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1">Location</h3>
                  <p className="text-gray-300">1480 State St<br/>Schenectady, NY 12304</p>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-1">Hours</h3>
                  <p className="text-gray-300">Mon–Fri: 7:00 AM – 6:00 PM<br/>Saturday: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-sky/30 text-white focus:border-brand-sky focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-sky/30 text-white focus:border-brand-sky focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-sky/30 text-white focus:border-brand-sky focus:outline-none"
                  placeholder="(518) XXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="service">What Do You Need Done?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-sky/30 text-white focus:border-brand-sky focus:outline-none"
                >
                  <option value="">Select a job type...</option>
                  <option value="tree-trimming">Tree Trimming</option>
                  <option value="signage">Signage Work (Install/Repair/Remove)</option>
                  <option value="maintenance">Yearly Exterior Maintenance</option>
                  <option value="custom">Custom Job</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="message">Tell Us About the Job *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-sky/30 text-white focus:border-brand-sky focus:outline-none"
                  placeholder="What do you need done? How high? Any details?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Request the Truck'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-brand-blue text-center text-gray-400">
        <p>0026copy; {new Date().getFullYear()} High Altitude Solutions. All rights reserved.</p>
        <p className="mt-2">518-400-2009 | Schenectady, NY</p>
      </footer>
    </div>
  );
}
