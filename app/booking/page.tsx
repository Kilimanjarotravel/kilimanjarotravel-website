'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsApp from '@/components/WhatsApp';
import PageHero from '@/components/PageHero';
import type { FormEvent } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    heroTitle: 'Request a Quote',
    heroSubtitle:
      'Tell us about your travel plans and our team will prepare a personalized itinerary and quotation for you.',
    name: 'Full Name',
    email: 'Email Address',
    country: 'Country',
    service: 'Select Travel Service',
    adults: 'Number of Adults',
    children: 'Number of Children',
    childrenAges: "Children's Ages (if any)",
    arrival: 'Arrival Date',
    departure: 'Departure Date',
    travelStyle: 'Select Travel Style',
    message:
      'Tell us about your trip, preferred destinations, activities, accommodation, or any special requests',
    submit: 'Send Request by Email & WhatsApp',
    departureError: 'Departure Date must be after Arrival Date.',
    failed: 'Failed to send booking request.',
    success: 'Booking request sent successfully by Email and WhatsApp!',
    error: 'Something went wrong. Please try again.',
    none: 'None',
    services: {
      safari: 'Safari',
      kilimanjaro: 'Kilimanjaro Trek',
      zanzibar: 'Zanzibar Holiday',
      honeymoon: 'Honeymoon Package',
      mountain: 'Mountain Adventure',
      dayTrip: 'Day Trip',
      localTour: 'Local Tour',
      carHire: 'Car Hire',
      airport: 'Airport Transfer',
    },
    styles: {
      budget: 'Budget',
      midRange: 'Mid-Range',
      luxury: 'Luxury',
      notSure: 'Not Sure',
    },
    whatsappIntro: 'I would like to request a quotation.',
    tripDetails: 'Trip Details:',
  },

  de: {
    heroTitle: 'Angebot anfragen',
    heroSubtitle:
      'Teilen Sie uns Ihre Reisepläne mit und unser Team erstellt für Sie ein individuelles Reiseprogramm und Angebot.',
    name: 'Vollständiger Name',
    email: 'E-Mail-Adresse',
    country: 'Land',
    service: 'Reiseleistung auswählen',
    adults: 'Anzahl der Erwachsenen',
    children: 'Anzahl der Kinder',
    childrenAges: 'Alter der Kinder (falls vorhanden)',
    arrival: 'Ankunftsdatum',
    departure: 'Abreisedatum',
    travelStyle: 'Reisestil auswählen',
    message:
      'Erzählen Sie uns von Ihrer Reise, bevorzugten Reisezielen, Aktivitäten, Unterkunft oder besonderen Wünschen',
    submit: 'Anfrage per E-Mail & WhatsApp senden',
    departureError: 'Das Abreisedatum muss nach dem Ankunftsdatum liegen.',
    failed: 'Die Buchungsanfrage konnte nicht gesendet werden.',
    success:
      'Buchungsanfrage erfolgreich per E-Mail und WhatsApp gesendet!',
    error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    none: 'Keine',
    services: {
      safari: 'Safari',
      kilimanjaro: 'Kilimandscharo-Trekking',
      zanzibar: 'Zanzibar Urlaub',
      honeymoon: 'Flitterwochen-Paket',
      mountain: 'Bergabenteuer',
      dayTrip: 'Tagesausflug',
      localTour: 'Lokale Tour',
      carHire: 'Autovermietung',
      airport: 'Flughafentransfer',
    },
    styles: {
      budget: 'Budget',
      midRange: 'Mittelklasse',
      luxury: 'Luxus',
      notSure: 'Noch nicht sicher',
    },
    whatsappIntro: 'Ich möchte gerne ein Angebot anfordern.',
    tripDetails: 'Reisedetails:',
  },

  fr: {
    heroTitle: 'Demander un devis',
    heroSubtitle:
      'Parlez-nous de votre projet de voyage et notre équipe préparera un itinéraire personnalisé et un devis pour vous.',
    name: 'Nom complet',
    email: 'Adresse e-mail',
    country: 'Pays',
    service: 'Sélectionnez un service de voyage',
    adults: 'Nombre d’adultes',
    children: 'Nombre d’enfants',
    childrenAges: 'Âge des enfants (si nécessaire)',
    arrival: 'Date d’arrivée',
    departure: 'Date de départ',
    travelStyle: 'Sélectionnez votre style de voyage',
    message:
      'Parlez-nous de votre voyage, de vos destinations préférées, activités, hébergement ou demandes particulières',
    submit: 'Envoyer la demande par e-mail & WhatsApp',
    departureError:
      'La date de départ doit être postérieure à la date d’arrivée.',
    failed: 'Échec de l’envoi de la demande de réservation.',
    success:
      'Demande de réservation envoyée avec succès par e-mail et WhatsApp !',
    error: 'Une erreur s’est produite. Veuillez réessayer.',
    none: 'Aucun',
    services: {
      safari: 'Safari',
      kilimanjaro: 'Trek du Kilimandjaro',
      zanzibar: 'Vacances à Zanzibar',
      honeymoon: 'Forfait lune de miel',
      mountain: 'Aventure en montagne',
      dayTrip: 'Excursion d’une journée',
      localTour: 'Visite locale',
      carHire: 'Location de voiture',
      airport: 'Transfert aéroport',
    },
    styles: {
      budget: 'Économique',
      midRange: 'Milieu de gamme',
      luxury: 'Luxe',
      notSure: 'Je ne sais pas encore',
    },
    whatsappIntro: 'Je souhaite demander un devis.',
    tripDetails: 'Détails du voyage :',
  },

  es: {
    heroTitle: 'Solicitar presupuesto',
    heroSubtitle:
      'Cuéntanos sobre tus planes de viaje y nuestro equipo preparará un itinerario personalizado y un presupuesto para ti.',
    name: 'Nombre completo',
    email: 'Dirección de correo electrónico',
    country: 'País',
    service: 'Selecciona el servicio de viaje',
    adults: 'Número de adultos',
    children: 'Número de niños',
    childrenAges: 'Edades de los niños (si corresponde)',
    arrival: 'Fecha de llegada',
    departure: 'Fecha de salida',
    travelStyle: 'Selecciona el estilo de viaje',
    message:
      'Cuéntanos sobre tu viaje, destinos preferidos, actividades, alojamiento o cualquier solicitud especial',
    submit: 'Enviar solicitud por Email y WhatsApp',
    departureError:
      'La fecha de salida debe ser posterior a la fecha de llegada.',
    failed: 'No se pudo enviar la solicitud de reserva.',
    success:
      '¡Solicitud de reserva enviada correctamente por Email y WhatsApp!',
    error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
    none: 'Ninguno',
    services: {
      safari: 'Safari',
      kilimanjaro: 'Trekking del Kilimanjaro',
      zanzibar: 'Vacaciones en Zanzíbar',
      honeymoon: 'Paquete de luna de miel',
      mountain: 'Aventura de montaña',
      dayTrip: 'Excursión de un día',
      localTour: 'Tour local',
      carHire: 'Alquiler de coche',
      airport: 'Traslado al aeropuerto',
    },
    styles: {
      budget: 'Económico',
      midRange: 'Gama media',
      luxury: 'Lujo',
      notSure: 'No estoy seguro',
    },
    whatsappIntro: 'Me gustaría solicitar un presupuesto.',
    tripDetails: 'Detalles del viaje:',
  },
};

export default function Booking() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

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

    if (
      arrivalDate &&
      departureDate &&
      new Date(departureDate as string) <=
        new Date(arrivalDate as string)
    ) {
      alert(t.departureError);
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
        alert(result.error || t.failed);
        return;
      }

      const whatsappMessage = `
Hello Kilimanjaro Travel,

${t.whatsappIntro}

Name: ${name}
Email: ${email}
Country: ${country}
Service: ${service}
Adults: ${adults}
Children: ${children || '0'}
Children's Ages: ${childrenAges || t.none}
Arrival Date: ${arrivalDate}
Departure Date: ${departureDate}
Travel Style: ${travelStyle}

${t.tripDetails}
${message}
`;

      const whatsappUrl =
        'https://wa.me/255759273339?text=' +
        encodeURIComponent(whatsappMessage);

      window.open(whatsappUrl, '_blank');

      alert(t.success);

      formElement.reset();
    } catch (error) {
      console.error('Booking error:', error);
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
        image="/images/booking-hero.jpg"
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <form
            onSubmit={sendToBooking}
            className="rounded-3xl bg-white p-8 shadow-xl"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <input
                name="name"
                required
                className="rounded-xl border p-4"
                placeholder={t.name}
              />

              <input
                name="email"
                type="email"
                required
                className="rounded-xl border p-4"
                placeholder={t.email}
              />

              <input
                name="country"
                required
                className="rounded-xl border p-4"
                placeholder={t.country}
              />

              <select
                name="service"
                required
                defaultValue=""
                className="rounded-xl border p-4"
              >
                <option value="" disabled>
                  {t.service}
                </option>

                <option>{t.services.safari}</option>
                <option>{t.services.kilimanjaro}</option>
                <option>{t.services.zanzibar}</option>
                <option>{t.services.honeymoon}</option>
                <option>{t.services.mountain}</option>
                <option>{t.services.dayTrip}</option>
                <option>{t.services.localTour}</option>
                <option>{t.services.carHire}</option>
                <option>{t.services.airport}</option>
              </select>

              <input
                name="adults"
                type="number"
                min="1"
                required
                className="rounded-xl border p-4"
                placeholder={t.adults}
              />

              <input
                name="children"
                type="number"
                min="0"
                defaultValue="0"
                className="rounded-xl border p-4"
                placeholder={t.children}
              />

              <input
                name="childrenAges"
                className="rounded-xl border p-4"
                placeholder={t.childrenAges}
              />

              <input
                name="arrivalDate"
                type="date"
                required
                className="rounded-xl border p-4"
                aria-label={t.arrival}
              />

              <input
                name="departureDate"
                type="date"
                required
                className="rounded-xl border p-4"
                aria-label={t.departure}
              />

              <select
                name="travelStyle"
                required
                defaultValue=""
                className="rounded-xl border p-4"
              >
                <option value="" disabled>
                  {t.travelStyle}
                </option>

                <option>{t.styles.budget}</option>
                <option>{t.styles.midRange}</option>
                <option>{t.styles.luxury}</option>
                <option>{t.styles.notSure}</option>
              </select>
            </div>

            <textarea
              name="message"
              required
              className="mt-5 h-40 w-full rounded-xl border p-4"
              placeholder={t.message}
            />

            <button
              type="submit"
              className="btn-gold mt-6 w-full"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}