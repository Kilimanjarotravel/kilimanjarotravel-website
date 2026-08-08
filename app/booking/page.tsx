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

const adults = form.get('adults');
const children = form.get('children');
const childrenAges = form.get('childrenAges');

const arrivalDate = form.get('arrivalDate');
const departureDate = form.get('departureDate');

const travelStyle = form.get('travelStyle');
const message = form.get('message');

    const whatsappMessage = `
Hello Kilimanjaro Travel,

I would like to request a quotation.

Name: ${name}
Email: ${email}
WhatsApp Number: ${phone}
Country: ${country}
Service: ${service}
Adults: ${adults}
Children: ${children}
Children's Ages: ${childrenAges}
Arrival Date: ${arrivalDate}
Departure Date: ${departureDate}
Travel Style: ${travelStyle}

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
  subtitle="Tell us about your travel plans and our team will prepare a personalized itinerary and quotation for you."
  image="/images/booking-hero.jpg"
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
  <option>Honeymoon Package</option>
  <option>Mountain Adventure</option>
  <option>Day Trip</option>
  <option>Local Tour</option>
  <option>Car Hire</option>
  <option>Airport Transfer</option>
</select>

              <input
  name="adults"
  type="number"
  min="1"
  required
  className="rounded-xl border p-4"
  placeholder="Number of Adults"
/>

<input
  name="children"
  type="number"
  min="0"
  className="rounded-xl border p-4"
  placeholder="Number of Children"
/>

<input
  name="childrenAges"
  className="rounded-xl border p-4"
  placeholder="Children's Ages (if any)"
/>

              <input
  name="arrivalDate"
  type="date"
  required
  aria-label="Arrival Date"
  className="rounded-xl border p-4"
/>

<input
  name="departureDate"
  type="date"
  required
  aria-label="Departure Date"
  className="rounded-xl border p-4"
/>

              <select
  name="travelStyle"
  required
  className="rounded-xl border p-4"
  defaultValue=""
>
  <option value="" disabled>
    Select Travel Style
  </option>
  <option>Budget</option>
  <option>Mid-Range</option>
  <option>Luxury</option>
  <option>Not Sure</option>
</select>

</div>

<textarea
  name="message"
  required
  className="mt-5 h-40 w-full rounded-xl border p-4"
  placeholder="Tell us about your trip, preferred destinations, activities, accommodation, or any special requests"
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