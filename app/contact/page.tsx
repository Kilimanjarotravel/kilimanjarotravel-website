import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';

export default function Contact() {
  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title="Plan Your Adventure"
        subtitle="Send us your travel request and our team will respond quickly."
        image="/images/landcruiser.jpeg"
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

          <form className="card p-8">
            <input className="mb-4 w-full rounded-xl border p-4" placeholder="Full Name" />
            <input className="mb-4 w-full rounded-xl border p-4" placeholder="Email Address" />
            <input className="mb-4 w-full rounded-xl border p-4" placeholder="Country" />

            <select className="mb-4 w-full rounded-xl border p-4">
              <option>Safari</option>
              <option>Kilimanjaro Trek</option>
              <option>Zanzibar</option>
              <option>Car Hire</option>
            </select>

            <textarea
              className="mb-4 h-36 w-full rounded-xl border p-4"
              placeholder="Tell us about your trip"
            />

            <button type="submit" className="btn-gold w-full">
              Request Quote
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}