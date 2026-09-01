'use client';

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

const translations = {
  en: {
    tagline: 'See More. Feel More.',
    description:
      'Operated by Kilimanjaro Travel Car Hire Limited, creating unforgettable safaris, Kilimanjaro adventures and Tanzania holidays from Arusha.',

    servicesTitle: 'Our Services',
    services: [
      ['Safaris', '/safaris'],
      ['Kilimanjaro Treks', '/kilimanjaro-treks'],
      ['Zanzibar Holidays', '/zanzibar'],
      ['Car Hire', '/car-hire'],
      ['Cultural Tours', '/cultural-tours'],
    ],

    quickTitle: 'Quick Links',
    quickLinks: [
      ['About Us', '/about'],
      ['Safari Packages', '/safari-packages'],
      ['Testimonials', '/testimonials'],
      ['FAQ', '/faq'],
      ['Contact Us', '/contact'],
    ],

    contactTitle: 'Contact Us',
    location: 'Arusha, Tanzania',
    contactButton: 'Contact Us →',

    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    contact: 'Contact Us',
    rights: 'All rights reserved.',
  },

  de: {
    tagline: 'Mehr sehen. Mehr fühlen.',
    description:
      'Betrieben von Kilimanjaro Travel Car Hire Limited – wir schaffen unvergessliche Safaris, Kilimandscharo-Abenteuer und Tansania-Urlaube ab Arusha.',

    servicesTitle: 'Unsere Leistungen',
    services: [
      ['Safaris', '/safaris'],
      ['Kilimandscharo-Treks', '/kilimanjaro-treks'],
      ['Sansibar-Urlaub', '/zanzibar'],
      ['Autovermietung', '/car-hire'],
      ['Kulturreisen', '/cultural-tours'],
    ],

    quickTitle: 'Schnelllinks',
    quickLinks: [
      ['Über uns', '/about'],
      ['Safari-Pakete', '/safari-packages'],
      ['Kundenstimmen', '/testimonials'],
      ['FAQ', '/faq'],
      ['Kontakt', '/contact'],
    ],

    contactTitle: 'Kontakt',
    location: 'Arusha, Tansania',
    contactButton: 'Kontakt →',

    terms: 'Allgemeine Geschäftsbedingungen',
    privacy: 'Datenschutzerklärung',
    contact: 'Kontakt',
    rights: 'Alle Rechte vorbehalten.',
  },

  fr: {
    tagline: 'Voir plus. Ressentir plus.',
    description:
      'Exploité par Kilimanjaro Travel Car Hire Limited, nous créons des safaris inoubliables, des aventures au Kilimandjaro et des vacances en Tanzanie depuis Arusha.',

    servicesTitle: 'Nos services',
    services: [
      ['Safaris', '/safaris'],
      ['Treks du Kilimandjaro', '/kilimanjaro-treks'],
      ['Vacances à Zanzibar', '/zanzibar'],
      ['Location de voitures', '/car-hire'],
      ['Circuits culturels', '/cultural-tours'],
    ],

    quickTitle: 'Liens rapides',
    quickLinks: [
      ['À propos de nous', '/about'],
      ['Forfaits Safari', '/safari-packages'],
      ['Témoignages', '/testimonials'],
      ['FAQ', '/faq'],
      ['Nous contacter', '/contact'],
    ],

    contactTitle: 'Contactez-nous',
    location: 'Arusha, Tanzanie',
    contactButton: 'Nous contacter →',

    terms: 'Conditions générales',
    privacy: 'Politique de confidentialité',
    contact: 'Contact',
    rights: 'Tous droits réservés.',
  },

  es: {
    tagline: 'Ver más. Sentir más.',
    description:
      'Operado por Kilimanjaro Travel Car Hire Limited, creando safaris inolvidables, aventuras en el Kilimanjaro y vacaciones en Tanzania desde Arusha.',

    servicesTitle: 'Nuestros servicios',
    services: [
      ['Safaris', '/safaris'],
      ['Trekking del Kilimanjaro', '/kilimanjaro-treks'],
      ['Vacaciones en Zanzíbar', '/zanzibar'],
      ['Alquiler de coches', '/car-hire'],
      ['Tours culturales', '/cultural-tours'],
    ],

    quickTitle: 'Enlaces rápidos',
    quickLinks: [
      ['Sobre nosotros', '/about'],
      ['Paquetes de Safari', '/safari-packages'],
      ['Testimonios', '/testimonials'],
      ['Preguntas frecuentes', '/faq'],
      ['Contáctanos', '/contact'],
    ],

    contactTitle: 'Contáctanos',
    location: 'Arusha, Tanzania',
    contactButton: 'Contáctanos →',

    terms: 'Términos y condiciones',
    privacy: 'Política de privacidad',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
  },
};

export default function Footer() {
  const { language } = useLanguage();

  const t = translations[language] || translations.en;

  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* COMPANY */}
        <div>
          <Link href="/" className="inline-block">
            <img
              src="/images/logo.png"
              alt="Kilimanjaro Travel"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 font-semibold text-gold">
            {t.tagline}
          </p>

          <p className="mt-4 max-w-sm leading-7 text-white/70">
            {t.description}
          </p>

          {/* SOCIAL MEDIA */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/kilimanjarotravel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gold"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1DGggS9F8J/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-3 transition hover:bg-gold"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@kilimanjarotravel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-gold"
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
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-bold text-gold">
            {t.servicesTitle}
          </h3>

          <div className="mt-5 space-y-3">
            {t.services.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block text-white/70 transition hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-gold">
            {t.quickTitle}
          </h3>

          <div className="mt-5 space-y-3">
            {t.quickLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block text-white/70 transition hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-bold text-gold">
            {t.contactTitle}
          </h3>

          <div className="mt-5 space-y-4 text-white/75">

            <a
              href="tel:+255759273339"
              className="flex items-start gap-3 transition hover:text-gold"
            >
              <Phone className="mt-1 shrink-0 text-gold" size={19} />
              <span>+255 759 273 339</span>
            </a>

            <a
              href="mailto:kilimanjarotravel.tz@gmail.com"
              className="flex items-start gap-3 break-all transition hover:text-gold"
            >
              <Mail className="mt-1 shrink-0 text-gold" size={19} />
              <span>kilimanjarotravel.tz@gmail.com</span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-gold" size={19} />
              <span>{t.location}</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            {t.contactButton}
          </Link>
        </div>
      </div>

      {/* LEGAL */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-7 gap-y-3 px-6 py-5 text-sm text-white/60">

          <Link
            href="/terms"
            className="transition hover:text-gold"
          >
            {t.terms}
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-gold"
          >
            {t.privacy}
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-gold"
          >
            {t.contact}
          </Link>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-white/50">
        ©️ {new Date().getFullYear()} Kilimanjaro Travel. {t.rights}
      </div>
    </footer>
  );
}