import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-36">
          <h1 className="text-4xl font-bold text-forest">
            Privacy Policy
          </h1>

          <p className="mt-3 text-gray-500">
            Last updated: August 2026
          </p>

          <div className="mt-10 space-y-8 leading-7">
            <section>
              <h2 className="text-2xl font-bold text-forest">
                1. Introduction
              </h2>
              <p className="mt-3">
                Kilimanjaro Travel respects your privacy and is committed to
                protecting the personal information you provide when using our
                website and travel services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                When you contact us or submit a booking enquiry, we may collect
                information such as your name, email address, phone or WhatsApp
                number, country, travel dates, number of travellers, and trip
                preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information you provide to respond to enquiries,
                prepare travel quotations, arrange bookings, communicate with
                you, and provide the travel services you request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                4. WhatsApp and Email
              </h2>
              <p className="mt-3">
                If you choose to contact us through WhatsApp or email, your
                information may be processed through those communication
                services in accordance with their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                5. Information Sharing
              </h2>
              <p className="mt-3">
                We do not sell your personal information. We may share relevant
                information with trusted service providers when necessary to
                arrange and deliver your requested travel services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                6. Data Security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect the information
                submitted through our website. However, no method of internet
                transmission or electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                7. Your Rights
              </h2>
              <p className="mt-3">
                You may contact us to ask about the personal information we
                hold about you or to request correction of inaccurate
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-forest">
                8. Contact Us
              </h2>
              <p className="mt-3">
                Kilimanjaro Travel
                <br />
                Arusha, Tanzania
                <br />
                WhatsApp: +255 759 273 339
                <br />
                Email: kilimanjarotravel.tz@gmail.com
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}