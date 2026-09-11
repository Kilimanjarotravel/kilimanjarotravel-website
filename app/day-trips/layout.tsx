import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Day Trips & Excursions | Kilimanjaro Travel',
  description:
    'Discover Tanzania day trips from Arusha including wildlife safaris, waterfalls, hiking, coffee tours, cultural experiences, hot springs and Lake Duluti canoeing.',
  alternates: {
    canonical: 'https://www.kilimanjarotravel.com/day-trips',
  },
};

export default function DayTripsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}