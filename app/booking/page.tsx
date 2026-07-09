import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';

export default function Booking() {
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
          <form className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="rounded-xl border p-4" placeholder="Full Name" />
              <input className="rounded-xl border p-4" placeholder="Email Address" />
              <input className="rounded-xl border p-4" placeholder="WhatsApp Number" />
              <input className="rounded-xl border p-4" placeholder="Country" />

              <select className="rounded-xl border p-4">
                <option>Safari</option>
                <option>Kilimanjaro Trek</option>
                <option>Zanzibar Holiday</option>
                <option>Car Hire</option>
                <option>Honeymoon Package</option>
              </select>

              <input className="rounded-xl border p-4" placeholder="Number of Travelers" />
              <input className="rounded-xl border p-4" type="date" />
              <input className="rounded-xl border p-4" placeholder="Budget Range" />
            </div>

            <textarea
              className="mt-5 h-40 w-full rounded-xl border p-4"
              placeholder="Tell us about your trip"
            />

            <button type="submit" className="btn-gold mt-6 w-full">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}