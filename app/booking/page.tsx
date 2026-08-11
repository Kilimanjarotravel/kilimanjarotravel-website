'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import type { FormEvent } from 'react';

export default function Booking() {
  async function sendToBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = form.get('name');
    const email = form.get('email');
    const country = form.get('country');
    const service = form.get('service');
    const adults = form.get('adults');
    const children = form.get('children');
    const childrenAges = form.get('childrenAges');
    const arrivalDate = form.get('arrivalDate');
    const departureDate = form.get('departureDate');
    const travelStyle = form.get('travelStyle');
    const message = form.get('message');

    // Check that departure date is after arrival date
    if (
      arrivalDate &&
      departureDate &&
      new Date(departureDate as string) <= new Date(arrivalDate as string)
    ) {
      alert('Departure Date must be after Arrival Date.');
      return;
    }

    const bookingData = {
      name,
      email,
      country,
      service,
      adults,
      children,
      childrenAges,
      arrivalDate,
      departureDate,
      travelStyle,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || 'Failed to send booking request.');
        return;
      }

      const whatsappMessage = `
Hello Kilimanjaro Travel,

I would like to request a quotation.

Name: ${name}
Email: ${email}
Country: ${country}
Service: ${service}
Adults: ${adults}
Children: ${children || '0'}
Children's Ages: ${childrenAges || 'None'}
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

      alert(
        'Booking request sent successfully by Email and WhatsApp!'
      );

      formElement.reset();
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
    }
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
            onSubmit={sendToBooking}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >

            <div className="grid gap-5 md:grid-cols-2">

              {/* Full Name */}
              <input
                name="name"
                required
                className="rounded-xl border p-4"
                placeholder="Full Name"
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border p-4"
                placeholder="Email Address"
              />

              {/* Country */}
              <input
                name="country"
                required
                className="rounded-xl border p-4"
                placeholder="Country"
              />

              {/* Service */}
              <select
                name="service"
                required
                defaultValue=""
                className="rounded-xl border p-4"
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

              {/* Adults */}
              <input
                name="adults"
                type="number"
                min="1"
                required
                className="rounded-xl border p-4"
                placeholder="Number of Adults"
              />

              {/* Children */}
              <input
                name="children"
                type="number"
                min="0"
                defaultValue="0"
                className="rounded-xl border p-4"
                placeholder="Number of Children"
              />

              {/* Children Ages */}
              <input
                name="childrenAges"
                className="rounded-xl border p-4"
                placeholder="Children's Ages (if any)"
              />

              {/* Arrival Date */}
              <input
                name="arrivalDate"
                type="date"
                required
                className="rounded-xl border p-4"
                aria-label="Arrival Date"
              />

              {/* Departure Date */}
              <input
                name="departureDate"
                type="date"
                required
                className="rounded-xl border p-4"
                aria-label="Departure Date"
              />

              {/* Travel Style */}
              <select
                name="travelStyle"
                required
                defaultValue=""
                className="rounded-xl border p-4"
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

            {/* Trip Details */}
            <textarea
              name="message"
              required
              className="mt-5 h-40 w-full rounded-xl border p-4"
              placeholder="Tell us about your trip, preferred destinations, activities, accommodation, or any special requests"
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn-gold mt-6 w-full"
            >
              Send Request by Email & WhatsApp
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}