import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import LanguageProvider from '@/components/LanguageProvider';

export const metadata: Metadata = {
title: 'Kilimanjaro Travel | See More. Feel More.',
description:
'Tanzania safaris, Kilimanjaro treks, Zanzibar holidays, cultural tours and car hire from Arusha.',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
<LanguageProvider>
{children}
</LanguageProvider>

<div
id="google_translate_element"
style={{ display: 'none' }}
/>

<Script
id="google-translate-script"
strategy="afterInteractive"
src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
/>

<Script
id="google-translate-init"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html: `
window.googleTranslateElementInit = function () {
if (
window.google &&
window.google.translate &&
window.google.translate.TranslateElement
) {
new window.google.translate.TranslateElement(
{
pageLanguage: 'en',
includedLanguages: 'en,de,fr,es',
autoDisplay: false
},
'google_translate_element'
);
}
};
`,
}}
/>
</body>
</html>
);
}