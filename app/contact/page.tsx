'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/components/LanguageProvider';
import type { FormEvent } from 'react';

const translations = {
  en: {
    heroTitle: 'Contact Us',
    heroSubtitle:
      "We're here to help you plan your perfect Tanzania adventure. Get in touch with our travel specialists today.",
    contactTitle: 'Contact Kilimanjaro Travel',

    whatsapp: 'WhatsApp',
    email: 'Email',
    location: 'Location',
    viewOffice: '📍 View Our Office on Google Maps',

    fullName: 'Full Name',
    emailAddress: 'Email Address',
    country: 'Country',
    selectService: 'Select Travel Service',
    messagePlaceholder: 'How can we help you?',
    sendMessage: 'Send Message',

    services: {
      safari: 'Safari',
      kilimanjaro: 'Kilimanjaro Trek',
      mountain: 'Mountain Adventure',
      dayTrip: 'Day Trip',
      localTour: 'Local Tour',
      zanzibar: 'Zanzibar Holiday',
      carHire: 'Car Hire',
      airport: 'Airport Transfer',
      honeymoon: 'Honeymoon Package',
    },

    success: 'Message sent successfully! Thank you for contacting us.',
    failed: 'Failed to send message.',
    error: 'Something went wrong. Please try again.',
  },

  de: {
    heroTitle: 'Kontaktieren Sie uns',
    heroSubtitle:
      'Wir helfen Ihnen gerne bei der Planung Ihres perfekten Tansania-Abenteuers. Kontaktieren Sie noch heute unsere Reisespezialisten.',
    contactTitle: 'Kilimanjaro Travel kontaktieren',

    whatsapp: 'WhatsApp',
    email: 'E-Mail',
    location: 'Standort',
    viewOffice: '📍 Unser Büro auf Google Maps ansehen',

    fullName: 'Vollständiger Name',
    emailAddress: 'E-Mail-Adresse',
    country: 'Land',
    selectService: 'Reiseleistung auswählen',
    messagePlaceholder: 'Wie können wir Ihnen helfen?',
    sendMessage: 'Nachricht senden',

    services: {
      safari: 'Safari',
      kilimanjaro: 'Kilimanjaro-Trekking',
      mountain: 'Bergabenteuer',
      dayTrip: 'Tagesausflug',
      localTour: 'Lokale Tour',
      zanzibar: 'Sansibar-Urlaub',
      carHire: 'Mietwagen',
      airport: 'Flughafentransfer',
      honeymoon: 'Flitterwochen-Paket',
    },

    success:
      'Nachricht erfolgreich gesendet! Vielen Dank für Ihre Kontaktaufnahme.',
    failed: 'Nachricht konnte nicht gesendet werden.',
    error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
  },

  fr: {
    heroTitle: 'Contactez-nous',
    heroSubtitle:
      'Nous sommes là pour vous aider à planifier votre aventure parfaite en Tanzanie. Contactez nos spécialistes du voyage dès aujourd’hui.',
    contactTitle: 'Contacter Kilimanjaro Travel',

    whatsapp: 'WhatsApp',
    email: 'E-mail',
    location: 'Localisation',
    viewOffice: '📍 Voir notre bureau sur Google Maps',

    fullName: 'Nom complet',
    emailAddress: 'Adresse e-mail',
    country: 'Pays',
    selectService: 'Sélectionnez un service',
    messagePlaceholder: 'Comment pouvons-nous vous aider ?',
    sendMessage: 'Envoyer le message',

    services: {
      safari: 'Safari',
      kilimanjaro: 'Trek du Kilimandjaro',
      mountain: 'Aventure en montagne',
      dayTrip: 'Excursion d’une journée',
      localTour: 'Tour local',
      zanzibar: 'Vacances à Zanzibar',
      carHire: 'Location de voiture',
      airport: 'Transfert aéroport',
      honeymoon: 'Forfait lune de miel',
    },

    success:
      'Message envoyé avec succès ! Merci de nous avoir contactés.',
    failed: 'Échec de l’envoi du message.',
    error: 'Une erreur s’est produite. Veuillez réessayer.',
  },

  es: {
    heroTitle: 'Contáctenos',
    heroSubtitle:
      'Estamos aquí para ayudarle a planificar su aventura perfecta en Tanzania. Póngase en contacto con nuestros especialistas en viajes hoy mismo.',
    contactTitle: 'Contactar con Kilimanjaro Travel',

    whatsapp: 'WhatsApp',
    email: 'Correo electrónico',
    location: 'Ubicación',
    viewOffice: '📍 Ver nuestra oficina en Google Maps',

    fullName: 'Nombre completo',
    emailAddress: 'Dirección de correo electrónico',
    country: 'País',
    selectService: 'Seleccione un servicio',
    messagePlaceholder: '¿Cómo podemos ayudarle?',
    sendMessage: 'Enviar mensaje',

    services: {
      safari: 'Safari',
      kilimanjaro: 'Trekking del Kilimanjaro',
      mountain: 'Aventura de montaña',
      dayTrip: 'Excursión de un día',
      localTour: 'Tour local',
      zanzibar: 'Vacaciones en Zanzíbar',
      carHire: 'Alquiler de coche',
      airport: 'Traslado al aeropuerto',
      honeymoon: 'Paquete de luna de miel',
    },

    success:
      '¡Mensaje enviado correctamente! Gracias por contactarnos.',
    failed: 'No se pudo enviar el mensaje.',
    error: 'Algo salió mal. Por favor, inténtelo de nuevo.',
  },
};

export default function Contact() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  async function sendToEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

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
        alert(result.error || t.failed);
        return;
      }

      alert(t.success);

      formElement.reset();
    } catch (error) {
      console.error(error);
      alert(t.error);
    }
  }

  return (
    <main>
      <Header />
      <WhatsApp />

      <PageHero
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        image="/images/book-six.jpg"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="section-title">{t.contactTitle}</h2>

            <div className="mt-6 space-y-4 text-lg leading-8">
              <p>
                <strong>📱 {t.whatsapp}:</strong> +255 759 273 339
              </p>

              <p>
                <strong>📧 {t.email}:</strong>{' '}
                kilimanjarotravel.tz@gmail.com
              </p>

              <p>
                <strong>📍 {t.location}:</strong> Arusha, Tanzania
              </p>

              <a
                href="https://maps.app.goo.gl/oDtj4B18EShgzy5CA?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-forest px-6 py-3 font-bold text-white"
              >
                {t.viewOffice}
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
              placeholder={t.fullName}
            />

            <input
              name="email"
              type="email"
              required
              className="mb-4 w-full rounded-xl border p-4"
              placeholder={t.emailAddress}
            />

            <input
              name="country"
              required
              className="mb-4 w-full rounded-xl border p-4"
              placeholder={t.country}
            />

            <select
              name="service"
              required
              className="mb-4 w-full rounded-xl border p-4"
              defaultValue=""
            >
              <option value="" disabled>
                {t.selectService}
              </option>

              <option>{t.services.safari}</option>
              <option>{t.services.kilimanjaro}</option>
              <option>{t.services.mountain}</option>
              <option>{t.services.dayTrip}</option>
              <option>{t.services.localTour}</option>
              <option>{t.services.zanzibar}</option>
              <option>{t.services.carHire}</option>
              <option>{t.services.airport}</option>
              <option>{t.services.honeymoon}</option>
            </select>

            <textarea
              name="message"
              required
              className="mb-4 h-36 w-full rounded-xl border p-4"
              placeholder={t.messagePlaceholder}
            />

            <button
              type="submit"
              className="btn-gold w-full"
            >
              {t.sendMessage}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}