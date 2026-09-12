import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari & Kilimanjaro FAQ | Kilimanjaro Travel',
  description:
    'Find answers about Tanzania safaris, Kilimanjaro treks, Zanzibar holidays, custom safari packages, travel seasons and trip planning.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}