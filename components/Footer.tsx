import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <img
            src="/images/logo.png"
            alt="Kilimanjaro Travel"
            className="mb-6 h-24 w-auto object-contain"
          />

          <p className="mt-2 text-gold">See More. Feel More.</p>

          <p className="mt-4 text-white/75">
            Operated by Kilimanjaro Travel Car Hire Limited.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/kilimanjarotravel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gold"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/share/1DGggS9F8J/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gold"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://www.tiktok.com/@kilimanjarotravel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full bg-white/10 px-3 py-2 font-bold transition hover:bg-gold"
            >
              TikTok
            </a>

            <a
              href="https://youtube.com/@kilimanjarotravel5871"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gold"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gold">Services</h4>

          <p className="mt-4 leading-8 text-white/80">
            Safaris
            <br />
            Kilimanjaro Treks
            <br />
            Zanzibar Holidays
            <br />
            Car Hire
            <br />
            Cultural Tours
          </p>
        </div>

        <div>
          <h4 className="font-bold text-gold">Contact</h4>

          <p className="mt-4 flex gap-3">
            <Phone size={20} />
            +255 759 273 339
          </p>

          <p className="mt-3 flex gap-3">
            <Mail size={20} />
            kilimanjarotravel.tz@gmail.com
          </p>

          <p className="mt-3 flex gap-3">
            <MapPin size={20} />
            Arusha, Tanzania
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © Kilimanjaro Travel. All rights reserved.
      </div>
    </footer>
  );
}