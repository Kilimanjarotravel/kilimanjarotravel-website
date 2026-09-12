import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari Reviews & Guest Experiences | Kilimanjaro Travel',
  description:
    'Read guest reviews and travel experiences from travelers who explored Tanzania safaris, Kilimanjaro treks and Zanzibar with Kilimanjaro Travel.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}