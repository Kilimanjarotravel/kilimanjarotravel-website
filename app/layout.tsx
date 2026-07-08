import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Kilimanjaro Travel | See More. Feel More.', description: 'Tanzania safaris, Kilimanjaro treks, Zanzibar holidays, cultural tours and car hire from Arusha.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
