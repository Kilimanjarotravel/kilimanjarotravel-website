'use client';

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Kilimanjaro Travel',
    url: 'https://www.kilimanjarotravel.com',
    description:
      'Tanzania safaris, Kilimanjaro treks, Zanzibar holidays, cultural tours and car hire from Arusha.',
    telephone: '+255759273339',
    areaServed: 'Tanzania',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Arusha',
      addressCountry: 'TZ',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}