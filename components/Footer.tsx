import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        
        {/* Company */}
        <div>
          <img
            src="/images/logo.png"
            alt="Kilimanjaro Travel"
            className="mb-6 h-24 w-auto object-contain"
          />

          <p className="mt-2 text-gold">
            See More. Feel More.
          </p>

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

        {/* Services */}
        <div>
          <h4 className="font-bold text-gold">
            Services
          </h4>

          <div className="mt-4 space-y-2 text-white/80">
            <p>Safaris</p>
            <p>Kilimanjaro Treks</p>
            <p>Zanzibar Holidays</p>
            <p>Car Hire</p>
            <p>Cultural Tours</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-gold">
            Contact
          </h4>

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

      {/* Legal Links */}
      <div className="border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-6 px-6 py-5 text-sm text-white/70">
          <Link
            href="/terms"
            className="transition hover:text-gold"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-gold"
          >
            Privacy Policy
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-gold"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Kilimanjaro Travel. All rights reserved.
      </div>
    </footer>
  );
}