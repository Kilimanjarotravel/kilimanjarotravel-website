'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import type { FormEvent } from 'react';

export default function Booking() {
  function sendToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const phone = form.get('phone');
    const country = form.get('country');
    const service = form.get('service');
    const travelers = form.get('travelers');
    const travelDate = form.get('travelDate');
    const budget = form.get('budget');
    const message = form.get('message');

    const whatsappMessage = `
Hello Kilimanjaro Travel,

I would like to request a quotation.

Name: ${name}
Email: ${email}
WhatsApp Number: ${phone}
Country: ${country}
Service: ${service}
Number of Travelers: ${travelers}
Travel Date: ${travelDate}
Budget Range: ${budget}

Trip Details:
${message}
    `;

    const whatsappUrl =
      'https://wa.me/255759273339?text=' +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, '_blank');
  }

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Request a Quote"
        subtitle="Tell us about your dream Tanzania trip and our team will prepare a tailor-made offer."
        image="/images/landcruiser.jpeg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <form
            onSubmit={sendToWhatsApp}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                className="rounded-xl border p-4"
                placeholder="Full Name"
              />

              <input
                name="email"
                type="email"
                required
                className="rounded-xl border p-4"
                placeholder="Email Address"
              />

              <input
                name="phone"
                required
                className="rounded-xl border p-4"
                placeholder="WhatsApp Number"
              />

              <input
                name="country"
                required
                className="rounded-xl border p-4"
                placeholder="Country"
              />

              <select
                name="service"
                required
                className="rounded-xl border p-4"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Travel Service
                </option>
                <option>Safari</option>
                <option>Kilimanjaro Trek</option>
                <option>Zanzibar Holiday</option>
                <option>Car Hire</option>
                <option>Honeymoon Package</option>
              </select>

              <input
                name="travelers"
                type="number"
                min="1"
                required
                className="rounded-xl border p-4"
                placeholder="Number of Travelers"
              />

              <input
                name="travelDate"
                type="date"
                required
                className="rounded-xl border p-4"
              />

              <input
                name="budget"
                className="rounded-xl border p-4"
                placeholder="Budget Range"
              />
            </div>

            <textarea
              name="message"
              required
              className="mt-5 h-40 w-full rounded-xl border p-4"
              placeholder="Tell us about your trip"
            />

            <button type="submit" className="btn-gold mt-6 w-full">
              Send Request on WhatsApp
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}