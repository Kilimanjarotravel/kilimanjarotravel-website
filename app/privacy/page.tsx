'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const translations = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 2026',

    sections: [
      {
        title: '1. Introduction',
        text:
          'Kilimanjaro Travel respects your privacy and is committed to protecting the personal information you provide when using our website and travel services.',
      },
      {
        title: '2. Information We Collect',
        text:
          'When you contact us or submit a booking enquiry, we may collect information such as your name, email address, phone or WhatsApp number, country, travel dates, number of travellers, and trip preferences.',
      },
      {
        title: '3. How We Use Your Information',
        text:
          'We use the information you provide to respond to enquiries, prepare travel quotations, arrange bookings, communicate with you, and provide the travel services you request.',
      },
      {
        title: '4. WhatsApp and Email',
        text:
          'If you choose to contact us through WhatsApp or email, your information may be processed through those communication services in accordance with their respective privacy policies.',
      },
      {
        title: '5. Information Sharing',
        text:
          'We do not sell your personal information. We may share relevant information with trusted service providers when necessary to arrange and deliver your requested travel services.',
      },
      {
        title: '6. Data Security',
        text:
          'We take reasonable measures to protect the information submitted through our website. However, no method of internet transmission or electronic storage is completely secure.',
      },
      {
        title: '7. Your Rights',
        text:
          'You may contact us to ask about the personal information we hold about you or to request correction of inaccurate information.',
      },
      {
        title: '8. Contact Us',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'Email: kilimanjarotravel.tz@gmail.com',
    },
  },

  de: {
    title: 'Datenschutzerklärung',
    updated: 'Letzte Aktualisierung: August 2026',

    sections: [
      {
        title: '1. Einleitung',
        text:
          'Kilimanjaro Travel respektiert Ihre Privatsphäre und verpflichtet sich, die persönlichen Daten zu schützen, die Sie bei der Nutzung unserer Website und Reisedienstleistungen bereitstellen.',
      },
      {
        title: '2. Welche Informationen wir erfassen',
        text:
          'Wenn Sie uns kontaktieren oder eine Buchungsanfrage senden, können wir Informationen wie Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer oder WhatsApp-Nummer, Ihr Land, Reisedaten, die Anzahl der Reisenden und Ihre Reisepräferenzen erfassen.',
      },
      {
        title: '3. Wie wir Ihre Informationen verwenden',
        text:
          'Wir verwenden die von Ihnen bereitgestellten Informationen, um Anfragen zu beantworten, Reiseangebote zu erstellen, Buchungen zu organisieren, mit Ihnen zu kommunizieren und die von Ihnen angeforderten Reisedienstleistungen bereitzustellen.',
      },
      {
        title: '4. WhatsApp und E-Mail',
        text:
          'Wenn Sie uns über WhatsApp oder E-Mail kontaktieren, können Ihre Informationen über diese Kommunikationsdienste gemäß deren jeweiligen Datenschutzrichtlinien verarbeitet werden.',
      },
      {
        title: '5. Weitergabe von Informationen',
        text:
          'Wir verkaufen Ihre persönlichen Daten nicht. Wir können relevante Informationen an vertrauenswürdige Dienstleister weitergeben, wenn dies erforderlich ist, um die von Ihnen gewünschten Reisedienstleistungen zu organisieren und bereitzustellen.',
      },
      {
        title: '6. Datensicherheit',
        text:
          'Wir ergreifen angemessene Maßnahmen, um die über unsere Website übermittelten Informationen zu schützen. Allerdings ist keine Methode der Internetübertragung oder elektronischen Speicherung vollständig sicher.',
      },
      {
        title: '7. Ihre Rechte',
        text:
          'Sie können uns kontaktieren, um Informationen über die von uns gespeicherten personenbezogenen Daten zu erhalten oder die Korrektur unrichtiger Informationen zu verlangen.',
      },
      {
        title: '8. Kontakt',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tansania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'E-Mail: kilimanjarotravel.tz@gmail.com',
    },
  },

  fr: {
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : août 2026',

    sections: [
      {
        title: '1. Introduction',
        text:
          'Kilimanjaro Travel respecte votre vie privée et s’engage à protéger les informations personnelles que vous fournissez lorsque vous utilisez notre site web et nos services de voyage.',
      },
      {
        title: '2. Informations que nous collectons',
        text:
          'Lorsque vous nous contactez ou soumettez une demande de réservation, nous pouvons collecter des informations telles que votre nom, votre adresse e-mail, votre numéro de téléphone ou WhatsApp, votre pays, vos dates de voyage, le nombre de voyageurs et vos préférences de voyage.',
      },
      {
        title: '3. Comment nous utilisons vos informations',
        text:
          'Nous utilisons les informations que vous fournissez pour répondre aux demandes, préparer des devis de voyage, organiser les réservations, communiquer avec vous et fournir les services de voyage que vous demandez.',
      },
      {
        title: '4. WhatsApp et e-mail',
        text:
          'Si vous choisissez de nous contacter via WhatsApp ou e-mail, vos informations peuvent être traitées par ces services de communication conformément à leurs politiques de confidentialité respectives.',
      },
      {
        title: '5. Partage des informations',
        text:
          'Nous ne vendons pas vos informations personnelles. Nous pouvons partager les informations pertinentes avec des prestataires de services de confiance lorsque cela est nécessaire pour organiser et fournir les services de voyage demandés.',
      },
      {
        title: '6. Sécurité des données',
        text:
          'Nous prenons des mesures raisonnables pour protéger les informations soumises via notre site web. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n’est totalement sécurisée.',
      },
      {
        title: '7. Vos droits',
        text:
          'Vous pouvez nous contacter pour demander des informations sur les données personnelles que nous détenons à votre sujet ou pour demander la correction d’informations inexactes.',
      },
      {
        title: '8. Nous contacter',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzanie',
      whatsapp: 'WhatsApp : +255 759 273 339',
      email: 'E-mail : kilimanjarotravel.tz@gmail.com',
    },
  },

  es: {
    title: 'Política de privacidad',
    updated: 'Última actualización: agosto de 2026',

    sections: [
      {
        title: '1. Introducción',
        text:
          'Kilimanjaro Travel respeta su privacidad y se compromete a proteger la información personal que proporciona cuando utiliza nuestro sitio web y nuestros servicios de viaje.',
      },
      {
        title: '2. Información que recopilamos',
        text:
          'Cuando se pone en contacto con nosotros o envía una consulta de reserva, podemos recopilar información como su nombre, dirección de correo electrónico, número de teléfono o WhatsApp, país, fechas de viaje, número de viajeros y preferencias del viaje.',
      },
      {
        title: '3. Cómo utilizamos su información',
        text:
          'Utilizamos la información que proporciona para responder consultas, preparar presupuestos de viaje, organizar reservas, comunicarnos con usted y proporcionar los servicios de viaje que solicita.',
      },
      {
        title: '4. WhatsApp y correo electrónico',
        text:
          'Si decide ponerse en contacto con nosotros mediante WhatsApp o correo electrónico, su información puede ser procesada a través de esos servicios de comunicación de acuerdo con sus respectivas políticas de privacidad.',
      },
      {
        title: '5. Compartir información',
        text:
          'No vendemos su información personal. Podemos compartir información relevante con proveedores de servicios de confianza cuando sea necesario para organizar y proporcionar los servicios de viaje solicitados.',
      },
      {
        title: '6. Seguridad de los datos',
        text:
          'Tomamos medidas razonables para proteger la información enviada a través de nuestro sitio web. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es completamente seguro.',
      },
      {
        title: '7. Sus derechos',
        text:
          'Puede ponerse en contacto con nosotros para preguntar sobre la información personal que tenemos sobre usted o solicitar la corrección de información incorrecta.',
      },
      {
        title: '8. Contáctenos',
        text: '',
      },
    ],

    contact: {
      location: 'Arusha, Tanzania',
      whatsapp: 'WhatsApp: +255 759 273 339',
      email: 'Correo electrónico: kilimanjarotravel.tz@gmail.com',
    },
  },
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const t =
    translations[language as keyof typeof translations] || translations.en;

  return (
    <>
      <Header />

      <main className="bg-white text-gray-800">
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-36">
          <h1 className="text-4xl font-bold text-forest">
            {t.title}
          </h1>

          <p className="mt-3 text-gray-500">
            {t.updated}
          </p>

          <div className="mt-10 space-y-8 leading-7">
            {t.sections.map((section, index) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-forest">
                  {section.title}
                </h2>

                {index !== t.sections.length - 1 && (
                  <p className="mt-3">
                    {section.text}
                  </p>
                )}

                {index === t.sections.length - 1 && (
                  <p className="mt-3">
                    Kilimanjaro Travel
                    <br />
                    {t.contact.location}
                    <br />
                    {t.contact.whatsapp}
                    <br />
                    {t.contact.email}
                  </p>
                )}
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}