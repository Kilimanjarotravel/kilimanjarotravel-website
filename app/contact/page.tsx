'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import type { FormEvent } from 'react';

export default function Contact() {
  async function sendToEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const data = {
    name: form.get('name'),
    email: form.get('email'),
    country: form.get('country'),
    service: form.get('service'),
    message: form.get('message'),
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error || 'Failed to send message.');
      return;
    }

    alert('Message sent successfully! Thank you for contacting us.');

    event.currentTarget.reset();
  } catch (error) {
    console.error(error);
    alert('Something went wrong. Please try again.');
  }
}

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
  title="Contact Us"
  subtitle="We're here to help you plan your perfect Tanzania adventure. Get in touch with our travel specialists today."
  image="/images/contact-hero.jpg"
/>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="section-title">Contact Kilimanjaro Travel</h2>

            <div className="mt-6 space-y-4 text-lg leading-8">
              <p><strong>📱 WhatsApp:</strong> +255 759 273 339</p>
              <p><strong>📧 Email:</strong> kilimanjarotravel.tz@gmail.com</p>
              <p><strong>📍 Location:</strong> Arusha, Tanzania</p>

              <a
                href="https://maps.app.goo.gl/oDtj4B18EShgzy5CA?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-forest px-6 py-3 font-bold text-white"
              >
                📍 View Our Office on Google Maps
              </a>
            </div>
          </div>

          <form
  onSubmit={sendToEmail}
  className="card p-8"
>
  <input
    name="name"
    required
    className="mb-4 w-full rounded-xl border p-4"
    placeholder="Full Name"
  />

  <input
    name="email"
    type="email"
    required
    className="mb-4 w-full rounded-xl border p-4"
    placeholder="Email Address"
  />

  <input
    name="country"
    required
    className="mb-4 w-full rounded-xl border p-4"
    placeholder="Country"
  />

  <select
    name="service"
    required
    className="mb-4 w-full rounded-xl border p-4"
    defaultValue=""
  >
    <option value="" disabled>
      Select Travel Service
    </option>
    <option>Safari</option>
    <option>Kilimanjaro Trek</option>
    <option>Mountain Adventure</option>
    <option>Day Trip</option>
    <option>Local Tour</option>
    <option>Zanzibar Holiday</option>
    <option>Car Hire</option>
    <option>Airport Transfer</option>
    <option>Honeymoon Package</option>
  </select>

  <textarea
    name="message"
    required
    className="mb-4 h-36 w-full rounded-xl border p-4"
    placeholder="How can we help you?"
  />

  <button
  type="submit"
  className="btn-gold w-full"
>
  Send Message
</button>
</form>
        </div>
      </section>

      <Footer />
    </main>
  );
}